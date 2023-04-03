import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      card:{
      width: 280,
      height: 300,
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor: 'grey',
      marginBottom: 30,
    },
    card_titulo:{
        fontSize: 20,
        fontWeight: "bold",
        backgroundColor: "#0f0f0fcf",
        paddingLeft: 10,
        borderRadius: 10,
        color: "#FFF",
        textAlign: 'center',
        padding: 5
    },
    card_valor:{
        fontSize: 20,
        backgroundColor: "#0f0f0fcf",
        textAlign: "Center",
        color: "#FFF", 
        marginTop: 220,
    }
  });

export default estilo;