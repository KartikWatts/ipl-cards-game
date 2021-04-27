import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CardDiv = styled.div`
	transform: translateX(${(props) => -(props.total - props.index) * 2.5}px)
		translateY(${(props) => -(props.total - props.index) * 3}px)
		scale(${(props) => 1 - (props.total - props.index) * 0.015});
	@media (max-width: 1000px) {
		transform: translateX(
				${(props) => -(props.total - props.index) * 1.5}px
			)
			translateY(${(props) => -(props.total - props.index) * 1.8}px)
			scale(${(props) => 1 - (props.total - props.index) * 0.01});
	}
	@media (max-width: 600px) {
		transform: translateX(
				${(props) => -(props.total - props.index) * 1.3}px
			)
			translateY(${(props) => -(props.total - props.index) * 1.5}px)
			scale(${(props) => 1 - (props.total - props.index) * 0.008});
	}
	animation: ${(props) =>
		props.isCardSwappable ? "swap-computer 700ms forwards;" : null};
	pointer-events: ${(props) => (props.isInTurn ? "none" : "auto")};
`;

const ComputerCard = ({ length, index, total }) => {
	const isInTurn = useSelector((state) => state.game.isInTurn);
	const changesDone = useSelector((state) => state.game.changesDone);

	const [isCardSwappable, setisCardSwappable] = useState(false);

	useEffect(() => {
		const handleSwap = () => {
			if (isInTurn && changesDone && index + 1 === length) {
				setisCardSwappable(true);
				setTimeout(() => {
					setisCardSwappable(false);
				}, 1500);
			}
		};
		handleSwap();
	}, [isInTurn, index, length, changesDone]);

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
