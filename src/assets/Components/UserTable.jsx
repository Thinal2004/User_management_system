import { TableContainer , Paper, TableCell, TableBody, TableRow, TableHead, Table, Button } from '@mui/material'
import React from 'react'

function UserTable({users}) {
    return (
  <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
                
            <TableBody>
                {
                users.length ? users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell component="th" scope="row">
                            {user.id}
                        </TableCell>
                        <TableCell  component="td" scope="row">
                            {user.name}
                        </TableCell>
                        <TableCell>
                            <Button variant="contained" color="primary" onClick={() => {}}>
                                Edit
                            </Button>
                            <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }} onClick={() => {}}>
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>    
                )) : (
                    <TableRow>
                        <TableCell colSpan={3} align="center">
                            No users found
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
  </TableContainer>
    );
}

export default UserTable
