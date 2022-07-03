import { Box } from "components/Box"
import TransactionHistoryItem from "./TransactionHistoryItem"
export default function TransactionHistory({ items }) {
    return (
        <Box
            as="table"
            width={[1]}
        >
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            
            {items.map(item => (
            <tbody key={item.id}>
                <TransactionHistoryItem
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                
                />
            </tbody>
            ))}
            
        </Box>
    )
    
}