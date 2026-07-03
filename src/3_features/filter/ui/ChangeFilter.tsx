import { Filter } from "@features/filter";
import { useFilterStore } from "@features/filter/model/store.ts";
// import { useGames } from "@features/game/api/useGames.ts";

export const ChangeFilter = () => {
    const { filters, setGenre, setPlatform } = useFilterStore();

    const genresFilters = [
        // { value: "All", label: "All" },
        { value: "shooter", label: "Shooter" },
        { value: "mmorpg", label: "MMORPG" },
        { value: "action-rpg", label: "Action RPG" },
        { value: "rpg", label: "RPG" },
        { value: "social", label: "Social" },
        { value: "fighting", label: "Fighting" },
        { value: "sports", label: "Sports" },
        { value: "mmo", label: "MMO" },
        { value: "moba", label: "MOBA" },
        { value: "dungeon-crawler", label: "Dungeon Crawler" },
        { value: "card-game", label: "Card Game" },
        { value: "action-game", label: "Action Game" },
    ];

    const platformFilters = [
        // { value: "All", label: "All" },
        { value: "pc", label: "PC (Windows)" },
        { value: "browser", label: "Web Browser" },
    ];

    return (
        <div className="flex gap-3">
            <Filter
                label="Genre"
                value={filters.genre || ''}
                placeholder="Filter by genre"
                options={genresFilters}
                onChange={setGenre}
            />

            <Filter
                label="Platform"
                value={filters.platform || ''}
                placeholder="Filter by platform"
                options={platformFilters}
                onChange={setPlatform}
            />
        </div>
    );
};
