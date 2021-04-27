import React from "react";
import { useDispatch } from "react-redux";
import noPic from "../images/no-photo.png";
import { gameActions } from "../store/gameStore";

const CardData = ({ field, data }) => {
	const dispatch = useDispatch();

	return (
		<div
			className="display-data"
			onClick={() =>
				dispatch(
					gameActions.setCardData({
						field: field,
						data: data,
					})
				)
			}
		>
			<span className="display-data__field">{field}: </span>
			<span className="body-row__value">{data}</span>
		</div>
	);
};

const CardDisplay = () => {
	return (
		<div className="card-selected__back">
			<div>
				<object data={noPic} type="image/png" className="display-image">
					<img
						className="display-image"
						src={noPic}
						alt={"player_name"}
					/>
				</object>
			</div>
			<div className="display-main">
				<div className="main-player-name">Ravichandran Ashwin</div>
				<div className="main-player-team">Punjab Kings</div>
				<div className="main-last">
					<CardData field="Matches" data={100} />
				</div>
			</div>
			<div className="display-row display-row-1">
				<CardData field="Runs" data={100} />
				<CardData field="Highest" data={100} />
				<CardData field="Bat Avg" data={100} />
				<CardData field="Str Rt" data={100} />
				<CardData field="Hundreds" data={100} />
				<CardData field="Fifties" data={100} />
			</div>
			<div className="mobile-display-row">
				<div>
					<CardData field="Sixes" data={100} />
				</div>
				<div>
					<CardData field="Not Outs" data={100} />
				</div>
			</div>
			<div className="display-row display-row-2">
				<CardData field="Catches" data={100} />
				<CardData field="Overs" data={100} />
				<CardData field="Wickets" data={100} />
				<CardData field="Ball Avg" data={100} />
				<CardData field="Economy" data={100} />
				<CardData field="4 Wickets" data={100} />
			</div>
		</div>
	);
};

export default CardDisplay;
