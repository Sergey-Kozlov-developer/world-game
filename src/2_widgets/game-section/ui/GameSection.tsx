import { GamesList } from "@features/game";

export const GameSection = () => {
    return (
        <>
            <div className="container fixed top-18 flex justify-around items-center z-40">
                <h2 className="text-center">Popular Games</h2>
                <input type="text" placeholder="Search..." />
                <h2 className="text-center">Filtered Games</h2>
            </div>

            <section className="mt-14">
                <GamesList />
            </section>
        </>
    );
};
