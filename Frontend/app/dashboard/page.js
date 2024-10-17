import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col">
      <Link href={"/dashboard/projects"}>Projects list</Link>
      <Link href={"/dashboard/hackathons"}>Hackathons list</Link>
    </div>
  );
}
