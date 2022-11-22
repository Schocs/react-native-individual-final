import { Container, Fundo, Header, ImagemFundo, ImagemHeader, Notificacao } from './styles'
import mulherBB from '../../../assets/mulherBB.png';
import BB from '../../../assets/BB.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Home = () => {
    return (
        <Container>
            <Fundo>
                <ImagemFundo source={mulherBB} />
            </Fundo>
            <Header>
                <ImagemHeader source={BB} />
                <Notificacao>
                    <MaterialCommunityIcons name="bell" size={42} color="black" />
                    <MaterialCommunityIcons name="android-messages" size={42} color="black" />
                </Notificacao>
            </Header>
        </Container>
    );
}