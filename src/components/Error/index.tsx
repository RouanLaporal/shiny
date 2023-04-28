import { ErrorWrapper, Illustration, SubTitle } from "./ErrorStyles";
import four from "../../assets/404/four.svg"
import base from "../../assets/404/base.svg"
import zero from "../../assets/404/zero.svg"

function Error(){
    return (
        <ErrorWrapper>
            <h1>Oups...</h1>
            <Illustration>
                <img src={four} alt="number_four"/>
                <img src={zero} alt="number_zero"/>
                <img src={four} alt="number_four"/>
                <img src={base} alt="base_illustration"/>
            </Illustration>
            <SubTitle>Il semblerait qu'il y ait un problème</SubTitle>
        </ErrorWrapper>
    )
}

export default Error;