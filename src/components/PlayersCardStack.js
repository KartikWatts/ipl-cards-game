import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { counterActions } from "../store/counter";
import { gameActions } from "../store/gameStore";
import PlayerCard from "./PlayerCard";

const CardStack = styled.div`
	${(props) => (props.isInTurn ? "transform:translateY(200px)" : null)}
`;

const PlayersCardStack = () => {
	const dispatch = useDispatch();

	const counter = useSelector((state) => state.counter.value);
	const isInTurn = useSelector((state) => state.game.isInTurn);
	const cards = useSelector((state) => state.game.cards);
	const [totalCards, setTotalCards] = useState(0);

	const incrementHandler = () => {
		dispatch(counterActions.increment(10));
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};
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
		dispatch(gameActions.setCards(newCards));
	};

	return (
		<>
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={decrementHandler}>Decrement</button>
			<CardStack className="stack" isInTurn={isInTurnState}>
				{counter}
				{cards.map((item, index) => {
					return (
						<PlayerCard
							key={item}
							length={cards.length}
							total={totalCards}
							index={index}
							onSwap={() => handleOnSwap(index, item)}
						/>
					);
				})}
			</CardStack>
		</>
	);
};

export default PlayersCardStack;
