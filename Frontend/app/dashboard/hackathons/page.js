import Link from "next/link";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";

export default function hackathons() {
  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  const columns = [
    {
      accessorKey: "hackathonName",
      header: "Hackathon Name",
    },
  ];

  return (
    <div>
      <div>
        <Link href="">+ New hackathon</Link>
      </div>
      <table></table>
    </div>
  );
}
