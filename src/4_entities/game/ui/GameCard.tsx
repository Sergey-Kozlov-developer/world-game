import type { IGame } from "@entities/game/model/types.ts";
import {
    Card,
    CardAction,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@ui/shadcn/card.tsx";
import { memo } from "react";
import { Button } from "@ui/shadcn/button.tsx";
import { Badge } from "@ui/shadcn/badge.tsx";

interface IGameCardProps {
    game: IGame;
}

export const GameCard = memo(({ game }: IGameCardProps) => {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/5" />
            <img
                src={game.thumbnail}
                alt="Image Game"
                className="relative z-20 aspect-video w-full object-cover brightness-80 "
            />
            <CardAction className="absolute z-30 right-2.5 top-2.5 flex gap-2.5 ">
                <Badge variant="secondary" className='bg-black/60 text-white'>{game.genre}</Badge>
                <Badge variant="secondary" className='bg-black/60 text-white'>{game.platform}</Badge>
            </CardAction>
            <CardHeader>
                <CardTitle>{game.title}</CardTitle>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">Detailed info</Button>
            </CardFooter>
        </Card>
    );
});
