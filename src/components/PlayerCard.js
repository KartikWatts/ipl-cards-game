import React, { useState } from "react";
import styled from "styled-components";

const CardDiv = styled.div`
	transform: translateY(${(props) => -(props.total - props.index) * 5}px)
		scale(${(props) => 1 - (props.total - props.index) * 0.02});
	animation: ${(props) =>
		props.isCardSwappable ? "swap 700ms forwards;" : null};
`;

const PlayerCard = ({ length, onSwap, index, total }) => {
	const [isCardSwappable, setisCardSwappable] = useState(false);

	const handleSwap = () => {
		setisCardSwappable(true);

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
			onClick={handleSwap}
			className="card"
		>
			{isCardSwappable ? null : length}
		</CardDiv>
	);
};

export default PlayerCard;
