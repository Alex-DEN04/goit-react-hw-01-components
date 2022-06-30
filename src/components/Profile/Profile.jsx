import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Avatar } from './Profile.styled';
export default function Profile({ avatar, userName, tag, location, stats }) {
  return (
    <Box
      bg="primary"
      width={[1 / 2]}
      height="auto"
      ml="auto"
      mr="auto"
      mt={[6]}
      display="flex"
      flexDirection="column"
      // align-items="center"
      // justify-content="center"
      position="relative"
      as="section"
      >
        <Box
        
        >
          <Avatar
            src={avatar}
            alt="User avatar"
            class="avatar"
          />
          <p class="name">{userName}</p>
          <p class="tag">@{tag}</p>
          <p class="location">{location}</p>
        </Box>

        <ul class="stats">
          <li>
            <span class="label">Followers</span>
            <span class="quantity">{stats.followers}</span>
          </li>
          <li>
            <span class="label">Views</span>
            <span class="quantity">{stats.views}</span>
          </li>
          <li>
            <span class="label">Likes</span>
            <span class="quantity">{stats.likes}</span>
          </li>
        </ul>
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