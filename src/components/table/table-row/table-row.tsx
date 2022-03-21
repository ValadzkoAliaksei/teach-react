type TableRowPropType = {
  dataRow: Array<string | number>;
  th?: boolean;
};

export const TableRow = ({ dataRow, th }: TableRowPropType): JSX.Element => (
  <tr>
    {dataRow.map((item, index) =>
      th ? <th key={index.toString()}>{item}</th> : <td key={index.toString()}>{item}</td>,
    )}
  </tr>
);

TableRow.defaultProps = {
  th: false,
};
