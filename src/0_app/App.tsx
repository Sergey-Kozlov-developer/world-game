import { Button } from "@shared/ui/shadcn/button";
import { useEffect, useState } from "react";

function App() {
    const [games, setGames] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(
                    "https://www.freetogame.com/api/games"
                );
                if (!response.ok) {
                    throw new Error(`Ошибка HTTPS: статус: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);

                setGames(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            }
            // const response = await fetch(
            //     "https://www.freetogame.com/api/games"
            // );
            // console.log(response);
            // if (response.ok) {
            //     setData(data);
            //     console.log(data);
            // }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                <h1>Hello game</h1>
                <Button variant="secondary">Click</Button>
                {games.map((item) => (
                    <h1>{item.title}</h1>
                ))}
            </div>
        </>
    );
}

export default App;
