import { CardLabel, CardTitle, CardContainer, CardWrapper, CardImage  } from "./CardStyles"

interface ICard{
    label:string,
    title:string,
    picture:string
}


function Card({ label, title, picture }: ICard){
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardContainer>
                <CardImage src={picture} alt="freelance"/>
                <CardTitle>{title}</CardTitle>
            </CardContainer>      
        </CardWrapper>
    )
}

export default Card