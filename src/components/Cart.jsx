import React from 'react';
import { Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper } from '@mui/material';

const Cart = () => {
  return (
    <div>
        <TableContainer component={Paper}>
            <Table aria-label='simple-table'>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <strong>Name:</strong>
                        </TableCell>
                          <TableCell>
                            <strong>Meal:</strong>
                        </TableCell>
                          <TableCell>
                            <strong>Price:</strong>
                        </TableCell>
                          <TableCell>
                            <strong>Quantity:</strong>
                        </TableCell>
                    </TableRow>
                </TableHead>
            </Table>

        </TableContainer>
      
    </div>
  )
}

export default Cart
