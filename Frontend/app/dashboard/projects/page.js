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
  const [rowSelection, setRowSelection] = useState([]);

  useEffect(() => {
    getAllProjects().then(({ data }) => {
      let projectsTableData = data.map((project, index) => {
        return {
          projectName: project.title,
        };
      });
      console.log(data);
      setData(projectsTableData);
    });
  }, []);

  const columns = [
    {
      id: "select",
      accessorKey: "select",
      header: ({ table }) => (
        <div>
          <input
            type="checkbox"
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            name="checkbox"
          />
        </div>
      ),
      cell: ({ row }) => (
        <div>
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
            name="checkbox"
          />
        </div>
      ),
    },
    {
      accessorKey: "projectName",
      header: "Project Name",
      cell: (props) => <div>{props.getValue()}</div>,
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-4">
      <div>
        <Link
          href="/dashboard/projects/create-update"
          className="p-2 bg-white rounded-md text-black font-semibold m-2"
        >
          + New Project
        </Link>
        {console.log(Object.keys(rowSelection))}
        {Object.keys(rowSelection).length > 0 && (
          <Link
            href=""
            className="p-2 bg-[#ff4233] rounded-md text-white font-semibold m-2"
          >
            Delete Project(s)
          </Link>
        )}
        {Object.keys(rowSelection).length == 1 && (
          <Link
            href=""
            className="p-2 bg-[#33c8ff] rounded-md text-white font-semibold m-2"
          >
            Edit Project
          </Link>
        )}
      </div>
      <table className="m-3 rounded-lg">
        <thead>
          {data &&
            tableInstance.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className="border-2 border-white p-2" key={header.id}>
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
                  <td className="border-2 border-white p-2" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
