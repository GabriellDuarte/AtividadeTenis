import { Text, ImageBackground } from 'react-native';
import estilo from "./estilo";


export default function TenisAdidas(props) {
  return (
   <ImageBackground 
   style={estilo.container}>
    
    <ImageBackground
    style={estilo.card}
    source={{uri: "https://cdnv2.moovin.com.br/genko/imagens/produtos/original/tenis-adidas-streetcheck-gw5488-053599a82baa30a1cd208f15c665a579.png"}}
    >
        <Text style={estilo.card_titulo}>
        Adidas Coreracer Masculino
        </Text>
        <Text style={estilo.card_valor}>
        R$ 179,99
        </Text>
    </ImageBackground>

   </ImageBackground>
  );
}