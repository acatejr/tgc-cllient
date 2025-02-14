import { createSignal, createResource } from "solid-js"

const points = [
    {
        "id": 1,
        "event_id": 1,
        "player_id": 1,
        "points": 250
    },
    {
        "id": 2,
        "event_id": 1,
        "player_id": 2,
        "points": 50
    },
    {
        "id": 3,
        "event_id": 1,
        "player_id": 3,
        "points": 100
    },
    {
        "id": 4,
        "event_id": 2,
        "player_id": 1,
        "points": 10
    },
    {
        "id": 5,
        "event_id": 2,
        "player_id": 3,
        "points": 50
    },
    {
        "id": 6,
        "event_id": 2,
        "player_id": 5,
        "points": 25
    },
    {
        "id": 7,
        "event_id": 3,
        "player_id": 4,
        "points": 10
    }
]

const fetchPoints = async () => {
    // const response = await fetch("../../points.json")
    // const data = await response.json()
    const data = points
    let result: { player_id: number; total: number }[] = []

    data.reduce(function(res, value) {
        if (!res[value.player_id]) {
            res[value.player_id] = { player_id: value.player_id, total: 0 }
            result.push(res[value.player_id])
        }
        res[value.player_id].total += value.points
        return res
    }, {})

    return result
}
  
const Points = () => {
    const [points] = createResource(fetchPoints);
    
    return (
        <div class="container mx-auto p-4 font-sans">
            <h1 class="text-2xl font-bold mb-4">Member Points</h1>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                        <th class="py-2 px-4 border-b text-left">PlayerId</th>
                        <th class="py-2 px-4 border-b text-left">Total Points</th>
                        </tr>
                    </thead>
                    <tbody>
                    {points()?.map((point) => (
                        <tr key={point.id} class="hover:bg-gray-100">
                            <td class="py-2 px-4 border-b text-left">{point.player_id}</td>
                            <td class="py-2 px-4 border-b text-left">{point.total}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Points
