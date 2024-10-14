'use client';

import { Menu } from '@/components';

export default function Home() {
  return (
    <div className="max-w-8xl flex min-h-screen">
      {/* <!-- Aside Menu --> */}
      <aside className="bg-gray-800 text-white w-64 p-6">
        <h2 className="text-2xl font-bold mb-6">Examples</h2>
        <Menu />
      </aside>

      {/* <!-- Main Content --> */}
      <main className="flex-1 p-12">
        <div className="max-w-7xl mx-auto">
          {/* <!-- Jumbotron --> */}
          <section className="bg-blue-500 text-white py-12 mb-8">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold">Akvo React Document</h1>
              <p className="mt-4 text-lg max-w-2xl mx-auto">
                Akvo React Document is an npm library designed for React
                applications, enabling developers to easily generate PDF
                documents or print content directly from React components. The
                library offers a simple and flexible API to convert dynamic,
                styled components into high-quality PDFs or trigger the
                browser's print functionality, streamlining the process of
                creating downloadable or printable reports, invoices, or any
                other document-based output in React apps.
              </p>
            </div>
          </section>

          {/* <!-- Introduction --> */}
          <section className="bg-white p-6 shadow-md rounded">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to Akvo React Document
            </h2>
            <p className="mb-4">
              Explore the different examples using the menu on the left. Each
              page demonstrates how Akvo React Document can be used to print
              different kinds of content, such as full text, tables, or
              asynchronously loaded data.
            </p>
            <p>
              Use the navigation to check out the examples and see how this
              library can streamline printing or generating PDFs from React
              components.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
