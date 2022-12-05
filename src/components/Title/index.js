import react from "react";
import { View, Text, StyleSheet} from "react-native";

export default function Title(){


    return(
        <View style={styles.window}>
            <Text style={styles.text}>One Bit Heath</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    window: {
        height: 200,
        display: "flex",
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    text:{
        fontWeight: "bold",
        color: "red",
        fontSize: 40
    }
});