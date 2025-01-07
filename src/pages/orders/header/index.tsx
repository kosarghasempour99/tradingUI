import { I3Square } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const OrdersHeader = () => {
    const links = [
        { to: "/new-order", label: "New Order" },
        { to: "/pending-orders", label: "Pending" },
        { to: "/suspended-orders", label: "Suspended" },
        { to: "/cancelled-orders", label: "Cancelled" },
        { to: "/orders", label: "All" },
    ]

    //------------------------------
    //---Handle Search
    //------------------------------
    const handleSearch = (searchWord: string) => {
        console.log(searchWord)
    }

    //------------------------------
    return (
        <PageHeader
            icon = {I3Square}
            name = "Orders"
            links = {links}
            showOptions = {false}
            onSearch = {handleSearch}
        />
    )
}