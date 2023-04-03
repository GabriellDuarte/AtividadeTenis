import { Text, ImageBackground } from 'react-native';
import estilo from "./estilo";


export default function TenisMizuno(props) {
  return (
    <ImageBackground 
    style={estilo.container}>
     
     <ImageBackground
     style={estilo.card}
     source={{uri: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/nhldpsff/5.jpg"}}
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