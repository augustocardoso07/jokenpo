import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Picker from "../components/Picker";
import Footer from "../components/Footer";
import Game from "../components/Game";

import { useEffect, useState } from "react";
import {
    getComputerMove,
    gameResult,
    GameResultType,
} from "../game-logic/game";

export type GameState = "piking" | "playing";
export type MoveType =
    | "lizard"
    | "paper"
    | "rock"
    | "scissors"
    | "spock"
    | undefined;

export interface MoveInterface {
    type: MoveType;
    movePositionX: number;
    movePositionY: number;
    onPress: () => void;
    title?: string;
}

export default function Home() {
    const [gameState, setGameState] = useState<GameState>("piking");
    const [playerMove, setPlayerMove] = useState<MoveType>();
    const [score, setScore] = useState<number>(0);

    return (
        <View style={styles.container}>
            <Header score={score} />
            {gameState === "piking" ? (
                <Picker
                    setGameState={setGameState}
                    setPlayerMove={setPlayerMove}
                />
            ) : (
                <Game
                    playerMove={playerMove}
                    setScore={setScore}
                    score={score}
                    setGameState={setGameState}
                />
            )}
            <Footer />
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "hsl(214, 47%, 23%)",
        alignItems: "center",
        justifyContent: "center",
    },
});
