import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { gameActions } from "../store/gameStore";
import PlayerCard from "./PlayerCard";

const CardStack = styled.div`
	${(props) =>
		props.isInTurn
			? `transform:translateY(150px); 
		@media (max-width: 600px){
			transform:translateY(80px);
	}`
			: null}
`;

const PlayersCardStack = () => {
	const dispatch = useDispatch();

	const isInTurn = useSelector((state) => state.game.isInTurn);
	const cards = useSelector((state) => state.game.playerCards);
	const cardsComputer = useSelector((state) => state.game.computerCards);
	const [totalCards, setTotalCards] = useState(0);

	const [isInTurnState, setIsInTurnState] = useState(false);

	useEffect(() => {
		setTotalCards(cards.length);
	}, [cards]);

	useEffect(() => {
		if (isInTurn) {
			setTimeout(() => {
				setIsInTurnState(true);
			}, 1500);
		}
	}, [isInTurn]);

	const handleOnSwap = (index) => {
		if (index + 1 !== totalCards) return;
		let newCards = [...cards];
		newCards.pop();
		dispatch(gameActions.setPlayerCards(newCards));
		let newCardsComputer = [...cardsComputer];
		newCardsComputer.pop();
		dispatch(gameActions.setComputerCards(newCards));
		dispatch(gameActions.setChangesDone(true));
	};

	return (
		<>
			<CardStack className="stack player-stack" isInTurn={isInTurnState}>
				{cards.map((item, index) => {
					return (
						<PlayerCard
							key={index}
							length={cards.length}
							total={totalCards}
							index={index}
							onSwap={() => handleOnSwap(index)}
						/>
					);
				})}
			</CardStack>
		</>
	);
};

export default PlayersCardStack;
