import Link from "next/link";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";

export default function Hackathons() {
  const columns = [
    {
      accessorKey: "hackathonName",
      header: "Hackathon Name",
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div>
        <Link href="">+ New hackathon</Link>
      </div>
      <table></table>
    </div>
  );
}
