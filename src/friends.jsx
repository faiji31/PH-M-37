import { use } from "react"

export default function Friends(fetchFriends){
    const friends = use(fetchFriends.fetchFriends);
    console.log(friends)
    return(
        <div className="Users">
            <h3>Friends: {friends.length}</h3>
        </div>
    )
}