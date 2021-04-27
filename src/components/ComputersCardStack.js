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

	const changesDone = useSelector((state) => state.game.changesDone);
	const cards = useSelector((state) => state.game.computerCards);
	const [totalCards, setTotalCards] = useState(0);

	useEffect(() => {
		setTotalCards(cards.length);
	}, [cards]);

	const handleOnSwap = () => {
		let newCards = [...cards];
		newCards.pop();
		dispatch(gameActions.setComputerCards(newCards));
	};

	return (
		<>
			<CardStack className="stack computer-stack" isInTurn={changesDone}>
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
