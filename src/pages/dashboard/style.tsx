import { styled } from "styled-components"

import { Typography }   from "src/components/core/Typography"
import { CustomBox }    from "src/components/core/CustomBox"

//------------------------------
export const RowContainer = styled(CustomBox)`
  width: 99vw;
  display: flex;
  justify-content: space-between;
  align-items: left;
`;

export const BoxTop = styled(CustomBox)`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxTitle = styled(CustomBox)`
  width: 200px;
  background: #F5F5F5;
  display: flex;
  justify-content: flex-start;
  align-items: center;  
`;

export const BoxSide = styled(CustomBox)`
  height: 50px;
  border: 3px solid #966432;
  margin-right: 1vw;
`;

export const BoxContainer = styled(CustomBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid #F5F5F5;
`;

export const BoxName = styled(Typography)`
  color: #0A0A0A;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-left: 1vw;
`;

export const BoxHeader = styled(CustomBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #F5F5F5;
`;

export const YellowLine = styled.span`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #966432;
  }
`;

export const BoxContent = styled(CustomBox)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//------------------------------
export const Name = styled(Typography)`
  color: #000000;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-left: 1vw;
`;

export const Header = styled(Typography)`
  color: #282828;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const Title = styled(Typography)`
  color: #646464;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-left: 1vw;
`;

export const Content = styled(Typography)`
  color: #282828;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
