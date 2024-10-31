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
  const filesDetails = JSON.parse(formData.get("filesDetails"));
  if (!formData.get("title")) {
    return {
      title: "Missing Fields",
      message: "Title is a required field",
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
    console.log(
      filesDetails.filter((fileDetail) => fileDetail.featured == true).length
    );
    return {
      title: "Missing Fields",
      message: "Atleast 1 project image has to be stared",
    };
  }

  const s3 = new S3Client({
    region: process.env.NEXT_AWS_S3_REGION,
    credentials: {
      secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
      accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
    },
  });

  formData.getAll("files").forEach(async (file) => {
    let buffer = Buffer.from(await file.arrayBuffer());
    console.log(file);
    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
        Key: file.name,
        Body: buffer,
        ContentType: file.type,
      })
    );
  });

  // check if project id was provided, if so, update project record, if not, create a new record
  if (formData.get("projectId")) {
  } else {
    let thumbnailFile = filesDetails.filter((file) => file.featured == true)[0];
    const { data, error } = await supabase.from("projects").insert([
      {
        title: formData.get("title"),
        thumbnail_url: `https://${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_AWS_S3_REGION}.amazonaws.com/${thumbnailFile.fileName}`,
      },
    ]); // Finish this

    if (error) {
      console.log("no success");
      return { title: error.name, message: error.message };
    }

    if (data) {
      console.log("success");
      return { title: "Success", message: "Project successfully created" };
    }
  }
}
