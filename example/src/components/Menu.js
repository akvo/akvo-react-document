import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li className="mb-4">
          <Link
            href="/examples/print-text"
            className="hover:underline"
          >
            Print Full Text
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/examples/print-table"
            className="hover:underline"
          >
            Print Table
          </Link>
        </li>
        <li className="mb-4">
          <Link
            href="/examples/print-async"
            className="hover:underline"
          >
            Print Async Data
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
