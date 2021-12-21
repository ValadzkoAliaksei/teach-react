import { TableRow } from "./table-row";

import { usersMessages } from "../../constants/users-messages";

export const Table = () => (
  <table>
    <thead>
      <TableRow dataRow={Object.keys(usersMessages[0])} th />
    </thead>
    <tbody>
      {usersMessages.map((usersMessage) => (
        <TableRow dataRow={Object.values(usersMessage)} key={usersMessage.id} />
      ))}
    </tbody>
  </table>
);
