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

export type GetMatch = {
	startTime: Date;
	homeTeam: string;
	homeScore: number;
	awayTeam: string;
	awayScore: number;
};
