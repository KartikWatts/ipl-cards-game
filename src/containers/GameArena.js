import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ComputersCardStack from "../components/ComputersCardStack";
import ComputersSelectedCard from "../components/ComputersSelectedCard";
import PlayersCardStack from "../components/PlayersCardStack";
import PlayersSelectedCard from "../components/PlayersSelectedCard";
import { fetchTeamsData } from "../store/gameData";

const GameArena = () => {
	const dispatch = useDispatch();

	const isInTurn = useSelector((state) => state.game.isInTurn);

	const [isCardSelected, setisCardSelected] = useState(false);

	useEffect(() => {
		dispatch(fetchTeamsData());
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
