import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Avatar, UserName, Address, Item, Stats, Quantity } from './Profile.styled';
export default function Profile({ avatar, userName, tag, location, stats }) {
  return (
    <Box
      bg="muted"
      width={240}
      height="auto"
      ml="auto"
      mr="auto"
      mt={[6]}
      display="flex"
      flexDirection="column"
      position="relative"
      borderRadius={[4]}
      boxShadow="2px 2px 2px 2px #bdb9b9"
      as="section"
      >
        <Box 
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={[5]}
          as="div"
          
        >
          <Avatar
            src={avatar}
            alt="User avatar"
          />
          <UserName>{userName}</UserName>
          <Address>@{tag}</Address>
          <Address>{location}</Address>
        </Box>

        <Box 
          display="flex"
          p={[0]}
          m={[0]}
          as="ul">
          <Item>
            <Stats>Followers</Stats>
            <Quantity>{stats.followers}</Quantity>
          </Item>
          <Item>
            <Stats>Views</Stats>
            <Quantity>{stats.views}</Quantity>
          </Item>
          <Item>
            <Stats>Likes</Stats>
            <Quantity>{stats.likes}</Quantity>
          </Item>
        </Box>
      </Box>
    )
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
}