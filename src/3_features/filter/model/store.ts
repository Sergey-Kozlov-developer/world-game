import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { IGameParams } from "@entities/game/model/types.ts";


interface IFilterState {
    filters: IGameParams
}

const initialFilters: IGameParams = {
    genre: '',
    platform: '',
}

export const useFilterStore = create<IFilterState>()(
    devtools(
        (set) => ({

            filters: initialFilters,

            setGenre: (genre: string) =>
                set((state) => ({
                    filters: { ...state.filters, genre },
                }), false, 'filters/setGenre'),

            setPlatform: (platform: string) =>
                set((state) => ({
                    filters: { ...state.filters, platform },
                }), false, 'filters/setPlatform'),

        }),
        { name: "filter-store" }
    )
);