import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    width: 100%
`
export const Fundo = styled.View`
    width: 100%;
    height: 90%;
    left: 0px;
    top: 0px;
    background: rgba(0, 56, 168, 0.75);
    z-index: -1
`

export const ImagemFundo = styled.Image`
    position: absolute;
    width: 100%;
    height: 95%;
    left: -20px;
    top: -15px;
    margin-top: 10px;
    margin-left: 30px;
    z-index: -1
`

export const Header = styled.View`
    position: absolute;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    margin-top: 10px;
    height: 10%;
    flex-direction: row;
    justify-content: space-between
`

export const Notificacao = styled.View`
    margin-right: 1%;
    width: 20%;
    heigh: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ImagemHeader = styled.Image`
    margin-left: 1%;
    width: 42px;
    heigth: 42px;
`

