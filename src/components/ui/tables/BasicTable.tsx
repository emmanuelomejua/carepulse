import React, { type FC, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TablePagination
} from "@mui/material";

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

const BasicTable: FC<ReusableTableProps>  = ({ columns, data }) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);

    const handleChangePage = (_: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);



  return (
    <Paper sx={{borderRadius: '24px', backgroundColor: '#131619'}}>
      <TableContainer sx={{ minHeight: '408px' }}>
        <Table sx={{ Width: '100%'}}>
          <TableHead>
            <TableRow sx={{backgroundColor: '#0D0F10', color: '#CDCECF'}}>
              {columns.map((col) => (
                <TableCell
                  key={col.accessor}
                  align={col.align || "left"}
                  sx={{ width: col.width, fontWeight: 500, color: '#CDCECF' }}
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
                    border: 'none',
                    backgroundColor: i % 2 === 0 ? "#131619" : "#1C2023", 
                    
                }}>
                {columns.map((col) => (
                  <TableCell sx={{color: '#CDCECF', paddingY: '24px'}} key={col.accessor} align={col.align || "left"}>
                    {col.renderRow ? col.renderRow(row) :row[col.accessor]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15, 20, 50]}
      />
    </Paper>
  );
};


export default BasicTable;
