export default function TransactionHistoryItem ({type, amount, currency, id }) {
    return (
        <>
        <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
        </>
    )
}