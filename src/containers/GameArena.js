import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayersCardStack from "../components/PlayersCardStack";
import PlayersSelectedCard from "../components/PlayersSelectedCard";
import { gameActions } from "../store/gameStore";

const GameArena = () => {
	const dispatch = useDispatch();

	const isInTurn = useSelector((state) => state.game.isInTurn);

	const [isCardSelected, setisCardSelected] = useState(false);

	useEffect(() => {
		dispatch(
			gameActions.setCards([
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
			])
		);
	}, [dispatch]);

	useEffect(() => {
		if (isInTurn) {
			setTimeout(() => {
				setisCardSelected(true);
			}, 800);
		}
	}, [isInTurn]);

	return (
		<div className="game-arena">
			<PlayersCardStack />
			{isCardSelected && <PlayersSelectedCard />}
		</div>
	);
};

export default GameArena;
