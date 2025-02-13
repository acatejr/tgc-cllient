import { createResource } from "solid-js"

const fetchMembers = async () => {
  const members =
  [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890"
    },
    {
      "id": 2,
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "jane.smith@example.com",
      "phone": "234-567-8901"
    },
    {
      "id": 3,
      "first_name": "Alice",
      "last_name": "Johnson",
      "email": "alice.johnson@example.com",
      "phone": "345-678-9012"
    },
    {
      "id": 4,
      "first_name": "Bob",
      "last_name": "Brown",
      "email": "bob.brown@example.com",
      "phone": "456-789-0123"
    },
    {
      "id": 5,
      "first_name": "Mike",
      "last_name": "Smith",
      "email": "mike.smith@example.com",
      "phone": "567-890-1234"
    }
  ]
  return members
  // const response = await fetch("../../members.json")
  // return response.json()
}

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