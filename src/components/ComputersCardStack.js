import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { gameActions } from "../store/gameStore";
import ComputerCard from "./ComputerCard";

const CardStack = styled.div`
	${(props) =>
		props.isInTurn
			? `transform:translateY(-140px); 
				@media (max-width: 600px){
				transform:translateY(-80px);
			}`
			: null}
`;

const ComputersCardStack = () => {
	const dispatch = useDispatch();

	const isInTurn = useSelector((state) => state.game.isInTurn);
	const cards = useSelector((state) => state.game.computerCards);
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

	const handleOnSwap = () => {
		let newCards = [...cards];
		newCards.pop();
		dispatch(gameActions.setComputerCards(newCards));
	};

	return (
		<>
			<CardStack
				className="stack computer-stack"
				isInTurn={isInTurnState}
			>
				{cards.map((item, index) => {
					return (
						<ComputerCard
							key={item}
							length={cards.length}
							total={totalCards}
							index={index}
							onSwap={handleOnSwap}
						/>
					);
				})}
			</CardStack>
		</>
	);
};

export default ComputersCardStack;
