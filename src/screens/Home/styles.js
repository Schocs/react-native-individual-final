import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    width: 100%
`
export const Fundo = styled.View`
    width: 100%;
    height: 150%;
    left: 0px;
    top: 0px;
    background: rgba(0, 56, 168, 0.75);
`

export const ImagemFundo = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
    left: -20px;
    top: -15px;
    margin-top: 2.5%;
    margin-left: 30px;

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
    width: 20%;
    heigth: 20%;
`
export const Content = styled.View`
    width: 100%;
    height: 100%;
    justify-content: center;
`
export const LoginButton = styled.TouchableOpacity`
    width : 80%;
    margin-left: 10%;
    margin-right: 10%
    margin-top: 80%;
    height: 10%
    flex-direction: row;
    justify-content: space-between;
    background: #fff;
    align-items: center;
    border-radius: 2%
    padding: 1%
`
export const LoginImage = styled.Image`
    width: 25%;
    height: 80%
`
export const LoginInfo = styled.View`
    width: 50%;
    heigth: 80%;
    margin-right: 1.5%;
    margin-left: 1.5%;
    flex-direction: column;
`

export const Banner = styled.Image`
    width: 80%;
    height: 15%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    border-radius: 2%;
`
export const OtherContent = styled.View`
    width: 80%;
    height: 10%;
    margin-left: 5%;
    margin-right: 5%;
    flex-direction: row;
    background: #fff;
    justify-content: space-between;
`
export const LinksBB = styled.View`
    width: 25%;
    height:40%;
    margin-right: 2.5%;
    margin-left: 1.5%;
    flex-direction: column
`
export const Redondo = styled.TouchableOpacity`
    margin-left: 5%
    padding: 22.5%;
    border-radius: 50%
    margin-bottom: 5%;
    width: 80%;
    heigth: 60%
    background:#CDE2EA
`
export const Atendimento = styled.View`
    margin-right: 5%;
    margin-left: 5%;
    height: 25%;
    margin-top: 10%;
`
export const ItemAtendimento = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 3%
`