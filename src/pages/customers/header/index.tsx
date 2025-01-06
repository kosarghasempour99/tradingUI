import { UserSquare } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const CustomersHeader = () => {
    const links = [
        { to: "/new-customer", label: "New Customer" }
    ]

    //------------------------------
    //---Handle Search
    //------------------------------
    const handleSearch = (searchWord: any) => {
        console.log(searchWord)
    }

    //------------------------------
    return (
        <PageHeader
            icon = {UserSquare}
            name = "Customers"
            links = {links}
            showOptions = {false}
            onSearch = {handleSearch}
        />
    )
}