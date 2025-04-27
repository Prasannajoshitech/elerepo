"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TeamViewData } from "@/data/tableData";
import CustomPagination from "@/components/CustomPagination";

// Define the shape of a member
interface Member {
  id: string;
  nameOfCompany: string;
  conductOfApplication: string;
  dateOfApplication: string;
  dateOfCommissionDecision: string;
  status: "Issues" | "No Issues";
  remarks: string;
}

// Column configuration
interface Column {
  key: keyof Member | "index";
  label: string;
  className?: string;
}

const columns: Column[] = [
  { key: "index", label: "S.N", className: "w-12 text-center" },
  { key: "nameOfCompany", label: "Name of Company / Address" },
  { key: "conductOfApplication", label: "Conduct of application" },
  { key: "dateOfApplication", label: "Date of application" },
  { key: "dateOfCommissionDecision", label: " Date of Commission Decision" },
  { key: "status", label: "Status" },
  { key: "remarks", label: "Remarks" },
];

const PER_PAGE = 4;

const UnderPreliminaryReview = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageCount = Math.ceil(TeamViewData.length / PER_PAGE);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const paginatedMembers = TeamViewData.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  return (
    <div>
      <div className="overflow-hidden rounded-md bg-white shadow-sm ">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-[#E8F4EF]">
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className={cn(
                    "typography-p1-regular font-semibold text-blue-50 p-4  border-r border-b border-[#E8F4EF] bg-blue-400",
                    column.className
                  )}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedMembers.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="py-6 text-center text-gray-500 "
                >
                  No members found.
                </TableCell>
              </TableRow>
            ) : (
              paginatedMembers.map((member, index) => (
                <TableRow key={`${member.id}-${index}`}>
                  <TableCell className={cn("text-center cellStyle p-4")}>
                    {(currentPage - 1) * PER_PAGE + index + 1}
                  </TableCell>
                  <TableCell className="cellStyle p-4">
                    {member.nameOfCompany}
                  </TableCell>
                  <TableCell className="cellStyle p-4">
                    {member.conductOfApplication}
                  </TableCell>
                  <TableCell className="cellStyle p-4">
                    {member.dateOfApplication}
                  </TableCell>
                  <TableCell className="cellStyle p-4">
                    {member.dateOfCommissionDecision}
                  </TableCell>

                  <TableCell className="cellStyle p-4">
                    <div>{member.status}</div>
                  </TableCell>
                  <TableCell className="cellStyle p-4">
                    {member.remarks}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="p-6 mb-8">
        <CustomPagination
          currentPage={currentPage}
          totalItems={TeamViewData.length}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default UnderPreliminaryReview;
