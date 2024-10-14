'use client';

import React from 'react';
import { PrintDocument, PrintTable } from 'akvo-react-document';

const ExamplePrintText = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Use Case 2: Print Table
          </h2>
          <table className="min-w-full bg-white shadow rounded mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Age</th>
                <th className="py-2 px-4">Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">John Doe</td>
                <td className="py-2 px-4">28</td>
                <td className="py-2 px-4">New York</td>
              </tr>
              <tr>
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">Jane Smith</td>
                <td className="py-2 px-4">34</td>
                <td className="py-2 px-4">Los Angeles</td>
              </tr>
              <tr>
                <td className="py-2 px-4">3</td>
                <td className="py-2 px-4">Sam Johnson</td>
                <td className="py-2 px-4">45</td>
                <td className="py-2 px-4">Chicago</td>
              </tr>
            </tbody>
          </table>
          <PrintDocument>
            <PrintDocument.Button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Print Table
            </PrintDocument.Button>
            <PrintDocument.Area>
              <PrintTable>
                <thead>
                  <tr>
                    <PrintTable.TH>ID</PrintTable.TH>
                    <PrintTable.TH>Name</PrintTable.TH>
                    <PrintTable.TH>Age</PrintTable.TH>
                    <PrintTable.TH>Location</PrintTable.TH>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <PrintTable.TD>1</PrintTable.TD>
                    <PrintTable.TD>John Doe</PrintTable.TD>
                    <PrintTable.TD>28</PrintTable.TD>
                    <PrintTable.TD>New York</PrintTable.TD>
                  </tr>
                  <tr>
                    <PrintTable.TD>2</PrintTable.TD>
                    <PrintTable.TD>Jane SmiPrintTable.TH</PrintTable.TD>
                    <PrintTable.TD>34</PrintTable.TD>
                    <PrintTable.TD>Los Angeles</PrintTable.TD>
                  </tr>
                  <tr>
                    <PrintTable.TD>3</PrintTable.TD>
                    <PrintTable.TD>Sam Johnson</PrintTable.TD>
                    <PrintTable.TD>45</PrintTable.TD>
                    <PrintTable.TD>Chicago</PrintTable.TD>
                  </tr>
                </tbody>
              </PrintTable>
            </PrintDocument.Area>
          </PrintDocument>
        </div>
      </div>
    </section>
  );
};

export default ExamplePrintText;
