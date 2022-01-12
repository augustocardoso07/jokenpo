import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RouteParams } from "../App";

export default function Footer() {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text
                    style={styles.text}
                    onPress={() => navigation.navigate("Rules")}
                >
                    {" "}
                    Rules
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        alignItems: "center",
        justifyContent: "center",
    },

    button: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 10,
        paddingTop: 10,

        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
    },

    text: {
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 18,
    },
});
