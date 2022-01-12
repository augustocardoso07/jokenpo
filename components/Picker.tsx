import { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GameState, MoveType } from "../pages/Home";

import Move from "./Move";

interface PickerProps {
    setGameState: Dispatch<SetStateAction<GameState>>;
    setPlayerMove: Dispatch<SetStateAction<MoveType>>;
}

export default function Picker(props: PickerProps) {
    const handlePress = (move: MoveType) => {
        props.setPlayerMove(move);
        props.setGameState("playing");
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Move
                    type='scissors'
                    movePositionX={180}
                    movePositionY={0}
                    onPress={() => handlePress("scissors")}
                />
                <Move
                    type='paper'
                    movePositionX={280}
                    movePositionY={80}
                    onPress={() => handlePress("paper")}
                />
                <Move
                    type='rock'
                    movePositionX={240}
                    movePositionY={200}
                    onPress={() => handlePress("rock")}
                />
                <Move
                    type='lizard'
                    movePositionX={120}
                    movePositionY={200}
                    onPress={() => handlePress("lizard")}
                />
                <Move
                    type='spock'
                    movePositionX={80}
                    movePositionY={80}
                    onPress={() => handlePress("spock")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        width: 360,
        height: 300,
    },
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
