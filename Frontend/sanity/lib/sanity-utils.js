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

export async function getHackathons() {
  return client.fetch(groq`*[_type == "hackathon"]{
    _id,
    title,
    hackathonImages,
    startDate,
    endDate,
    shortDescription
    }`);
}

export async function getHackathon(hackathonId) {
  return client.fetch(groq`*[_type == "hackathon" && _id == "${hackathonId}"][0]{
    _id,
    title,
    content,
    hackathonImages,
    startDate,
    endDate,
    liveSiteLink,
    repoLink,
    tags,
    shortDescription
    }`);
}

export async function getTechItems() {
  return client.fetch(groq`*[_type == "techStackItem"]{
    _id,
    techName,
    techItemLogo,
    familiarity,
    expirience,
    techCategory
    }`);
}
