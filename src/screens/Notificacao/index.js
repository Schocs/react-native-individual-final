import { ScrollView, Text } from "react-native";
import { Container, Header, Content, Footer, Item, ItemImg, ItemContent, BotaoFooter } from "./styles.js"
import { MaterialIcons, Ionicons, AntDesign, Foundation } from '@expo/vector-icons';

export const Notificacao = () => {
    return(
        <>
        <Container>
            <ScrollView>
                <Header>
                    <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'sans-serif'}}>
                        Notificações
                    </Text>
                </Header>
                <Content>
                <Text style={{fontSize:16, fontWeight: 500, fontFamily: 'sans-serif', marginTop: 15, marginBottom:5, marginLeft: 10, color:'grey'}}>
                    Providências
                </Text>
                <Item>
                    <ItemImg>
                        <MaterialIcons name="warning" size={24} color="grey" />
                    </ItemImg>
                    <ItemContent>
                        <Text style={{fontSize:14, fontWeight: 'bold', fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Pendências de confirmação
                        </Text>
                        <Text style={{fontSize:12, fontWeight: 200, fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Clique aqui para consultar suas pendências
                        </Text>
                    </ItemContent>
                </Item>
                <Text style={{fontSize:16, fontWeight: 500, fontFamily: 'sans-serif', marginTop: 20, marginBottom:5, marginLeft: 10, color:'grey'}}>
                    Mensagens
                </Text>
                <Item>
                    <ItemImg>
                        <MaterialIcons name="star" size={24} color="grey" />
                    </ItemImg>
                    <ItemContent>
                        <Text style={{fontSize:14, fontWeight: 'bold', fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Ofertas personalizadas
                        </Text>
                        <Text style={{fontSize:12, fontWeight: 200, fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Oferta tal tal
                        </Text>
                        <Text style={{fontSize:10, fontWeight: 100, fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Data/data
                        </Text>
                    </ItemContent>
                </Item>
                <Item>
                    <ItemImg>
                        <Ionicons name="alert-circle-outline" size={24} color="grey" />
                    </ItemImg>
                    <ItemContent>
                        <Text style={{fontSize:14, fontWeight: 'bold', fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Avisos
                        </Text>
                        <Text style={{fontSize:12, fontWeight: 200, fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Operação realizada
                        </Text>
                        <Text style={{fontSize:10, fontWeight: 100, fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Data/data
                        </Text>
                    </ItemContent>
                </Item>
                <Item>
                    <ItemImg>
                        <Ionicons name="ios-cash-outline" size={24} color="grey" />
                    </ItemImg>
                    <ItemContent>
                        <Text style={{fontSize:14, fontWeight: 'bold', fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Compras
                        </Text>
                        <Text style={{fontSize:12, fontWeight: 200, fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Compra efetuada por tal meio
                        </Text>
                        <Text style={{fontSize:10, fontWeight: 100, fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Data/data
                        </Text>
                    </ItemContent>
                </Item>
                <Item>
                    <ItemImg>
                        <MaterialIcons name="watch-later" size={24} color="grey" />
                    </ItemImg>
                    <ItemContent>
                        <Text style={{fontSize:14, fontWeight: 'bold', fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Agendamentos
                        </Text>
                        <Text style={{fontSize:12, fontWeight: 200, fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Tantas notificações
                        </Text>
                    </ItemContent>
                </Item>
                <Item>
                    <ItemImg>
                        <Ionicons name="md-calendar-sharp" size={24} color="black" />
                    </ItemImg>
                    <ItemContent>
                        <Text style={{fontSize:14, fontWeight: 'bold', fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Vencimentos
                        </Text>
                        <Text style={{fontSize:12, fontWeight: 200, fontFamily: 'sans-serif', marginVertical:2.5}}>
                            Tantas notificações
                        </Text>
                    </ItemContent>
                </Item>
                </Content>
            </ScrollView>
        </Container>
        <Footer>
            <BotaoFooter>
                <AntDesign name="bars" size={24} color="grey" />
            </BotaoFooter>
            <BotaoFooter>
                <Ionicons name="home" size={24} color="grey" />
            </BotaoFooter>
            <BotaoFooter>
                <Foundation name="magnifying-glass" size={24} color="grey" />
            </BotaoFooter>
            <BotaoFooter>
                <Ionicons name="notifications" size={24} color="grey" />
            </BotaoFooter>
            <BotaoFooter>
                <AntDesign name="user" size={24} color="grey" />
            </BotaoFooter>
        </Footer>
        </>
    )    
}