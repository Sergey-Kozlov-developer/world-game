import { Filter } from "@features/filter";
// import { useGames } from "@features/game/api/useGames.ts";

export const ChangeFilter = () => {
    // const {data: games} = useGames();
    return (
        <div>
            <Filter label='Filter' value='genre' placeholder='' options={[]} onChange={() => {}} />
        </div>
    );
};
