import { useLocation }  from "react-router-dom"
import { useState }     from "react"

import { Input, Select }    from 'antd'

import {
    BoxHeader,
    BoxTitle,
    BoxSide,
    BoxMenu,
    BoxOptions,
    Name,
    ItemLink,
    Text
} from "./style"

//------------------------------
type Link = {
    to: string,
    label: string
}

type FilterOption = {
    label: string
    value: string
}

type PageHeaderProps = {
    icon?: React.ComponentType<{ size: string, color: string, "aria-hidden": boolean }>
    name: string
    links: Link[]
    options?: FilterOption[]
    optionsLabel: string
    onOptions: (selectedFilter: string) => void
    showOptions?: boolean
    onSearch: (searchTerm: string) => void
    showSearch?: boolean
}

//------------------------------
//---Page Header
//------------------------------
export const PageHeader = ({
    icon: Icon,
    name,
    links = [],
    options = [],
    optionsLabel = "Filter",
    onOptions = () => {},
    showOptions = false,    
    onSearch = () => {}, 
    showSearch = true
}: PageHeaderProps ) => {

    //---states
    const location = useLocation()
    const [searchWord, setSearchWord] = useState("")
    const [selectedFilter, setSelectedFilter] = useState(options[0]?.value || "")

    const { Search } = Input;

    //------------------------------
    //---Handle Filtering
    //------------------------------
    const handleFilterChange = (value: string) => {
        setSelectedFilter(value)
        onOptions(value)
    }

    //------------------------------
    //---Handle Search
    //------------------------------
    const handleSearch = () => {
        onSearch(searchWord)
    }

    //------------------------------
    return (
        <BoxHeader>
            <BoxTitle>
                <BoxSide/>
                {Icon && <Icon size="20px" color="#808080" aria-hidden="true" />}               
                <Name>{name}</Name>
            </BoxTitle>
            <BoxMenu>
                {links.map((link, index) => (
                    <ItemLink
                        key={index}
                        to={link.to}
                        active={location.pathname === link.to}
                    >
                        {link.label}
                    </ItemLink>                  
                ))}
                {showOptions && options.length > 0 && (
                    <BoxOptions>
                        <Text style={{marginRight: "0.5rem" }}>{optionsLabel}</Text>
                        <Select
                            defaultValue={options[0]?.value || ""}
                            value={selectedFilter}
                            options={options}
                            onChange={handleFilterChange}
                            style={{ width: "12vw", marginRight: "5vw", fontFamily: "Montserrat-Regular, sans-serif" }}
                        />                        
                    </BoxOptions>
                )}
            </BoxMenu>

            <BoxOptions>
                {showSearch && (
                    <Search
                        placeholder="Search..."
                        onSearch={handleSearch}
                        size = "Medium"
                        style={{ width: "15vw", marginLeft: "2vw" }}
                    />
                )}
            </BoxOptions>
        </BoxHeader>
    )
}
