import { Navigate, useNavigate} from "react-router-dom"
import { Route, Routes }        from "react-router-dom"
import { useEffect }            from "react"
import Cookies                  from "js-cookie"

import { Layout }       from "src/components/layout" 

import { Dashboard }        from "src/pages/dashboard"
import { Login }            from "src/pages/login" 

import { CancelledOrders }  from "src/pages/orders/cancelled"
import { SuspendedOrders }  from "src/pages/orders/suspended"
import { PendingOrders }    from "src/pages/orders/pending"
import { NewOrder }         from "src/pages/orders/new-order"
import { Orders }           from "src/pages/orders/orders"

import { Clearing } from "src/pages/clearing"

import { ConfirmationSettlement } from "src/pages/settlement/confirmation"
import { WaitingSettlement }      from "src/pages/settlement/waiting"

import { Rate}  from "src/pages/rate/"

import { UserOverview } from "src/pages/customer/overview"
import { UserProfile }  from "src/pages/customer/profile"
import { UserOrders }   from "src/pages/customer/orders"
import { UserCredit }   from "src/pages/customer/credit"

import { Customers }    from "src/pages/customers/customers"
import { NewCustomer }  from "src/pages/customers/new-customer"

import { TreasuryReports }  from "src/pages/reports/treasury"
import { PaymentsReports }  from "src/pages/reports/payments"
import { DealsReports }     from "src/pages/reports/deals"
import { AMLReports }       from "src/pages/reports/aml"

import { CurrencyConfig } from "src/pages/configuration/currency"
import { CountryConfig }  from "src/pages/configuration/country"
import { UserConfig }     from "src/pages/configuration/user"

//------------------------------
//---Implementation Routes
//------------------------------

  export const ImplementationRoutes = () => {
  const navigate = useNavigate() 

  const token = Cookies.get("Tradeing_token")
  
//------------------------------
//---Check User Login Status
//------------------------------
  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token])

//------------------------------
  return (
    <>
    {
      token ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="/new-order" element={<NewOrder />} />
            <Route path="/pending-orders" element={<PendingOrders />} />
            <Route path="/suspended-orders" element={<SuspendedOrders />} />
            <Route path="/cancelled-orders" element={<CancelledOrders />} />
            <Route path="/orders" element={<Orders />} />            

            <Route path="/clearing" element={<Clearing />} />

            <Route path="/waiting-settlement" element={<WaitingSettlement />} />
            <Route path="/confirmation-settlement" element={<ConfirmationSettlement />} />

            <Route path="/rate" element={<Rate />} />

            <Route path="/customers" element={<Customers />} />
            <Route path="/new-customer" element={<NewCustomer />} />

            <Route path="/overview-customer" element={<UserOverview />} />
            <Route path="/orders-customer" element={<UserOrders />} />
            <Route path="/credit" element={<UserCredit />} />
            <Route path="/profile" element={<UserProfile />} />

            <Route path="/treasury-reports" element={<TreasuryReports />} />
            <Route path="/deal-reports" element={<DealsReports />} />
            <Route path="/payments-reports" element={<PaymentsReports />} />
            <Route path="/aml-reports" element={<AMLReports />} />

            <Route path="/currency-config" element={<CurrencyConfig />} />
            <Route path="/countries-config" element={<CountryConfig />} />
            <Route path="/users-configs" element={<UserConfig />} />
          </Routes>
        </Layout>
      ): (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      )
    }
    </>
  )
}
