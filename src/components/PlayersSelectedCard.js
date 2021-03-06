import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import CardDisplay from "./CardDisplay";

const PlayersSelectedCard = ({ isCardSelected }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsFlipped(true);
		}, 2500);
	}, [isCardSelected]);

	return (
		<>
			{isCardSelected && (
				<CardSelected
					className="card-selected player-card-selected"
					isFlipped={isFlipped}
				>
					<CardFront className="card-selected__front"></CardFront>
					<CardDisplay />
				</CardSelected>
			)}
		</>
	);
};

export default PlayersSelectedCard;

const emergeAnimation = keyframes`
	0% {opacity: 0 }
	30%{opacity:0}
	100% {opacity: 1; }
`;

const CardSelected = styled.div`
	${(props) =>
		props.isFlipped
			? `
			z-index: 2;
			transform: translate(200px, 140px) rotateY(180deg); 
			@media (max-width: 1000px){
				transform: translate(35px, 180px) rotateY(180deg);
			}
			@media (max-width: 600px){
				transform: translate(10px, 325px) rotateY(180deg);
			}`
			: null}
`;

const CardFront = styled.div`
	animation-name: ${emergeAnimation};
	animation-duration: 1s;
	animation-fill-mode: forwards;
`;
