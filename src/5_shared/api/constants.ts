export const QUERY_KEYS = {
    games: ["games"]as const,
    game: (id: number) => ['games', id] as const,
}