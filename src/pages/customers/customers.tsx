import { useState, useEffect } from 'react'
import { Helmet }   from "react-helmet"

import { CustomersHeader } from "./header"

import { GetAllCustomers } from "src/services/customers/getAll"
import { CustomersTable }  from "src/components/core/Table/customersTable"

import { CustomerType } from 'src/definition/customer-interfaces'

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
          const dataSourse = customers.map((customer) => ({
            ...customer,
            fullName: `${customer.firstName} ${customer.middleName ? customer.middleName + ' ' : ''}${customer.lastName}`
          }))
          setDataSource(dataSourse)
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
