import { CardLabel, CardTitle, CardContainer, CardWrapper, CardImage  } from "./CardStyles"
import { useTheme } from "../../utils/hooks";
import { useState } from "react";
interface ICard{
    label:string,
    title:string,
    picture:string
}


function Card({ label, title, picture }: ICard){
    const { theme } = useTheme()
    const [isFavorite, setIsFavorite] = useState(false)
    const star = isFavorite ? '⭐️' : ''   
    return (
        <CardWrapper theme={ theme }>
            <CardLabel theme={ theme }>{label}</CardLabel>
            <CardContainer onClick={() => setIsFavorite(!isFavorite)}>
                <CardImage src={picture} alt="freelance"/>
                <CardTitle theme={ theme }>{star} {title} {star}</CardTitle>
            </CardContainer>      
        </CardWrapper>
    )
}

export default Card