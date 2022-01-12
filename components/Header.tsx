import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Header({ score }: { score: number }) {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require("../assets/logo-bonus.png")}
                    style={styles.logo}
                />
            </View>
            <View style={styles.score}>
                <Text style={styles.label}>Score</Text>
                <Text style={styles.points}>{score}</Text>
            </View>
            <StatusBar style='inverted' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        height: 110,
        width: "90%",
        flexDirection: "row",
        borderWidth: 3,
        borderRadius: 5,
        borderColor: "#fff",
        marginTop: 40,
        paddingLeft: 18,
        paddingRight: 10,
    },

    logo: {
        width: 70,
        height: 70,
    },
    score: {
        backgroundColor: "#fff",
        padding: 8,
        width: 80,
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 5,
        borderColor: "#fff",
    },
    label: {},
    points: {
        fontSize: 35,
    },
});
