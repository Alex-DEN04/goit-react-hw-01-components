import FriendListItem from "./FriendListItem"
export default function FriendList({items}) {
    return (
        <ul class="friend-list">
            {items.map(item => (
                <li class="item" key={item.id}>
                    <FriendListItem 
                        avatar={item.avatar}
                        name={item.name}
                        status={item.isOnline}
                    />
                </li>
            ))} 
        </ul>
    )

}