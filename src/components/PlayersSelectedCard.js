import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CardSelected = styled.div`
	${(props) =>
		props.isFlipped
			? "transform: translate(363px, -40px) rotateY(180deg)"
			: null};
`;

const PlayersSelectedCard = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsFlipped(true);
		}, 600);
	}, []);

	return (
		<CardSelected className="card-selected" isFlipped={isFlipped}>
			<div className="card-selected__front">front</div>
			<div className="card-selected__back">back</div>
		</CardSelected>
	);
};

export default PlayersSelectedCard;
