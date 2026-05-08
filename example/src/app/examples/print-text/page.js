'use client';

import React from 'react';
import { PrintDocument } from 'akvo-react-document';

const ExamplePrintText = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Use Case 1: Print Full Text
          </h2>
          <p className="bg-white p-4 shadow rounded">
            This is an example of a full text that can be printed using Akvo
            React Document. The text can include styled components, headers,
            paragraphs, and more. When you click the button, it will generate a
            printable version of this content.
          </p>
          <PrintDocument>
            <PrintDocument.Button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Print Full Text
            </PrintDocument.Button>
            <PrintDocument.Area>
              <div>
                <p>
                  This is an example of a full text that can be printed using
                  Akvo React Document. The text can include styled components,
                  headers, paragraphs, and more. When you click the button, it
                  will generate a printable version of this content.
                </p>
              </div>
            </PrintDocument.Area>
          </PrintDocument>
        </div>
      </div>
    </section>
  );
};

export default ExamplePrintText;
