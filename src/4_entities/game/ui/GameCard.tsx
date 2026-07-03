import type { IGame } from "@entities/game/model/types.ts";
import { Card, CardDescription, CardHeader, CardTitle } from "@ui/shadcn/card.tsx";

interface IGameCardProps {
    game: IGame;
}

export const GameCard = ({ game }: IGameCardProps) => {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img src={game.thumbnail} alt="Image Game" />
            <CardHeader>
                <CardTitle>{game.title}</CardTitle>
            </CardHeader>
            <CardDescription>
                <CardTitle>{game.genre}</CardTitle>
                <CardTitle>{game.platform}</CardTitle>
                {game.short_description}
            </CardDescription>
        </Card>
    );
};
