"use server";
import supabase from "@/database/supabaseClient";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// TODO: just pass in formData
export async function uploadProject({
  title,
  elevatorPitch,
  fullMarkdownDescription,
  projectId,
  dateFrom,
  dateTo,
  imageFiles,
  techStackTags,
  liveSiteLink,
  repoLink,
}) {
  let files = JSON.parse(imageFiles);
  const s3 = new S3Client({
    region: process.env.NEXT_AWS_S3_REGION,
    credentials: {
      secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
      accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
    },
  });
  console.log(files);
  await s3.send(
    new PutObjectCommand({
      Bucket: "jaedon-portfolio-site-bucket",
      Key: "my-first-text.txt",
      Body: "ermmm what the sigma",
    })
  );

  // check if project id was provided, if so, update project record, if not, create a new record
  if (projectId) {
  } else {
    const { data, error } = await supabase
      .from("projects")
      .insert([{ title: elevatorPitch }]);

    if (error) {
      console.error(error.message);
    }

    if (data) {
      console.log(data);
    }

    return { data, error };
  }
}
