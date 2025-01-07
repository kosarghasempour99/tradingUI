import { useState } from "react"
import { Helmet }   from "react-helmet"

import { CustomersHeader }  from "./header"
import { NewIndividual }    from "./newCustomer/new-individual"
import { NewBusiness }      from "./newCustomer/new-business"


//------------------------------
interface OptionsType {
    label: string
    value: string
}

//------------------------------
//---New Customer
//------------------------------
export const NewCustomer = () => {
    const options = [
        { label: "Individual", value: "Individual" },
        { label: "Business", value: "Business" }
    ]
    const [customerType, setCustomerType] = useState<string>("Individual")

    //------------------------------
    //---Customer Type habdler
    //------------------------------
    const handleCustomerType = (filter: OptionsType) => {
        setCustomerType(filter.value)
    }

    //------------------------------
    return (
        <>
            <Helmet>
                <title>New Customer</title>
            </Helmet>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                <CustomersHeader
                    options={options}
                    onOptions={handleCustomerType}
                />
                {customerType === "Individual" ? <NewIndividual /> : <NewBusiness />}
            </div>
        </>
    )
}
