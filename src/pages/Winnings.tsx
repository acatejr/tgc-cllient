import { createSignal, createResource } from "solid-js"

const winnings = [
    {
        "id": 1,
        "date": "2021-01-01",
        "event_name": "TGC 2021 Winter Classic",
        "player_id": 1,
        "amount": 1000
    },
    {
        "id": 2,
        "date": "2021-01-01",
        "event_name": "TGC 2021 Winter Classic",
        "player_id": 3,
        "amount": 500
    },
    {
        "id": 3,
        "date": "2021-01-01",
        "event_name": "TGC 2021 Winter Classic",
        "player_id": 2,
        "amount": 250
    },
    {
        "id": 4,
        "date": "2021-01-08",
        "event_name": "A Fun Tourney",
        "player_id": 1,
        "amount": 10
    },
    {
        "id": 5,
        "date": "2021-01-08",
        "event_name": "A Fun Tourney",
        "player_id": 3,
        "amount": 50
    },
    {
        "id": 6,
        "date": "2021-01-08",
        "event_name": "A Fun Tourney",
        "player_id": 5,
        "amount": 25
    },
    {
        "id": 7,
        "date": "2021-02-28",
        "event_name": "A Late Winter Tourney",
        "player_id": 4,
        "amount": 50.80
    }
]

const fetchWinnings = async () => {

    // const response = await fetch("../../winnings.json")
    // const data = await response.json()

    const data = winnings
    
    let result: { player_id: number; total: number }[] = []


    data.reduce(function(res, value) {
        if (!res[value.player_id]) {
            res[value.player_id] = { player_id: value.player_id, total: 0 };
            result.push(res[value.player_id])
        }
        res[value.player_id].total += value.amount
        return res;
    }, {})

    return result
}

const Winnings = () => {
    const [winnings] = createResource(fetchWinnings)

    return (
        <div class="container mx-auto p-4 font-sans">
            <h1 class="text-2xl font-bold mb-4">Member Winnings</h1>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                        <th class="py-2 px-4 border-b text-left">PlayerId</th>
                        <th class="py-2 px-4 border-b text-left">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {winnings()?.map((winning) => (
                        <tr key={winning.id} class="hover:bg-gray-100">
                            <td class="py-2 px-4 border-b text-left">{winning.player_id}</td>
                            <td class="py-2 px-4 border-b text-left">${winning.total.toFixed(2)}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Winnings