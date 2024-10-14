'use client';

import { PrintDocument } from 'akvo-react-document';

export default function Home() {
  return (
    <>
      <PrintDocument>
        <PrintDocument.Button>Print here</PrintDocument.Button>
        <PrintDocument.Area>
          <h1>Hello world</h1>
        </PrintDocument.Area>
      </PrintDocument>
    </>
  );
}
