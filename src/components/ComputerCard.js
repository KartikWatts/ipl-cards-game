import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { gameActions } from "../store/gameStore";

const CardDiv = styled.div`
	transform: translateX(${(props) => -(props.total - props.index) * 2.5}px)
		translateY(${(props) => -(props.total - props.index) * 3}px)
		scale(${(props) => 1 - (props.total - props.index) * 0.015});
	animation: ${(props) =>
		props.isCardSwappable ? "swap-computer 700ms forwards;" : null};
	pointer-events: ${(props) => (props.isInTurn ? "none" : "auto")};
`;

const ComputerCard = ({ length, index, total }) => {
	let dispatch = useDispatch();

	const isInTurn = useSelector((state) => state.game.isInTurn);
	const cards = useSelector((state) => state.game.computerCards);

	const [isCardSwappable, setisCardSwappable] = useState(false);

	useEffect(() => {
		const handleSwap = () => {
			if (isInTurn && index + 1 === cards.length) {
				setisCardSwappable(true);
				setTimeout(() => {
					setisCardSwappable(false);
					let newCards = [...cards];
					newCards.pop();
					dispatch(gameActions.setComputerCards(newCards));
				}, 1500);
			}
		};
		handleSwap();
	}, [isInTurn]);

	return (
		<CardDiv
			total={total}
			index={index}
			isCardSwappable={isCardSwappable}
			isInTurn={isInTurn}
			className="card computer-card"
		>
			<div>{isCardSwappable ? null : length}</div>
		</CardDiv>
	);
};

export default ComputerCard;
