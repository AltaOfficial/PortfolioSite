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
