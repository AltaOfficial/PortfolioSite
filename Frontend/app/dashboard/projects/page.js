import Link from "next/link";

export default function projects() {
  return (
    <div>
      <div>
        <Link href={"/dashboard/projects/create-update"}>+ New project</Link>
      </div>
      <table></table>
    </div>
  );
}
