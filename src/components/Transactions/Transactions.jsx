import PropTypes from 'prop-types';

import css from './Transactions.module.css';

export default function TransactionsHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={css.tableList} key={item.id}>
            <td className={css.tableRow}>{item.type}</td>
            <td className={css.tableRow}>{item.amount}</td>
            <td className={css.tableRow}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
