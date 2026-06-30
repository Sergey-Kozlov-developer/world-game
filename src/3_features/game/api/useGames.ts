import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@shared/api/constants.ts";
import { gameApi } from "@entities/game/api/gameApi.ts";

export const useGames = () => {
    return useQuery({
        queryKey: QUERY_KEYS.games,
        queryFn: gameApi.getGames,
        staleTime: 1000 * 60 * 5,
        refetchInterval: 1000 * 60 * 5,
    })
}