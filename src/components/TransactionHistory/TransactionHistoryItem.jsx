import PropTypes from 'prop-types';
import { Item, Type, Amount, Currency } from './TransactionHistoryItem.styled';

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <Item>
      <Type>{type}</Type>
      <Amount>{amount}</Amount>
      <Currency>{currency}</Currency>
    </Item>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
