import { useGames } from "@features/game/api/useGames.ts";
import { GameCard } from "@entities/game";
import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";

export const GamesList = () => {
    const { data: games = [], isLoading, error } = useGames();
    const parentRef = useRef<HTMLDivElement>(null);

    const rowVirtualizer = useVirtualizer({
        count: games.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 320,
        overscan: 3,
        gap: 20,
    });

    const columnVirtualizer = useVirtualizer(({
        horizontal: true,
        count: 4,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 320,
        overscan: 3,
        gap: 20,
    }))


    if (isLoading) return <div>Loading games...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div ref={parentRef} className="h-[800px] overflow-x-auto">
            <div
                className="relative w-full mx-auto"
                style={{
                    height: `${rowVirtualizer.getTotalSize()}px`,
                    width: `${columnVirtualizer.getTotalSize()}px`,
                }}
            >
                {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                    <React.Fragment key={virtualRow.index}>
                        {columnVirtualizer.getVirtualItems().map((virtualColumn) => {
                            const game = games[virtualColumn.index];
                            return (
                                <div
                                    key={virtualColumn.index}
                                    className="absolute top-0 left-0 w-full "
                                    style={{
                                        height: `${virtualRow.size}px`,
                                        width: `${virtualColumn.size}px`,
                                        // transform: `translateY(${virtualItem.start}px)`,
                                        transform: `translateX(${virtualColumn.start}px) translateY(${virtualRow.start}px)`,
                                    }}
                                >
                                    <GameCard game={game} />
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
