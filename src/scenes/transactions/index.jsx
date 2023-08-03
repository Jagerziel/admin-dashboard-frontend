import React, { useState } from 'react'
import { useGetTransactionsQuery } from 'state/api'
import Header from 'components/Header'
import { DataGrid } from '@mui/x-data-grid'
import { Box , useTheme } from '@mui/material'
import DataGridCustomToolbar from "components/DataGridCustomToolbar"

const Transactions = () => {
    const theme = useTheme()

    // Values to be sent to backend
    const [ page , setPage ] = useState(0)
    const [ pageSize , setPageSize ] = useState(20)
    const [ sort , setSort ] = useState({})
    const [ search , setSearch ] = useState("")

    // Parameters to be sent to the backend
    const { data , isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search
    })
    console.log(data)

    const columns = [ 
        {
            field: "_id",
            headerName: "ID",
            flex: 1, //how much space each column takes up
        },
        {
            field: "userId",
            headerName: "User ID",
            flex: 1, //how much space each column takes up  
        },
        {
            field: "createdAt",
            headerName: "CreatedAt",
            flex: 1, //how much space each column takes up  
        },
        {
            field: "products",
            headerName: "# of Products",
            flex: 0.5, //how much space each column takes up  
            sortable: false, // remove sorting ability
            renderCell: ( params ) => params.value.length //grabs number of products this transaction has
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1, //how much space each column takes up  
            renderCell: ( params ) => `$${Number(params.value).toFixed(2)}`
        }
    ]

    return (
        <Box margin="1.5rem 2.5rem">
            <Header title="TRANSACTIONS" subtitle="Entire List of Transactions" />
            <Box 
                height="80vh"
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
                    rows={(data && data.transactions) || []}
                    columns={columns}
                    rowCount={(data && data.total) || 0}
                    pagination={true}
                    page={page}
                    pageSize={pageSize}
                    paginationMode="server"
                    sortingMode="server"
                    onPageChange={(newPage) => setPage(newPage)}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    onSortModelChange={(newSortModel) => setSort(...newSortModel)}
                    component={{ Toolbar: DataGridCustomToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Transactions