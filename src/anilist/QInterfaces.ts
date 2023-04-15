export interface ITT {
    titles: {
        romaji: string
        english: string,
        native: string
    },
    coverImages: {
        extraLarge: string,
        large: string,
        medium: string,
        color: string
    }
}


export interface ISUser {
    id: number;
    name: string;
    avatar: { large: string; medium: string };
    bannerImage: string;
    statistics: {
        anime: IUAnimeList;
    }
}

export interface IUAnimeList {
    count: number;
    meanScore: number;
    standardDeviation: number;
    minutesWatched: number;
    episodesWatched: number;
    chaptersRead: number;
    volumesRead: number;
    statuses: {
        count: number;
        meanScore: number;
        minutesWatched: number;
        chaptersRead: number;
        mediaIds: number[];
        format?: string;
        status?: string;
    }[];
}
