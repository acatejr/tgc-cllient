
import { createSignal, createResource } from "solid-js";

const fetchWinnings = async () => {
  const response = await fetch("../../winnings.json");
  return response.json();
};

const Winnings = () => {
    const [winnings] = createResource(fetchWinnings);

    return (
        <div class="container mx-auto p-4 font-sans">
            <h1 class="text-2xl font-bold mb-4">Members</h1>
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                        <th class="py-2 px-4 border-b text-left">ID</th>
                        <th class="py-2 px-4 border-b text-left">Date</th>
                        <th class="py-2 px-4 border-b text-left">Event Name</th>
                        <th class="py-2 px-4 border-b text-left">Name</th>
                        <th class="py-2 px-4 border-b text-left">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {winnings()?.map((winning) => (
                        <tr key={winning.id} class="hover:bg-gray-100">
                            <td class="py-2 px-4 border-b text-left">{winning.id}</td>
                            <td class="py-2 px-4 border-b text-left">{winning.date}</td>
                            <td class="py-2 px-4 border-b text-left">{winning.event_name}</td>
                            <td class="py-2 px-4 border-b text-left">{winning.name}</td>
                            <td class="py-2 px-4 border-b text-left">{winning.amount}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Winnings