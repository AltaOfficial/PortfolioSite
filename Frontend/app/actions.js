"use server";
import supabase from "@/database/supabaseClient";

export async function getAllProjects() {
  const { data, error } = await supabase.from("projects").select();
  if (error) {
    return { error: error.message };
  } else {
    return { data: data };
  }
}

export async function deleteProjects(projectIds) {
  let errorsCount = 0;
  let successesCount = 0;
  for (const projectId of projectIds) {
    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("id", parseInt(projectId));
    error ? errorsCount++ : successesCount++;
  }
  return {
    title: "",
    message: errorsCount
      ? `Successfully deleted ${successesCount} projects and failed to delete ${errorsCount}`
      : `Successfully deleted ${successesCount} projects`,
  };
}

export async function getProject(projectId) {
  const { data, error } = await supabase
    .from("projects")
    .select()
    .eq("id", parseInt(projectId));

  if (data) {
    return {
      data: data[0],
      error: null,
    };
  } else {
    return {
      data: null,
      error: error.message,
    };
  }
}

export async function getAllHackathons() {
  const { data, error } = await supabase.from("hackathons").select();
  if (error) {
    return { error: error.message };
  } else {
    return { data: data };
  }
}
