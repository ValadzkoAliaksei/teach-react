import { Lending } from "../lending";
import { Messages } from "../messages";
import { List } from "../list";
import { Table } from "../table";

import logo from "./assets/logo.svg";

import "./app.css";

export const App = () => {
  const messagesVisible = false;
  const lendingVisible = false;
  const logoVisible = false;
  const listVisible = false;
  return (
    <>
      {lendingVisible && <Lending />}
      {messagesVisible && <Messages />}
      {logoVisible && <img src={logo} alt="лого" />}
      {listVisible ? <List /> : <Table />}
    </>
  );
};
