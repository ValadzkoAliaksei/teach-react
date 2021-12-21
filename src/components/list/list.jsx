import { usersMessages } from "../../constants/users-messages";

export const List = () => (
  <ol>
    {usersMessages.map((usersMessage) => (
      <li key={usersMessage.id}>
        <ul>
          <li>{usersMessage.id}</li>
          <li>{usersMessage.userId}</li>
          <li>{usersMessage.title}</li>
          <li>{usersMessage.body}</li>
        </ul>
      </li>
    ))}
  </ol>
);
