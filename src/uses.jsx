import { use } from "react"

export default function Users(fetchUsers){
    const users1 = use(fetchUsers.fetchUsers);
    console.log(users1)
    return(
        <div className="Users">
            <h3>Users:{Users.length}</h3>
        </div>
    )
}