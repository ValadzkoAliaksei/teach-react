import { usersMessages } from "../../constants/users-messages";

export const List = () => (
  <ol>
    {usersMessages.map(({ id, userId, title, body }) => (
      <li key={id}>
        <ul>
          <li>{id}</li>
          <li>{userId}</li>
          <li>{title}</li>
          <li>{body}</li>
        </ul>
      </li>
    ))}
  </ol>
);
