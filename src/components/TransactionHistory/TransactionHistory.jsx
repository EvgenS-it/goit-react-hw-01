import css from './TransactionHistory.module.css';

import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  const { table, tableRow, tableTitle, tableCell } = css;
  return (
    <table className={table}>
      <thead>
        <tr className={tableRow}>
          <th className={tableTitle}>Type</th>
          <th className={tableTitle}>Amount</th>
          <th className={tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id} className={tableRow}>
              <td className={tableCell}>{item.type}</td>
              <td className={tableCell}>{item.amount}</td>
              <td className={tableCell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
