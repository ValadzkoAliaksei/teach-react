import { Lending } from '../lending';
import { Messages } from '../messages';
import { List } from '../list';
import { Table } from '../table';
import { Shop } from '../shop';
import { ErrorBoundary } from '../error-boundary';

import logo from './assets/logo.svg';

import './app.css';

export const App = (): JSX.Element => {
  const messagesVisible = false;
  const lendingVisible = false;
  const logoVisible = false;
  const listVisible = false;
  const tableVisible = false;
  const shopVisible = true;
  return (
    <>
      {lendingVisible && <Lending />}
      {messagesVisible && <Messages />}
      {logoVisible && <img src={logo} alt="лого" />}
      {listVisible && <List />}
      {tableVisible && <Table />}
      {shopVisible && (
        <ErrorBoundary>
          <Shop />
        </ErrorBoundary>
      )}
    </>
  );
};
