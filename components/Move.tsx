import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { MoveInterface, MoveType } from "../pages/Home";

const COLORMAP = (type: MoveType) => {
    switch (type) {
        case "scissors":
            return "hsl(39, 89%, 49%)";
        case "paper":
            return "hsl(230, 89%, 62%)";
        case "rock":
            return "hsl(349, 71%, 52%)";
        case "lizard":
            return "hsl(261, 73%, 60%)";
        case "spock":
            return "hsl(189, 59%, 53%)";
    }
    return "red";
};

export default function Move(props: MoveInterface) {
    return (
        <TouchableOpacity
            onPress={() => props.onPress()}
            style={
                styles(
                    props.movePositionX,
                    props.movePositionY,
                    COLORMAP(props.type)
                ).container
            }
        >
            {props.type === "lizard" && (
                <Image source={require(`../assets/icon-lizard.png`)} />
            )}
            {props.type === "paper" && (
                <Image source={require(`../assets/icon-paper.png`)} />
            )}
            {props.type === "rock" && (
                <Image source={require(`../assets/icon-rock.png`)} />
            )}
            {props.type === "scissors" && (
                <Image source={require(`../assets/icon-scissors.png`)} />
            )}
            {props.type === "spock" && (
                <Image source={require(`../assets/icon-spock.png`)} />
            )}
            {props.title && <Text style={styles().title}>{props.title}</Text>}
        </TouchableOpacity>
    );
}

const styles = (
    movePositionX?: number,
    movePositionY?: number,
    color?: string
) =>
    StyleSheet.create({
        container: {
            position: "absolute",
            top: movePositionY,
            left: movePositionX,
            transform: [{ translateX: -50 }],
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
            borderWidth: 10,
            borderColor: color,
            width: 100,
            height: 100,
        },
        title: {
            textTransform: "uppercase",
            color: "#fff",
            position: "absolute",
            top: 100,
            width: 150,
            textAlign: "center",
        },
    });
