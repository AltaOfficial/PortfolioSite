"use server";
import { client } from "./client";
import { groq } from "next-sanity";

export async function getProjects() {
  return client.fetch(groq`*[_type == "project"]{
        _id,
        title,
        projectImages,
        tags,
        shortDescription
        }`);
}

export async function getProject(projectId) {
  return client.fetch(groq`*[_type == "project" && _id == "${projectId}"][0]{
      _id,
      title,
      content,
      projectImages,
      startDate,
      endDate,
      liveSiteLink,
      repoLink,
      tags,
      shortDescription
      }`);
}
