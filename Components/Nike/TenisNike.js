import { Text, ImageBackground } from 'react-native';
import estilo from "./estilo";


export default function TenisNike(props) {
  return (
    <ImageBackground 
    style={estilo.container}>
     
     <ImageBackground
     style={estilo.card}
     source={{uri: "https://imgnike-a.akamaihd.net/1920x1920/022147IM.jpg"}}
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