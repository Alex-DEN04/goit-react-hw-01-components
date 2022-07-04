import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Item, Title, Percentage, Label } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Box ml="auto" mr="auto" mt={[6]} width="500px" bg="muted" as="section">
      {title && <Title>{title}</Title>}
      <Box display="flex" alignItems="center" justifyContent="center">
        {stats.map(item => (
          <Item key={item.id} bgColor={item.id}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </Box>
    </Box>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
