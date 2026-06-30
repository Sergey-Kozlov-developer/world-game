import type { IGame } from "@entities/game/model/types.ts";

interface IGameCardProps {
    game: IGame;
}

export const GameCard = ({ game }: IGameCardProps) => {
    return (
        <div className="game-card">
            <img src={game.thumbnail} alt={game.title} />
            <h3>{game.title}</h3>
            <p>{game.short_description}</p>
        </div>
    );
};
