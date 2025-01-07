import { useState, useEffect } from 'react'
import { Helmet }   from "react-helmet"

import { CustomersHeader } from "./header"

import { GetAllCustomers } from "src/services/customers/getAll"
import { CustomersTable }  from "../../components/core/Table/customersTable"

import { CustomerType } from 'src/definition/interfaces'

import { BoxContainer } from "../style"

//------------------------------
//---Customers
//------------------------------
export const Customers = () => {
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
                <title>Customers</title>
            </Helmet>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <CustomersHeader />
        {/* ---Body */}
                <BoxContainer style={{width: "95vw"}}>
                    <CustomersTable
                        data={dataSource}
                    />
                </BoxContainer>
            </div>
        </>
    )
}
