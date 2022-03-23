import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <NavLink exact to = '/books'>
        <h3>Check out these Books!</h3>
      </NavLink>
    </div>
  );
}