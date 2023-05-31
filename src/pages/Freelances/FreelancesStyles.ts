import styled from "styled-components"

export const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

export const ProfileContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items:center;
    justify-items:center;
`

export const FreelanceWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Subtitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
    color: var(--secondary-100)
`
