import { use } from "react"
import Friend from "./friend";

export default function Friends(fetchFriends){
    const friends = use(fetchFriends.fetchFriends);
    console.log(friends)
    return(
        <div className="Users">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(Friend=><Friend Friend ={Friend}></Friend>)
            }
        </div>
    )
}