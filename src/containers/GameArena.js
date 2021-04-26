import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComputersCardStack from "../components/ComputersCardStack";
import ComputersSelectedCard from "../components/ComputersSelectedCard";
import PlayersCardStack from "../components/PlayersCardStack";
import PlayersSelectedCard from "../components/PlayersSelectedCard";
import { gameActions } from "../store/gameStore";

const GameArena = () => {
	const dispatch = useDispatch();

	const isInTurn = useSelector((state) => state.game.isInTurn);

	const [isCardSelected, setisCardSelected] = useState(false);

	useEffect(() => {
		let dummyCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
		dispatch(gameActions.setPlayerCards(dummyCards));
		dispatch(gameActions.setComputerCards(dummyCards));
	}, [dispatch]);

	useEffect(() => {
		if (isInTurn) {
			setisCardSelected(true);
		}
	}, [isInTurn]);

	return (
		<div className="game-arena">
			<PlayersCardStack />
			<PlayersSelectedCard isCardSelected={isCardSelected} />
			<ComputersCardStack />
			<ComputersSelectedCard isCardSelected={isCardSelected} />
		</div>
	);
};

export default GameArena;
