import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { gameActions } from "../store/gameStore";

const CardDiv = styled.div`
	transform: translateX(${(props) => (props.total - props.index) * 3}px)
		translateY(${(props) => -(props.total - props.index) * 5}px)
		scale(${(props) => 1 - (props.total - props.index) * 0.02});
	@media (max-width: 1000px) {
		transform: translateX(${(props) => (props.total - props.index) * 2}px)
			translateY(${(props) => -(props.total - props.index) * 3.5}px)
			scale(${(props) => 1 - (props.total - props.index) * 0.015});
	}
	@media (max-width: 600px) {
		transform: translateX(${(props) => (props.total - props.index) * 1.5}px)
			translateY(${(props) => -(props.total - props.index) * 2.5}px)
			scale(${(props) => 1 - (props.total - props.index) * 0.01});
	}
	animation: ${(props) =>
		props.isCardSwappable ? "swap-player 700ms forwards;" : null};
	pointer-events: ${(props) => (props.isInTurn ? "none" : "auto")};
`;

const PlayerCard = ({ length, onSwap, index, total }) => {
	const dispatch = useDispatch();
	const isInTurn = useSelector((state) => state.game.isInTurn);

	const [isCardSwappable, setisCardSwappable] = useState(false);

	const handleSwap = () => {
		if (index + 1 !== length) return;
		setisCardSwappable(true);
		dispatch(gameActions.toggleTurn());

		setTimeout(() => {
			setisCardSwappable(false);
			onSwap();
		}, 1500);
	};

	return (
		<CardDiv
			total={total}
			index={index}
			isCardSwappable={isCardSwappable}
			isInTurn={isInTurn}
			onClick={handleSwap}
			className="card player-card"
		>
			<div>{isCardSwappable ? null : length}</div>
		</CardDiv>
	);
};

export default PlayerCard;
