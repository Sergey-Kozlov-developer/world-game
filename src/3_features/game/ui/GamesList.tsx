import { GameCard } from "@entities/game";
import { useVirtualizedGamesHook } from "@features/game/hooks/useVirtualizedGames.ts";


export const GamesList = () => {
    const { rows, columns, rowVirtualizer, parentRef, isLoading, error, GAP } =
        useVirtualizedGamesHook();

    if (isLoading) {
        return (
            <div className="text-center py-8 text-muted-foreground">
                Загрузка...
            </div>
        );
    }

    if (error) {
        const errorMessage =
            "message" in error ? error.message : "Неизвестная ошибка";
        return (
            <div className="text-center py-8 text-muted-foreground">
                Ошибка: {errorMessage}
            </div>
        );
    }

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
