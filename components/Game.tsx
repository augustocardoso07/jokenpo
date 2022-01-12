import { Dispatch, SetStateAction, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GameState, MoveType } from "../pages/Home";

import Move from "./Move";
import {
    gameResult,
    GameResultType,
    getComputerMove,
} from "../game-logic/game";

interface GameProps {
    playerMove: MoveType;
    setScore: Dispatch<SetStateAction<number>>;
    score: number;
    setGameState: Dispatch<SetStateAction<GameState>>;
}

export default function Game(props: GameProps) {
    const handleNewGame = () => {
        props.setGameState("piking");
        if (winner == "player") props.setScore(props.score + 1);
    };

    const computerMove = getComputerMove();
    const winner = gameResult(props.playerMove, computerMove);

    const formatResultText = () => {
        if (winner == "player") {
            return "you win";
        } else if (winner == "computer") {
            return "the house win";
        } else {
            return winner;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Move
                    type={props.playerMove}
                    movePositionX={90}
                    movePositionY={50}
                    onPress={handleNewGame}
                    title='You picked'
                />
                <Move
                    type={computerMove}
                    movePositionX={270}
                    movePositionY={50}
                    onPress={handleNewGame}
                    title='The House picked'
                />
            </View>
            <View style={styles.menu}>
                <Text style={styles.gameResul}>{formatResultText()}</Text>
                <TouchableOpacity
                    style={styles.playAgain}
                    onPress={handleNewGame}
                >
                    <Text style={styles.playAgainText}>Play Again</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        width: 360,
        height: 200,
    },
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    gameResul: {
        color: "#fff",
        textTransform: "uppercase",
        fontSize: 40,
        marginBottom: 30,
    },
    playAgain: {
        paddingRight: 50,
        paddingLeft: 50,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: 5,
    },
    playAgainText: {
        textTransform: "uppercase",
    },
    menu: {
        alignItems: "center",
        justifyContent: "space-evenly",
    },
});
