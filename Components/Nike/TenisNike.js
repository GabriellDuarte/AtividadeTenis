import { Text, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import estilo from "./estilo";


export default function TenisNike(props) {
  return (

    <ScrollView>
          <ImageBackground 
    style={estilo.container}>
     
     <ImageBackground
     style={estilo.card}
     source={{uri: "https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-force-58-preto-branco-98639.jpg"}}
     >
         <Text style={estilo.card_titulo}>
         Tênis Nike Sb Force 58
         </Text>
         <Text style={estilo.card_valor}>
         R$ 649,90
         </Text>
     </ImageBackground>

     <ImageBackground
     style={estilo.card}
     source={{uri: "https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-force-58-preto-branco-98639.jpg"}}
     >
         <Text style={estilo.card_titulo}>
         Tênis Nike Sb Force 58
         </Text>
         <Text style={estilo.card_valor}>
         R$ 649,90
         </Text>
     </ImageBackground>

     <ImageBackground
     style={estilo.card}
     source={{uri: "https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-force-58-preto-branco-98639.jpg"}}
     >
         <Text style={estilo.card_titulo}>
         Tênis Nike Sb Force 58
         </Text>
         <Text style={estilo.card_valor}>
         R$ 649,90
         </Text>
     </ImageBackground>

     <ImageBackground
     style={estilo.card}
     source={{uri: "https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-force-58-preto-branco-98639.jpg"}}
     >
         <Text style={estilo.card_titulo}>
         Tênis Nike Sb Force 58
         </Text>
         <Text style={estilo.card_valor}>
         R$ 649,90
         </Text>
     </ImageBackground>

     <ImageBackground
     style={estilo.card}
     source={{uri: "https://static.rockcity.com.br/public/rockcity/imagens/produtos/tenis-nike-sb-force-58-preto-branco-98639.jpg"}}
     >
         <Text style={estilo.card_titulo}>
         Tênis Nike Sb Force 58
         </Text>
         <Text style={estilo.card_valor}>
         R$ 649,90
         </Text>
     </ImageBackground>
     
 
    </ImageBackground>
    </ScrollView>

  );
}