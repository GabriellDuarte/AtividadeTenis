import { Text, ImageBackground, ScrollView} from 'react-native';
import estilo from "./estilo";

export default function TenisAdidas(props) {
  return (
    <ScrollView>
   <ImageBackground 
   style={estilo.container}>
    
    <ImageBackground
    style={estilo.card}
    source={{uri: "https://cdnv2.moovin.com.br/atitudeesportes/imagens/produtos/det/tenis-adidas-grand-court-base-2-f3366b30950f7b5798f804796cd9cee7.jpg"}}
    >
        <Text style={estilo.card_titulo}>
        Adidas Grand Court Base 2 
        </Text>
        <Text style={estilo.card_valor}>
        R$ 360,90
        </Text>
    </ImageBackground>

    <ImageBackground
    style={estilo.card}
    source={{uri: "https://imgmarketplace.lojasrenner.com.br/20001/2779/7010700003093/7510700006959/0.jpeg"}}
    >
        <Text style={estilo.card_titulo}>
        Adidas Pureboost 22 Feminino Azul
        </Text>
        <Text style={estilo.card_valor}>
        R$ 877,80
        </Text>
    </ImageBackground>

    <ImageBackground
    style={estilo.card}
    source={{uri: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/fd84683b9e364fa0a366ab4a00a0b6e7_9366/Tenis_Ultimashow_Preto_FX3632_01_standard.jpg"}}
    >
        <Text style={estilo.card_titulo}>
        TÊNIS ULTIMASHOW
        </Text>
        <Text style={estilo.card_valor}>
        R$349,99
        </Text>
    </ImageBackground>

    <ImageBackground
    style={estilo.card}
    source={{uri: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/612f5c689a324d6bba0cadc500ff31b4_9366/Tenis_Streetcheck_Cloudfoam_Court_Low_Preto_GW5489_01_standard.jpg"}}
    >
        <Text style={estilo.card_titulo}>
        STREETCHECK CLOUDFOAM COURT LOW
        </Text>
        <Text style={estilo.card_valor}>
        R$399,99
        </Text>
    </ImageBackground>

    <ImageBackground
    style={estilo.card}
    source={{uri: "https://www.omarcalcados.com.br/profiles/img/produtos/tenis-masculino-adidas-duramo-10_68976_ampliacao.jpg"}}
    >
        <Text style={estilo.card_titulo}>
        Adidas Duramo 10 Preto Masculino
        </Text>
        <Text style={estilo.card_valor}>
        R$ 399,90 
        </Text>
    </ImageBackground>

   </ImageBackground>
    </ScrollView>


  );
}