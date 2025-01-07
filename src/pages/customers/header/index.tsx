import { UserSquare } from "iconsax-react"

import { PageHeader } from "src/components/layout/page-header"

//------------------------------
interface OptionsType {
    label: string
    value: string
}

interface HeaderProps {
    options: OptionsType[]
    onOptions: (filter: OptionsType) => void
}

//------------------------------
export const CustomersHeader: React.FC<HeaderProps> = ({ options, onOptions = () => {} }) => {
        const links = [
        { to: "/customers", label: "All" },
        { to: "/new-customer", label: "New Customer" }
    ]

    const showSearch = !options
    //------------------------------
    //---Handle Search
    //------------------------------
    const handleSearch = (searchWord: string) => {
        console.log(searchWord)
    }

    //------------------------------
    //---Handle Customer Type
    //------------------------------
    const handleOptionSelect = (selectedValue: string) => {
        const selectedOption = options.find((opt) => opt.value === selectedValue)
        if (selectedOption) {
            onOptions(selectedOption)
        }
    }

    //------------------------------
    return (
        <PageHeader
            icon = {UserSquare}
            name = "Customers"
            links = {links}
            onSearch = {handleSearch}
            showSearch = {showSearch}
            options = {options}
            optionsLabel = "Customer Type"
            showOptions = {true}
            onOptions = {handleOptionSelect}
        />
    )
}