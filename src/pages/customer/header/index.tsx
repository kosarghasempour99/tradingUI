import { User } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const CustomerHeader = () => {
    const links = [
        { to: "/overview-customer", label: "Overview" },
        { to: "/orders-customer", label: "Orders" },
        { to: "/credit", label: "Credit" },
        { to: "/profile", label: "Profile" },
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
            icon = {User}
            name = "Customer"
            links = {links}
            showOptions = {false}
            onSearch = {handleSearch}
        />
    )
}