import { baseApi } from "@shared/api/baseApi.ts";
import type {
    IGame,
    IGameParams,
    IGameResponse,
} from "@entities/game/model/types.ts";

export const gameApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getGames: builder.query<IGameResponse, IGameParams>({
            query: (params) => {
                const queryParams: Record<string, string>= {};
                if(params?.platform){
                    queryParams.platform = params.platform
                }
                if (params?.genre) {
                    queryParams.category = params.genre;
                }
                return {
                    url: "/games",
                    params: queryParams
                };
            },
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

export const {
    useGetGamesQuery,
    useGetGameByIdQuery,
    useLazyGetGameByIdQuery,
} = gameApi;

