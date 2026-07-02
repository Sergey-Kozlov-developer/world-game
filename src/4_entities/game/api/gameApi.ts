import { baseApi } from "@shared/api/baseApi.ts";
import type {
    IGame,
    IGameParams,
    IGameResponse,
} from "@entities/game/model/types.ts";

export const gameApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGames: builder.query<IGameResponse, IGameParams>({
            query: (params) => ({
                url: "/games",
                params: {
                    genre: params?.genre || undefined,
                    platform: params?.platform || undefined,
                },
            }),
            transformResponse: (response: IGameResponse) => {
                return Array.isArray(response) ? response : [];
            },
        }),

        getGameById: builder.query<IGame, string>({
            query: (id) => ({
                url: `/game?id=${id}`,
            }),
        }),
    }),
    overrideExisting: false,
});

// Исправление: экспортируем хуки через деструктуризацию с явным указанием
export const {
    useGetGamesQuery,
    useGetGameByIdQuery,
    useLazyGetGameByIdQuery,
} = gameApi;

