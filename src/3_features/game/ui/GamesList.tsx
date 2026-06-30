import { useGames } from "@features/game/api/useGames.ts";
import { GameCard } from "@entities/game";

export const GamesList = () => {
    const { data: games, isLoading, error } = useGames();
    if (isLoading) return <div>Loading games...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="grid grid-cols-3 gap-y-2 mt-11">
            {games?.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
    );
};
