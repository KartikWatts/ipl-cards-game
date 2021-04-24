import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { gameActions } from "../store/gameStore";

const CardSelected = styled.div`
	${(props) =>
		props.isFlipped
			? `transform: translate(200px, 140px) rotateY(180deg); 
				@media (max-width: 1000px){
					transform: translate(35px, 180px) rotateY(180deg);
				}
				@media (max-width: 600px){
					transform: translate(10px, 285px) rotateY(180deg);
				}`
			: null}
`;

const PlayersSelectedCard = () => {
	const dispatch = useDispatch();
	const [isFlipped, setIsFlipped] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsFlipped(true);
		}, 600);
	}, []);

	return (
		<CardSelected
			className="card-selected player-card-selected"
			isFlipped={isFlipped}
			//TODO dispatch data from actual card later
			onClick={() =>
				dispatch(
					gameActions.setCardData({ field: "matches", data: "100" })
				)
			}
		>
			<div className="card-selected__front">front</div>
			<div className="card-selected__back">back</div>
		</CardSelected>
	);
};

export default PlayersSelectedCard;
