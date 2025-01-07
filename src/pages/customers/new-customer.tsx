import { useState, useEffect } from 'react'
import { Helmet }   from "react-helmet"

import { CustomersHeader } from "./header"

import { GetAllCustomers } from "src/services/customers/getAll"

import { RowContainer } from "../style"

//------------------------------
//---New Customer
//------------------------------
export const NewCustomer = () => {
    const [dataSource, setDataSource] = useState<CustomerType[]>([])
    const [loading, setLoading] = useState(true)

    //------------------------------
    const fetchData = async () => {
        try {
          const customers = await GetAllCustomers()
          setDataSource(customers)
        } catch (error) {
          console.error('Error fetching customers:', error)
        } finally {
          setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    //------------------------------
    return (
        <>
            <Helmet>
                <title>New Customer</title>
            </Helmet>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <CustomersHeader />
        {/* ---Body */}
                <RowContainer style={{width: "95vw"}}>
                </RowContainer>
            </div>
        </>
    )
}
