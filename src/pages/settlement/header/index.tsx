import { WalletAdd } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
export const SettlementHeader = () => {
    const links = [
        { to: "/waiting-settlement", label: "Waiting" },
        { to: "/confirmation-settlement", label: "Confirmation" },
    ]
    const options = [
        { label: "AUD", value: "AUD" },
        { label: "IRR", value: "IRR" },
        { label: "AED", value: "AED" },
        { label: "CAD", value: "AUD" },
        { label: "EUR", value: "AUD" },
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
            icon={WalletAdd}
            name="Settlement"
            links={links}
            options = {options}
            optionsLabel = "Currency"
            onOptions = {handleCurrency}
            showOptions = {true}
            onSearch={handleSearch}
        />
    )
}