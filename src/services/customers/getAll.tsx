import { CustomerType } from 'src/definition/interfaces'

//------------------------------
//---Get All Cutomers
//------------------------------
export const GetAllCustomers = async (): Promise<CustomerType[]> => {
    const customers: CustomerType[] = [
        {
            code: "C-101",
            name: "AU-User-1",
            country: "Australia",
            phone: "+61 412345678",
            email: "AU-User-1@example.com",
            kvc: "OK",
            credit: 20000,
            description: ""
        },
        {
            code: "C-102",
            name: "AU-User2",
            country: "Australia",
            phone: "+61 412345678",
            email: "AU-User2@example.com",
            kvc: "OK",
            credit: 20000,
            description: ""
        },
        {
            code: "C-103",
            name: "AU-User-3",
            country: "Australia",
            phone: "+61 412345678",
            email: "AU-User-3@example.com",
            kvc: "OK",
            credit: 20000,
            description: ""
        },
        {
            code: "C-104",
            name: "AU-User-4",
            country: "Australia",
            phone: "+61 412345678",
            email: "AU-User-4@example.com",
            kvc: "Faild",
            credit: 20000,
            description: ""
        },
        {
            code: "C-105",
            name: "AU-User-5",
            country: "Australia",
            phone: "+61 412345678",
            email: "AU-User-5@example.com",
            kvc: "OK",
            credit: 20000,
            description: ""
        },
        {
            code: "C-106",
            name: "IR-User-1",
            country: "Iran",
            phone: "+98 9123246789",
            email: "IR-User-1@example.com",
            kvc: "---",
            credit: 0,
            description: ""
        },
        {
            code: "C-107",
            name: "IR-User-2",
            country: "Iran",
            phone: "+98 9123246789",
            email: "IR-User-2@example.com",
            kvc: "---",
            credit: 0,
            description: ""
        },
        {
            code: "C-108",
            name: "IR-User-3",
            country: "Iran",
            phone: "+98 9123246789",
            email: "IR-User-3@example.com",
            kvc: "---",
            credit: 0,
            description: ""
        },
        {
            code: "C-109",
            name: "IR-User-4",
            country: "Iran",
            phone: "+98 9123246789",
            email: "IR-User-4@example.com",
            kvc: "---",
            credit: 0,
            description: ""
        },
        {
            code: "C-110",
            name: "IR-User-5",
            country: "Iran",
            phone: "+98 9123246789",
            email: "IR-User-5@example.com",
            kvc: "---",
            credit: 0,
            description: ""
        },
        {
            code: "C-111",
            name: "AU-User-1",
            country: "Australia",
            phone: "+61 412345678",
            email: "AU-User-1@example.com",
            kvc: "OK",
            credit: 20000,
            description: ""
        },
        {
            code: "C-112",
            name: "AU-User2",
            country: "Australia",
            phone: "+61 412345678",
            email: "AU-User2@example.com",
            kvc: "OK",
            credit: 20000,
            description: ""
        },
        {
            code: "C-113",
            name: "AU-User-3",
            country: "Australia",
            phone: "+61 412345678",
            email: "AU-User-3@example.com",
            kvc: "OK",
            credit: 20000,
            description: ""
        },
        {
            code: "C-114",
            name: "AU-User-4",
            country: "Australia",
            phone: "+61 412345678",
            email: "AU-User-4@example.com",
            kvc: "Failed",
            credit: 20000,
            description: ""
        },
        {
            code: "C-115",
            name: "AU-User-5",
            country: "Australia",
            phone: "+61 412345678",
            email: "AU-User-5@example.com",
            kvc: "OK",
            credit: 20000,
            description: ""
        },
        {
            code: "C-116",
            name: "IR-User-1",
            country: "Iran",
            phone: "+98 9123246789",
            email: "IR-User-1@example.com",
            kvc: "---",
            credit: 0,
            description: ""
        },
        {
            code: "C-117",
            name: "IR-User-2",
            country: "Iran",
            phone: "+98 9123246789",
            email: "IR-User-2@example.com",
            kvc: "---",
            credit: 0,
            description: ""
        },
        {
            code: "C-118",
            name: "IR-User-3",
            country: "Iran",
            phone: "+98 9123246789",
            email: "IR-User-3@example.com",
            kvc: "---",
            credit: 0,
            description: ""
        },
        {
            code: "C-119",
            name: "IR-User-4",
            country: "Iran",
            phone: "+98 9123246789",
            email: "IR-User-4@example.com",
            kvc: "---",
            credit: 0,
            description: ""
        },
        {
            code: "C-120",
            name: "IR-User-5",
            country: "Iran",
            phone: "+98 9123246789",
            email: "IR-User-5@example.com",
            kvc: "---",
            credit: 0,
            description: ""
        }
    ]
  
    return customers
  }
  