"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/app/actions";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

export default function Projects() {
  const [data, setData] = useState([]);
  const columns = [
    {
      id: "select",
      accessorKey: "select",
      header: ({ table }) => (
        <div>
          <input type="checkbox" name="checkbox" />
        </div>
      ),
      cell: (props) => (
        <div>
          <input type="checkbox" name="checkbox" />
        </div>
      ),
    },
    {
      accessorKey: "projectName",
      header: "Project Name",
      cell: ({ cell, row }) => <div>{console.log(cell)}</div>,
    },
  ];

  useEffect(() => {
    getAllProjects().then(({ data }) => {
      let projectsTableData = data.map((project, index) => {
        return {
          accessorKey: project.id,
          id: "projectName",
          projectName: project.title,
        };
      });
      console.log(data);
      setData(projectsTableData);
    });
  }, []);

  const tableInstance = useReactTable({
    columns: columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <div>
        <Link href="">+ New Project</Link>
      </div>
      <table className="">
        <thead>
          {data &&
            tableInstance.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className="border-2 border-white" key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
        </thead>
        <tbody>
          {data &&
            tableInstance.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className="border-2 border-white" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext)}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
