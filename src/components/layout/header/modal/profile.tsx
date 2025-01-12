import { useDispatch }  from "react-redux"
import { useState }     from "react"

import { Input, Button }  from 'antd'

import Modal      from "@mui/material/Modal"
import Box        from "@mui/material/Box"


// import { BtnComponent }   from "src/components/core/Button"
import { Typography }     from "src/components/core/Typography"
import { IconViewer }     from "src/components/core/IconViewer"

import { UserProps} from "src/definition/customer-interfaces"
import { Color }    from "src/definition/color"

import { ChangePassword } from "src/services/loginServices"

import InfoClose from "src/assets/svg/close.svg"

import { clearIsRefresh } from "src/store/actions/root"

import{
  BoxFooter,
  BoxInput,
  HRBottom,
  HRTop,
  Label
} from "./style"

type ModalProps = {
  open: boolean
  handleClose: () => void
}

//------------------------------
//---Profile Modal
//------------------------------
export const ProfileModal: React.FC<ModalProps> = ({
  open,
  handleClose
}) => {
  
  const getUserInfo: any = localStorage.getItem("Trading_BackOffice")
  const isUserInfo: UserProps = JSON.parse(getUserInfo)
  const name = isUserInfo.name
  const email = isUserInfo.email
  const userCode = isUserInfo.user_code

  const dispatch = useDispatch()
  //--- State
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [oldPasswordError, setOldPasswordError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  
  const [oldPasswordHelper, setOldPasswordHelper] = useState("")
  const [passwordHelper, setPasswordHelper] = useState("")
  
  const [inputBG, setInputBG] = useState(Color.GRAY)
  
  //------------------------------
  //---Close Modal and Reset States
  //------------------------------
  const closeModalResetStates = () => {
    handleClose()
    dispatch(clearIsRefresh())

    setOldPassword("")
    setNewPassword("")
    setConfirmPassword("")
    
    setOldPasswordError(false)
    setPasswordError(false)
    setOldPasswordHelper("")
    setPasswordHelper("")
  }

  //------------------------------
  //---Error Handler
  //------------------------------
  const errorHandler = () => {
    let error = false
    let change = false
    //---Check Password
    if (!oldPassword) {
      if (newPassword) {
        setOldPasswordError(true)
        setOldPasswordHelper("Enter the old password")
        error = true
        change = true
      }
      else if (confirmPassword) {
        setOldPasswordError(true)
        setOldPasswordHelper("Enter the old password")
        error = true
        change = true
      }
    }
    else 
    {
      change = true     
      if (!newPassword) {
        setPasswordError(true)
        setPasswordHelper("Enter the new Password ")
        error = true
      }
      else if (newPassword !== confirmPassword) {
        setPasswordError(true)
        setPasswordHelper("Password does not match")
        error = true
      }
    }
    console.log(error)
    //---Check Changes
    if (error === false) {
      editUserHandler(userCode,oldPassword, newPassword)
    }
    else if(change === false){
      closeModalResetStates()
    }
  }

  //------------------------------
  //---Call Change Password Api
  //------------------------------
  const editUserHandler = async (
    userCode: string,
    oldPassword: string,
    newPassword: string
  ) => {
    ChangePassword(userCode, oldPassword, newPassword)
    // ???
    // ???
    // ???
    closeModalResetStates()
  }

  //------------------------------
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
      }}>
      <Box
        sx={{
          width: 680,
          bgcolor: "background.paper",
          padding: 4,
          borderRadius: "16px",
        }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography style={{ fontWeight: "700" }}>Profile</Typography>
          <Box sx={{ cursor: "pointer" }} onClick={handleClose}>
            <IconViewer src={InfoClose} alt="Close" />
          </Box>
        </Box>
        <HRTop />

        <BoxInput style={{ marginTop: "1vw" }}>
          <Box style={{ width: "50vw" }}>
            <Typography
              style={{
                color: Color.RED,
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "18px"
              }}>
              {name}
            </Typography>
          </Box>
          <Box style={{ width: "50vw" }}>
            <Typography
              style={{
                color: Color.BLUE,
                fontStyle: "italic",
                fontWeight: "bold",
              }}>
              {email}
            </Typography>
          </Box>
        </BoxInput>

        <BoxInput style={{ marginTop: "1vw" }}>
          <Box style={{ width: "50vw" }}>
            <Label>Old Password</Label>
            <Input.Password
              placeholder="Old password..."
              size = "large"
              variant="filled"
              style={{ width: "20vw"}}
            />
          </Box>
        </BoxInput>

        <BoxInput style={{ marginTop: "1vw", marginBottom: "2vw"}}>
          <Box style={{ width: "50vw" }}>
              <Label>New Password</Label>
              <Input.Password
                placeholder="New password..."
                size = "large"
                variant="filled"
                style={{ width: "20vw"}}
              />
          </Box>
            <Box style={{ width: "50vw" }}>
              <Label>Confirm Password</Label>
              <Input.Password
                placeholder="Confirm password..."
                size = "large"
                variant="filled"
                style={{ width: "20vw"}}
              />
          </Box>
        </BoxInput>

        <HRBottom />

        <BoxFooter>
          <Button
            variant="solid"
            size="large"
            style={{
              width: "8vw",
              marginRight: "2vw",
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: "700",
              color: Color.BLUE_DARK,
              backgroundColor: Color.WHITE,
              cursor: "pointer",
            }}
            onClick={errorHandler}
          >
            Cancel
          </Button>
          <Button
            variant="solid"
            size="large"
            style={{
              width: "8vw",
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontWeight: "700",
              color: Color.WHITE,
              backgroundColor: Color.BLUE_DARK,
              cursor: "pointer",
            }}
            onClick={errorHandler}
          >
            Confirm
          </Button>
        </BoxFooter>
      </Box>
    </Modal>
  )
}
