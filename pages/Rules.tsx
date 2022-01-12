import { useNavigation } from "@react-navigation/core";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Rules </Text>
            <Image
                style={styles.image}
                source={require("../assets/image-rules-bonus.png")}
            />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require("../assets/icon-close.png")} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
    },
    image: {},
    title: {
        fontSize: 35,
    },
});
