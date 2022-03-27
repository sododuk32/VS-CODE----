import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'No', width: 90 },
    {
        field: 'ID',
        headerName: 'ID',
        width: 150,
        editable: true,
    },
    {
        field: 'Name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'Total',
        headerName: 'Total',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'Grade',
        headerName: 'Grade',
        width: 150,
        editable: true,
    },
];

const rows = [
    { id: 1, ID: 'Snow', Name: 'Jon', Total: 3500000, Grade: '우수' },
    { id: 2, ID: 'Lannister', Name: 'Cersei', Total: 42000, Grade: '일반' },
    { id: 3, ID: 'Lannister', Name: 'Jaime', Total: 45000, Grade: '일반' },
    { id: 4, ID: 'Stark', Name: 'Arya', Total: 16000, Grade: '기업' },
    { id: 5, ID: 'Targaryen', Name: 'Daenerys', Total: null, Grade: '신규' },
    { id: 6, ID: 'Melisandre', Name: null, Total: 150000, Grade: '신규' },
    { id: 7, ID: 'Clifford', Name: 'Ferrara', Total: 44000, Grade: '일반' },
    { id: 8, ID: 'Frances', Name: 'Rossini', Total: 36000, Grade: '기업' },
    { id: 9, ID: 'Roxie', firstName: 'Harvey', Total: 65000, Grade: '일반' },
];

export default function DataGridDemo() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
