import { useVirtualizer } from "@tanstack/react-virtual";
import { useMemo, useRef } from "react";
import { useGames } from "@features/game/api/useGames.ts";



interface UseVirtualizedGamesOptions {
    estimateSize?: () => number;
    overscan?: number;
    enabled?: boolean;
}

export const useVirtualizedGamesHook = (options?: UseVirtualizedGamesOptions) => {
    const {
        estimateSize = () => 280,
        overscan = 9,
        enabled = true,
    } = options || {};

    const parentRef = useRef<HTMLDivElement>(null);
    const { data, isLoading, isError } = useGames();

    const games = useMemo(() => {
        return Array.isArray(data) ? data : [];
    }, [data]);

    const rowVirtualizer = useVirtualizer({
        count: enabled && games.length > 0 ? games.length : 0,
        getScrollElement: () => parentRef.current,
        estimateSize,
        overscan,
    });
    const virtualItems = rowVirtualizer.getVirtualItems();
    const totalSize = rowVirtualizer.getTotalSize();

    return {
        parentRef,
        rowVirtualizer,
        estimateSize,
        overscan,
        totalSize,
        virtualItems,
        isLoading,
        isError,
        hasData: games.length > 0,
    };

}