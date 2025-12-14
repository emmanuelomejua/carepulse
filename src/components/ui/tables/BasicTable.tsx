import React, { type FC, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper
} from "@mui/material";


// ICONS
import { ArrowLeft, ArrowRight } from 'lucide-react';


export interface Column {
  header: string;
  accessor: string;
  align?: 'left' | 'right' | 'center';
  width?: number | string;
  renderRow?: (row: any) => React.ReactNode;
}

interface ReusableTableProps {
  columns: Column[];
  data: any[];
}

// Basic Reusable Table
const BasicTable: FC<ReusableTableProps>  = ({ columns, data }) => {

    const [page, setPage] = useState(0);
    const rowsPerPage = 4

    const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const totalPages = Math.ceil(data.length / rowsPerPage);

    const handlePrev = () => {
        setPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setPage((prev) => Math.min(prev + 1, totalPages - 1));
    };


  return (
    <Paper sx={{borderRadius: '24px', backgroundColor: '#131619', }}>
      <TableContainer sx={{ minHeight: '398px', borderTopLeftRadius: '24px', borderTopRightRadius: '24px',  color: '#CDCECF' }}>
        <Table sx={{ Width: '100%'}}>
          <TableHead>
            <TableRow sx={{backgroundColor: '#0D0F10', color: '#CDCECF', }}>
              {columns.map((col) => (
                <TableCell
                  key={col.accessor}
                  align={col.align || "left"}
                  sx={{ width: col.width, fontWeight: 500, color: '#CDCECF', borderBottom: 'none', }}
                >
                  {col.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row, i) => (
              <TableRow key={i}  sx={{
                    color: '#CDCECF',
                    backgroundColor: i % 2 === 0 ? "#131619" : "#1C2023", 
                    
                }}>
                {columns.map((col) => (
                  <TableCell sx={{color: '#CDCECF', paddingY: '24px', borderBottom: 'none',}} key={col.accessor} align={col.align || "left"}>
                    {col.renderRow ? col.renderRow(row) :row[col.accessor]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

        <div className="w-full flex items-center justify-between p-6">
            <div 
                onClick={handlePrev}
                className={`bg-[#1C2023] rounded-lg p-2 cursor-pointer select-none ${
            page === 0 ? 'opacity-40 pointer-events-none' : ''
            }`}>
                <ArrowLeft style={{ height: '18px', width: '18px', color: '#24AE7C' }}/>
            </div>


        <span className="text-[#CDCECF]">
            Page {page + 1} of {totalPages}
        </span>

        <div 
            onClick={handleNext}
            className={`bg-[#1C2023] rounded-lg p-2 cursor-pointer select-none  ${
            page === totalPages - 1 ? 'opacity-40 pointer-events-none' : ''
            }`}>
            <ArrowRight style={{ height: '18px', width: '18px', color: '#24AE7C' }}/>
        </div>
        </div>

    </Paper>
  );
};


export default BasicTable;
