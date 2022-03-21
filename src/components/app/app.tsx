import { Route, Routes } from 'react-router-dom';

import { Home } from '../home';
import { Lending } from '../lending';
import { Messages } from '../messages';
import { List } from '../list';
import { Table } from '../table';
import { Shop } from '../shop';
import { ErrorBoundary } from '../error-boundary';

import logo from './assets/logo.svg';

import './app.css';

export const App = (): JSX.Element => (
  <ErrorBoundary>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="lending" element={<Lending />} />
      <Route path="messages" element={<Messages />} />
      <Route path="logo" element={<img src={logo} alt="лого" />} />
      <Route path="list" element={<List />} />
      <Route path="table" element={<Table />} />
      <Route path="shop" element={<Shop />} />
    </Routes>
  </ErrorBoundary>
);
