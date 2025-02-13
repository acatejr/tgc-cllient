import { createResource } from "solid-js";

const fetchMembers = async () => {
  const response = await fetch("/members.json");
  return response.json();
};

const Members = () => {
  const [members] = createResource(fetchMembers)

  return (
    <div class="container mx-auto p-4 font-sans">
      <h1 class="text-2xl font-bold mb-4">Members</h1>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b text-left">ID</th>
              <th class="py-2 px-4 border-b text-left">First Name</th>
              <th class="py-2 px-4 border-b text-left">Last Name</th>
              <th class="py-2 px-4 border-b text-left">Email</th>
              <th class="py-2 px-4 border-b text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            {members()?.map((member) => (
              <tr key={member.id} class="hover:bg-gray-100">
                <td class="py-2 px-4 border-b text-left">{member.id}</td>
                <td class="py-2 px-4 border-b text-left">{member.first_name}</td>
                <td class="py-2 px-4 border-b text-left">{member.last_name}</td>
                <td class="py-2 px-4 border-b text-left">{member.email}</td>
                <td class="py-2 px-4 border-b text-left">{member.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;