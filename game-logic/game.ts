import { MoveType } from "../pages/Home";

const MOVES: MoveType[] = ["lizard", "paper", "rock", "scissors", "spock"];

export function getComputerMove(): MoveType {
    return MOVES[Math.floor(Math.random() * MOVES.length)];
}

export type GameResultType = "draw" | "player" | "computer";

const map = {
    scissors: ["paper", "lizard"],
    paper: ["rock", "spock"],
    rock: ["lizard", "scissors"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
};

export function gameResult(
    player: MoveType,
    computer: MoveType
): GameResultType {
    if (player == computer || player == undefined || computer == undefined)
        return "draw";

    if (map[player].indexOf(computer) >= 0) {
        return "player";
    } else {
        return "computer";
    }
}
