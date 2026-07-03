import { useVirtualizer } from "@tanstack/react-virtual";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGetGamesQuery } from "@entities/game/api/gameApi.ts";
import { useFilterStore } from "@features/filter/model/store.ts";


const GAP = 20;
const CARD_HEIGHT = 320;

export const useVirtualizedGamesHook = () => {

    const filters = useFilterStore(state => state.filters)
    const { data, isLoading, error } = useGetGamesQuery(filters);
    const games = data || [];
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
        count: rows.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => CARD_HEIGHT + GAP,
        overscan: 3,
        enabled: rows.length > 0,
    });

    return {
        rows,
        columns,
        rowVirtualizer,
        parentRef,
        isLoading,
        error,
        GAP,
        data: games,
    };

}