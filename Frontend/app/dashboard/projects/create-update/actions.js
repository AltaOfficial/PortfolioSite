"use server";
import supabase from "@/database/supabaseClient";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// TODO: just pass in formData
// title,
// elevatorPitch,
// fullMarkdownDescription,
// projectId,
// dateFrom,
// dateTo,
// imageFiles,
// techStackTags,
// liveSiteLink,
// repoLink,

export async function uploadProject(formData) {
  let projectImageUrls = [];
  if (!formData.get("filesDetails")) {
    return {
      title: "Missing Fields",
      message: "Atleast one image must be uploaded",
    };
  }
  if (JSON.parse(formData.get("techStacks")).length == 0) {
    return {
      title: "Missing fields",
      message: "There must be atleast one tech stack item",
    };
  }
  const techStacks = JSON.parse(formData.get("techStacks"));
  const filesDetails = JSON.parse(formData.get("filesDetails"));
  if (!formData.get("title")) {
    return {
      title: "Missing Fields",
      message: "Title is a required field",
    };
  } else if (
    formData.get("title").length == 0 ||
    formData.get("title").length > 16
  ) {
    return {
      title: "Field Invalid",
      message: "Title must be max 16 characters (spaces incl.)",
    };
  } else if (!formData.get("body")) {
    return {
      title: "Missing Fields",
      message: "Body is a required field",
    };
  } else if (!formData.get("shortDescription")) {
    return {
      title: "Missing Fields",
      message: "Paragraph explainer is a required field",
    };
  } else if (!formData.get("from")) {
    return {
      title: "Missing Fields",
      message: "From date is a required field",
    };
  } else if (formData.getAll("files").length == 0) {
    return {
      title: "Missing Fields",
      message: "Atleast 1 project image is required",
    };
  } else if (
    filesDetails.filter((fileDetail) => fileDetail.featured == true).length == 0
  ) {
    return {
      title: "Missing Fields",
      message: "Atleast 1 project image has to be stared",
    };
  } else if (
    techStacks.filter((techItem) => techItem.featured == true).length == 0
  ) {
    return {
      title: "Missing Fields",
      message: "Atleast 1 tech stack item has to be stared",
    };
  }

  const s3 = new S3Client({
    region: process.env.NEXT_AWS_S3_REGION,
    credentials: {
      secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
      accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
    },
  });

  for (const file of await formData.getAll("files")) {
    let buffer = Buffer.from(await file.arrayBuffer());
    projectImageUrls.push(
      `https://${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_AWS_S3_REGION}.amazonaws.com/${file.name}`
    );
    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
        Key: file.name,
        Body: buffer,
        ContentType: file.type,
      })
    );
  }

  // check if project id was provided, if so, update project record, if not, create a new record
  if (formData.get("projectId")) {
  } else {
    let thumbnailFile = filesDetails.filter((file) => file.featured == true)[0];
    const { error } = await supabase.from("projects").insert([
      {
        title: formData.get("title"),
        thumbnail_url: `https://${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_AWS_S3_REGION}.amazonaws.com/${thumbnailFile.fileName}`,
        tags: JSON.parse(formData.get("techStacks")),
        live_site_url: formData.get("liveSiteLink"),
        repository_url: formData.get("repoLink"),
        project_images_urls: projectImageUrls,
        start_date: formData.get("from"),
        end_date: formData.get("to") ? formData.get("to") : null,
        body: formData.get("body"),
        short_description: formData.get("shortDescription"),
      },
    ]); // Finish this

    if (error) {
      console.log("no success");
      return { title: error.name ? error.name : "", message: error.message };
    } else {
      console.log("success");
      return { title: "Success", message: "Project successfully created" };
    }
  }
}
