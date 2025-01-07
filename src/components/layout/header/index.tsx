import { useNavigate, Link }  from "react-router-dom"
import { useState } from "react"
import Cookies      from "js-cookie"

import { ProfileCircle }  from "iconsax-react"
import { Notification }   from "iconsax-react"
import { HomeHashtag }    from "iconsax-react"

import { ProfileModal }     from "./modal/profile"

import { IconViewer } from "src/components/core/IconViewer"

import { UserProps}  from "src/definition/interfaces"
import { Color }    from "src/definition/color"


import logo from "src/assets/logo.png"

import {
  HeaderContainer,
  BoxHeader,
  BoxLogo,
  ItemLink,
  BoxProfile,
  HR,
  TextProfile
} from "./style"

//------------------------------
//---Header
//------------------------------
export const Header = () => {
    const navigate = useNavigate()

    const getUserInfo: any = localStorage.getItem("Trading_BackOffice")
    const isUserInfo: UserProps = JSON.parse(getUserInfo)
    const userName = isUserInfo.name   

    //------------------------------
    //---Profile Handling
    //------------------------------
    const [openProfileModal, setOpenProfileModal] = useState(false)

    const handleProfileModal = () => {
        setOpenProfileModal(true)
    }

    const handleCloseProfileModal = () => {
        setOpenProfileModal(false)
    }

    //------------------------------
    //---Logout Handler
    //------------------------------
    const handleLogout = () => {
        localStorage.removeItem("Trading_BackOffice")
        Cookies.remove("Tradeing_token")
        navigate("/login")
    }

    //------------------------------
    return (
        <div>
            <HeaderContainer>
              <BoxHeader>
                <div>
                  <BoxLogo>
                    <Link to = "/">
                      <IconViewer
                        src={logo}
                        alt={"LogoImage"}
                        style={{ width: "120px", height: "30px", display: "flex" }}
                      />
                    </Link>
                  </BoxLogo>
                </div>
              </BoxHeader>

              <BoxHeader style={{width: "60%", marginLeft: "2vw"}}>
                <Link to = "/">
                  <HomeHashtag
                    size="20"
                    color="#FFFFFF"
                  />
                </Link>
                
                <ItemLink
                  style={{marginRight: "1vw"}}
                  to={"/new-order"}
                >
                  Orders
                </ItemLink>
                <ItemLink
                  style={{marginRight: "1vw"}}
                  to={"/clearing"}
                >
                  Clearing House
                </ItemLink>
                <ItemLink
                  style={{marginRight: "1vw"}}
                  to={"/waiting-settlement"}
                >
                  Settlement Centre
                </ItemLink>
              </BoxHeader>
            
              <BoxHeader>
                <ItemLink
                  style = {{fontSize: "12px"}}
                  to={"/rate"}
                >
                  Rate
                </ItemLink>
                <ItemLink
                  style = {{fontSize: "12px"}}
                  to={"/customers"}
                >
                  Customers
                </ItemLink>
                <ItemLink
                  style = {{fontSize: "12px"}}
                  to={"/treasury-reports"}
                >
                  Reports
                </ItemLink>
                <ItemLink
                  style = {{fontSize: "12px"}}
                  to={"/currency-config"}
                >
                  Configuration
                </ItemLink>
                          
                <HR />

                <BoxProfile>
                  <Notification size="20" color={Color.WHITE}/>
                </BoxProfile>
                <BoxProfile
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  <TextProfile> Logout </TextProfile>
                </BoxProfile>

                <HR />

                <BoxProfile
                  style={{ cursor: "pointer" }}
                  onClick={handleProfileModal}
                >
                  <ProfileCircle size="20" color={Color.WHITE}/>
                  <TextProfile> {userName} </TextProfile>
                </BoxProfile>
              </BoxHeader>
            </HeaderContainer>

            <ProfileModal
              open={openProfileModal}
              handleClose={handleCloseProfileModal}
            />
        </div>
    )
}
