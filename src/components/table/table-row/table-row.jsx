import PropTypes from 'prop-types';

export const TableRow = ({ dataRow, th }) => (
  <tr>
    {dataRow.map((item, index) =>
      th ? <th key={index.toString()}>{item}</th> : <td key={index.toString()}>{item}</td>,
    )}
  </tr>
);

TableRow.propTypes = {
  dataRow: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  th: PropTypes.bool,
};

TableRow.defaultProps = {
  th: false,
};
