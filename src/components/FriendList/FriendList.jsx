import { Box } from "components/Box"
import FriendListItem from "./FriendListItem"
export default function FriendList({items}) {
    return (
        <Box
            as="ul"
        >
            {items.map(item => (
                
                <FriendListItem 
                    key={item.id}
                    avatar={item.avatar}
                    name={item.name}
                    isOnline={item.isOnline}
                />
            ))} 
        </Box>
    )

}