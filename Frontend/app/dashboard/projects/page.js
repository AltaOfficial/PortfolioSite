"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllProjects, deleteProjects, getProject } from "@/app/actions";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useToast } from "@/components/toast/toastContext";
import { useRouter } from "next/navigation";

export default function Projects() {
  const [data, setData] = useState([]);
  const [rowSelection, setRowSelection] = useState([]);
  const toast = useToast();
  const router = useRouter();

  function setProjectData() {
    getAllProjects().then(({ data }) => {
      let projectsTableData = data.map((project, index) => {
        return {
          projectName: { title: project.title, id: project.id },
        };
      });
      setData(projectsTableData);
    });
  }

  useEffect(() => {
    setProjectData();
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
      cell: (props) => (
        <div>
          <p>{props.getValue()?.title}</p>
          <p className="text-xs"> id: {props.getValue()?.id}</p>
        </div>
      ),
    },
  ];

  const tableInstance = useReactTable({
    columns,
    data,
    state: {
      rowSelection,
    },
    enableRowSelection: true,
    getRowId: (row) => row.projectName.id,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-4">
      <div>
        <Link href="/dashboard/projects/create-update">
          <button className="p-2 bg-white rounded-md text-black font-semibold mx-2 my-1">
            + New Project
          </button>
        </Link>
        {Object.keys(rowSelection).length == 1 && (
          <button
            onClick={() => {
              getProject(Object.keys(rowSelection)[0]).then((project) => {
                router.push(
                  `/dashboard/projects/create-update?title=${project.title}`
                );
              });
            }}
            className="p-2 bg-[#33c8ff] rounded-md text-white font-semibold mx-2 my-1"
          >
            Edit Project
          </button>
        )}
        {Object.keys(rowSelection).length > 0 && (
          <button
            onClick={() => {
              deleteProjects(Object.keys(rowSelection)).then(
                ({ title, message }) => {
                  toast.open({ title: title, message: message });
                }
              );
              setProjectData();
            }}
            className="p-2 mx-2 my-1 bg-[#ff4233] rounded-md text-white font-semibold"
          >
            Delete Project(s)
          </button>
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
