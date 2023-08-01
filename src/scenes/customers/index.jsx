import React from 'react'
import { Box , useTheme } from '@mui/material'
import { useGetCustomersQuery } from 'state/api'
import Header from 'components/Header'
import { DataGrid } from '@mui/x-data-grid'

const Customers = () => {
    const theme = useTheme()
    const { data , isLoading } = useGetCustomersQuery()
    // console.log(data)

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1, //how much space each column takes up
        },
        {
            field: "name",
            headerName: "Name",
            flex: 0.5, //how much space each column takes up  
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1, //how much space each column takes up  
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: 0.5, //how much space each column takes up  
            renderCell: (params) => { //custom function for field with callback function
                return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
            }
        },
        {
            field: "country",
            headerName: "Country",
            flex: 0.4, //how much space each column takes up  
        },
        {
            field: "occupation",
            headerName: "Occupation",
            flex: 1, //how much space each column takes up  
        },
        {
            field: "role",
            headerName: "Role",
            flex: 0.5, //how much space each column takes up  
        }
    ]

    return (
        <Box margin="1.5rem 2.5rem">
            <Header title="CUSTOMERS" subtitle="List of Customers" />
            <Box
                marginTop="40px"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: theme.palette.primary.light
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderTop: "none"
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${theme.palette.secondary[200]} !important`
                    }
                }}
            >
                <DataGrid 
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={data || []}
                    columns={columns}
                />
            </Box>

        </Box>
    )
}

export default Customers