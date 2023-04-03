import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
      card:{
      width: 250,
      height: 250,
      alignItems: 'center',
      borderRadius: 20,
      marginBottom: 15
    },
    card_titulo:{
        fontSize: 24,
        fontWeight: "bold",
        backgroundColor: "#0f0f0fcf",
        paddingLeft: 10,
        color: "#FFF"
    },
    card_valor:{
        fontSize: 20,
        backgroundColor: "#0f0f0fcf",
        textAlign: "Center",
        color: "#FFF",

    }
  });

export default estilo;