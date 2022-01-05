export const TableRow = ({ dataRow, th }) => (
  <tr>
    {dataRow.map((item, index) => {
      return th ? (
        <th key={index.toString()}>{item}</th>
      ) : (
        <td key={index.toString()}>{item}</td>
      );
    })}
  </tr>
);
