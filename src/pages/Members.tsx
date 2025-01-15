import { createSignal } from "solid-js";

function Members() {
    const [members, setMembers] = createSignal([])

    return (
        <div>
            <p>Members</p>
        </div>
    )
}

export default Members