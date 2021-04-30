import { gameActions } from "./gameStore";

let host = process.env.REACT_APP_IPL_API;

export const fetchTeamsData = () => {
	let link = `${host}/all-players-list`;

	const processData = (array, minLength) => {
		array = array.sort(
			(a, b) => parseFloat(b.matches) - parseFloat(a.matches)
		);
		array = array.slice(0, minLength);
		array = array.sort(() => Math.random() - 0.5);
		return array;
	};

	return async (dispatch) => {
		const fetchAllPlayersData = async (team_id) => {
			const response = await fetch(link, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ team_id }),
			});

			if (!response.ok) {
				throw new Error("Could not fetch data!");
			}

			const data = await response.json();

			return data;
		};

		try {
			let PlayerCardData = await fetchAllPlayersData(8);
			let OpponentCardData = await fetchAllPlayersData(9);
			PlayerCardData = PlayerCardData.filter(
				(item) => item.matches != null
			);
			OpponentCardData = OpponentCardData.filter(
				(item) => item.matches != null
			);

			let minLength = Math.min(
				PlayerCardData.length,
				OpponentCardData.length
			);

			PlayerCardData = processData(PlayerCardData, minLength);

			OpponentCardData = processData(OpponentCardData, minLength);

			console.log("PlayerCards", PlayerCardData);
			console.log("OpponentCards", OpponentCardData);

			dispatch(gameActions.setPlayerCards(PlayerCardData));
			dispatch(gameActions.setComputerCards(OpponentCardData));
		} catch (e) {
			console.log(e);
		}
	};
};
