import { Share } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const ClearingHeader = () => {
    const links = []
    const options = [
        { label: "AUD", value: "AUD" },
        { label: "IRR", value: "IRR" },
        { label: "AED", value: "AED" },
        { label: "CAD", value: "CAD" },
        { label: "EUR", value: "EUR" },
        { label: "TRL", value: "TRL" },
        { label: "USD", value: "USD" },
        { label: "USDT", value: "USDT" }
    ]

    //------------------------------
    //---Cussrency filter Handling
    //------------------------------
    const handleCurrency = (filter: any) => {
    }

    //------------------------------
    //---Handle Search
    //------------------------------
    const handleSearch = (searchWord: string) => {
        console.log(searchWord)
    }

    //------------------------------
    return (
        <PageHeader
            icon = {Share}
            name = "Clearing"
            links = {links}
            options = {options}
            optionsLabel = "Currency"
            onOptions = {handleCurrency}
            showOptions = {true}
            onSearch = {handleSearch}
        />
    )
}