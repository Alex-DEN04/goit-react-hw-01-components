export default function FriendListItem({ isOnline, avatar, name}) {
    return (
        <>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </>  
    )
}