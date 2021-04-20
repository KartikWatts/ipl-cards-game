import React, { useState } from "react";
import PlayerCard from "./PlayerCard";

const PlayersCardStack = () => {
	const [cards, setCards] = useState([
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
	]);
	const [totalCards, setTotalCards] = useState(cards.length);
	// const [isInTurn, setIsInTurn] = useState(false);

	const handleOnSwap = () => {
		let newCards = [...cards];
		newCards.pop();
		setCards(newCards);
	};

	return (
		<div className="stack">
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
		</div>
	);
};

export default PlayersCardStack;
