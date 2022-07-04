import PropTypes from 'prop-types';
import { Status, Avatar, FriendName, Card } from './FriendListItem.styled';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <Card>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Card>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
