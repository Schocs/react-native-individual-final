import { LoginButton, Content, Container, Fundo, Header, ImagemFundo, ImagemHeader, Notificacao, LoginImage, LoginInfo, Banner, OtherContent, LinksBB, Redondo, Atendimento, ItemAtendimento } from './styles'
import mulherBB from '../../../assets/mulherBB.png';
import BB from '../../../assets/BB.png';
import perfil from '../../../assets/perfil.png';
import bannerbb from '../../../assets/bannerbb.png';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

export const Home = () => {
    return (
        <Container>
            <ScrollView>
            <Fundo>
                <ImagemFundo source={mulherBB} />
                <Header>
                    <ImagemHeader source={BB} />
                    <Notificacao>
                        <MaterialCommunityIcons name="bell" size={42} color="white" />
                        <MaterialCommunityIcons name="android-messages" size={42} color="white" />
                    </Notificacao>
                </Header>
                <Content>
                    <LoginButton>
                        <LoginImage source={perfil} />
                        <LoginInfo>
                        <Text style={{marginVertical:0.5, fontWeight: 'bold'}}>
                            Nome sobrenome
                        </Text>
                        <Text style={{marginVertical:0.5, fontWeight: 100}}>
                            Agencia contaconta
                        </Text>
                        </LoginInfo>
                        <MaterialCommunityIcons name="fingerprint" size={40} color="blue" />    
                    </LoginButton>
                    <Banner source={bannerbb} />
                </Content>
            </Fundo>
            <OtherContent style={{marginTop: 25}}>
                <LinksBB>
                    <Redondo style={{textAlign: 'center'}}>
                        <MaterialCommunityIcons name="qrcode-scan" size={24} color="blue" />
                    </Redondo>
                    <Text style={{fontSize: 12, fontWeight:'100', textAlign: 'center'}}>
                        Ler Qr Code e BB Code
                    </Text>
                </LinksBB>
                <LinksBB>
                    <Redondo style={{textAlign: 'center'}}>
                        <MaterialCommunityIcons name="security" size={24} color="blue" />                    
                    </Redondo>
                    <Text style={{fontSize: 12, fontWeight:'100', textAlign: 'center'}}>
                        Recuperar Senha
                    </Text>
                </LinksBB>
                <LinksBB>
                    <Redondo style={{textAlign: 'center'}}>
                        <MaterialCommunityIcons name="barcode" size={24} color="blue" />
                    </Redondo>
                    <Text style={{fontSize: 12, fontWeight:'100', textAlign: 'center'}}>
                        Pagamento
                    </Text>
                </LinksBB>
                <LinksBB>
                    <Redondo style={{textAlign: 'center'}}>
                        <MaterialCommunityIcons name="arrow-all" size={24} color="blue" />
                    </Redondo>
                    <Text style={{fontSize: 12, fontWeight:'100', textAlign: 'center'}}>
                        Pix
                    </Text>
                </LinksBB>
            </OtherContent>
            <OtherContent>
            <LinksBB>
                    <Redondo style={{textAlign: 'center'}}>
                        <MaterialCommunityIcons name="cash-plus" size={24} color="blue" />
                    </Redondo>
                    <Text style={{fontSize: 12, fontWeight:'100', textAlign: 'center'}}>
                        Saque móvel
                    </Text>
                </LinksBB>
                <LinksBB>
                    <Redondo style={{textAlign: 'center'}}>
                        <MaterialCommunityIcons name="email" size={24} color="blue" />                    
                    </Redondo>
                    <Text style={{fontSize: 12, fontWeight:'100', textAlign: 'center'}}>
                        Consultar envelopes
                    </Text>
                </LinksBB>
                <LinksBB>
                    <Redondo style={{textAlign: 'center'}}>
                        <MaterialCommunityIcons name="book-multiple" size={24} color="blue" />
                    </Redondo>
                    <Text style={{fontSize: 12, fontWeight:'100', textAlign: 'center'}}>
                        2ª via de boleto
                    </Text>
                </LinksBB>
                <LinksBB>
                    <Redondo style={{textAlign: 'center'}}>
                        <MaterialCommunityIcons name="clipboard-clock-outline" size={24} color="blue" />
                    </Redondo>
                    <Text style={{fontSize: 12, fontWeight:'100', textAlign: 'center'}}>
                        Senha de Atendimento
                    </Text>
                </LinksBB>
            </OtherContent>
            <Atendimento>
                <Text style={{fontSize:18, fontWeight: 'bold'}}>
                    Atendimento
                </Text>
                <ItemAtendimento>
                    <Text style={{fontSize: 12, fontWeight: 600}}>
                        Whatsapp
                    </Text>
                    <MaterialCommunityIcons name="whatsapp" size={18} color="green" />
                </ItemAtendimento>
                <ItemAtendimento>
                    <Text style={{fontSize: 12, fontWeight: 600}}>
                        Capitais
                    </Text>
                    <Text style={{fontSize: 12, fontWeight: 600, color:'blue'}}>
                        4004-0001
                    </Text>    
                </ItemAtendimento>
                <ItemAtendimento>
                    <Text style={{fontSize: 12, fontWeight: 600}}>
                        Demais cidades
                    </Text>
                    <Text style={{fontSize: 12, fontWeight: 600, color:'blue'}}>
                        0800 729 0001
                    </Text>    
                </ItemAtendimento>
                <ItemAtendimento>
                    <Text style={{fontSize: 12, fontWeight: 600}}>
                        SAC BB
                    </Text>
                    <Text style={{fontSize: 12, fontWeight: 600, color:'blue'}}>
                        0800 729 0722
                    </Text>    
                </ItemAtendimento>
                <ItemAtendimento>
                    <Text style={{fontSize: 12, fontWeight: 600}}>
                        Outros números
                    </Text>
                    <MaterialIcons name="keyboard-arrow-right" size={18} color="black" />
                </ItemAtendimento>
                <ItemAtendimento>
                    <Text style={{fontSize: 12, fontWeight: 600}}>
                        Atendimento em libras
                    </Text>
                    <MaterialIcons name="keyboard-arrow-right" size={18} color="black" />
                </ItemAtendimento>
            </Atendimento>
            </ScrollView>     
        </Container>
    );
}