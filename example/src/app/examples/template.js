import { Menu } from '@/components';
import React from 'react';

const ExamplesTemplate = ({ children }) => {
  return (
    <div className="max-w-8xl flex min-h-screen">
      {/* <!-- Aside Menu --> */}
      <aside className="bg-gray-800 text-white w-64 p-6">
        <h2 className="text-2xl font-bold mb-6">Examples</h2>
        <Menu />
      </aside>

      {/* <!-- Main Content --> */}
      <main className="flex-1 p-12">{children}</main>
    </div>
  );
};

export default ExamplesTemplate;
