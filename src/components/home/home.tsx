import { Link } from 'react-router-dom';

import './home.css';

export const Home = (): JSX.Element => (
  <div className="home-page">
    <Link to="./">Home</Link>
    <Link to="./shop">Shop</Link>
    <Link to="./lending">Lending</Link>
    <Link to="./messages">Messages</Link>
    <Link to="./logo">Logo</Link>
    <Link to="./list">List</Link>
    <Link to="./table">Table</Link>
  </div>
);
