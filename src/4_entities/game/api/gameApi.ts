import type { IGame } from "@entities/game/model/types.ts";
import { baseApi } from "@shared/api/baseApi.ts";

export const gameApi = {
    getGames: async (): Promise<IGame[]> => {
        try {
            const { data } = await baseApi.get<IGame[]>("/games");
            if (!Array.isArray(data)) {
                console.log(`No array ${data}`);
            }
            return data;
        } catch (e) {
            console.error(e);
            return [];
        }


    },

    // get id
    getGameById: async (id: number): Promise<IGame> => {
        const { data } = await baseApi.get<IGame>(`/game?id=${id}`);
        return data;
    },
};
