export interface IGame {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre:
        | "Shooter"
        | "MMORPG"
        | "Battle Royale"
        | "Strategy"
        | "ARPG"
        | "Action RPG"
        | "RPG"
        | "Social"
        | "Fighting"
        | "Sports"
        | "MMO"
        | "MOBA"
        | "Dungeon Crawler"
        | "Card Game"
        | "Action Game";
    platform: "PC (Windows)" | "Web Browser";
    publisher: string;
    developer: string;
    release_date: string;
}

export type IGameResponse = IGame[];


export interface IGameParams {
    genre?: string;
    platform?: string;
}