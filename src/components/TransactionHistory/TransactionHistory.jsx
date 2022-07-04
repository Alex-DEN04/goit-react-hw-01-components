// import { Box } from "components/Box"
import TransactionHistoryItem from './TransactionHistoryItem';
import { Header, Table, Title, TableBody } from './TransactionHistory.styled';
export default function TransactionHistory({ items }) {
  return (
    <Table>
      <Header>
        <tr>
          <Title>Type</Title>
          <Title>Amount</Title>
          <Title>Currency</Title>
        </tr>
      </Header>

      {items.map(item => (
        <TableBody key={item.id}>
          <TransactionHistoryItem
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </TableBody>
      ))}
    </Table>
  );
}
