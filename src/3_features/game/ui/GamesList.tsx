import { useGames } from "@features/game/api/useGames.ts";
import { GameCard } from "@entities/game";
import { useEffect, useMemo, useRef, useState } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";


const GAP = 20;
const CARD_HEIGHT = 320;

export const GamesList = () => {
    const { data: games = [], isLoading, error } = useGames();
    const parentRef = useRef<HTMLDivElement>(null);

    const [columns, setColumns] = useState(4);

    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 640) setColumns(1);
            else if (width < 768) setColumns(2);
            else if (width < 1024) setColumns(3);
            else setColumns(4);
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => {
            window.removeEventListener("resize", updateColumns);
        };
    }, []);

    const rows = useMemo(() => {
        const result = [];
        for (let i = 0; i < games.length; i += columns) {
            result.push(games.slice(i, i + columns));
        }
        return result;
    }, [games, columns]);

    const rowVirtualizer = useVirtualizer({
        count: games.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => CARD_HEIGHT + GAP,
        overscan: 3,
    });


    if (isLoading) return <div>Loading games...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div ref={parentRef} className="h-[800px] overflow-x-auto">
            <div
                className="relative w-full mx-auto"
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const rowGames = rows[virtualRow.index];
                    return (
                        <div
                            key={virtualRow.key}
                            className="absolute top-0 left-0 w-full px-2"
                            style={{
                                height: `${virtualRow.size}px`,
                                transform: `translateY(${virtualRow.start}px)`,
                            }}
                        >
                            <div
                                className="grid h-full"
                                style={{
                                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                                    gap: `${GAP}px`,
                                }}
                            >
                                {rowGames.map((game) => (
                                    <GameCard key={game.id} game={game} />
                                ))}

                                {rowGames.length < columns &&
                                    Array(columns - rowGames.length)
                                        .fill(null)
                                        .map((_, i) => (
                                            <div key={`empty-${i}`} />
                                        ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
