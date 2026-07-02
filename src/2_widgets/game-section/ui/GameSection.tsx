import { GamesList } from "@features/game";
// import { GameFilter } from "@widgets/game-filter";

export const GameSection = () => {
    return (
        <>
            <div className="container fixed top-18 flex justify-around items-center z-40">
                <h2 className="text-center">Popular Games</h2>
                <input type="text" placeholder="Search..." />
                {/*<GameFilter />*/}
            </div>

            <section className="mt-14">
                <GamesList />
            </section>
        </>
    );
};
