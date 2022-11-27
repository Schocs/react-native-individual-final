import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: #d3d3d3 
`
export const Header = styled.View`
    top: 0;
    background-color: #fff;
    width: 100%;
    height: 7.5%;
    align-items: center;
    justify-content: center;
    padding: 5%
`
export const Content = styled.View`
    width: 100%
    background-color: #d3d3d3 
`

export const Footer = styled.View`
    width: 100%;
    height: 7.5%;
    background-color: #fff
    bottom: 0;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center
`

export const BotaoFooter = styled.TouchableOpacity`
    height: 100%;
    justify-content: center;
`

export const Item = styled.View`
    width: 100%;
    height: 85px;
    padding-left: 10px;
    flex-direction: row;
    padding-top: 5px;
    padding-bottom: 5px;
    background: #fff
`
export const ItemImg = styled.View`
    width: 20%;
    justify-content: center;
    align-items: center
`

export const ItemContent = styled.TouchableOpacity`
    width:80%;
    flex-direction: column;
    justify-content: center;
`