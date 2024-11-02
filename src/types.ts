export type Team = {
	name: string;
	score?: number;
};

export type Teams = [
	/** home team */
	Team,
	/** away team */
	Team,
];
