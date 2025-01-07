import { CustomBox }    from "src/components/core/CustomBox"

import {
    RowContainer,
    BoxContainer
} from "../../style"

//------------------------------
//---New Individual Customer
//------------------------------
export const NewIndividual = () => {
    //------------------------------
    return (
        <div>
    {/* ---Body */}
            <RowContainer>
        {/* ---Side */}
                <CustomBox>
                    <p>Side</p>
                </CustomBox>
        {/* ---Information */}
                <CustomBox>
                    <RowContainer style={{width: "87vw"}}>
                        <BoxContainer style={{width: "36vw"}}>
                            <p>01-1</p>
                        </BoxContainer>
                        <BoxContainer style={{width: "50vw", marginRight: "1vw"}}>
                            <p>01-2</p>
                        </BoxContainer>
                    </RowContainer>
                    <RowContainer style={{width: "87vw"}}>
                        <BoxContainer style={{width: "100%", marginRight: "1vw"}}>
                            <p>02</p>
                        </BoxContainer>
                    </RowContainer>
                </CustomBox>
            </RowContainer>
        </div>
    )
}
