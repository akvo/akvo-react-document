'use client';

import React, { useState } from 'react';
import { PrintDocument } from 'akvo-react-document';
import { SessionPrintPage } from '@/components';

const ExamplePrintAsync = () => {
  const [loading, setLoading] = useState(false);
  const [patSession, setPatSession] = useState(null);

  const onPrintApi = async (onPrint) => {
    setLoading(true);
    try {
      const sessionID = 1;
      const res = await fetch(`/api/sessions/${sessionID}`);
      const { session, decisions, participants } = await res.json();
      setPatSession({
        patSession: session,
        participants,
        decisions,
      });
      onPrint();
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Use Case 3: Print Async Data
          </h2>
          <p className="bg-white p-4 shadow rounded mb-4">
            This section represents data fetched asynchronously (e.g., from an
            API). Once the data is loaded, it can be printed using Akvo React
            Document. The button below demonstrates printing the fetched data.
          </p>
          <PrintDocument>
            <PrintDocument.Button
              loading={loading}
              onClick={onPrintApi}
            >
              Print Async Data
            </PrintDocument.Button>
            <PrintDocument.Area>
              <SessionPrintPage {...patSession} />
            </PrintDocument.Area>
          </PrintDocument>
        </div>

        <h3 className="text-xl font-semibold mb-4">Example Codes</h3>
        <pre className="font-mono text-xs py-3 border-y border-y-grey-100">
          {`
const onPrintApi = async (onPrint) => {
  setLoading(true);
  try {
    const res = await fetch('/api/sessions/1');
    const { session } = await res.json();
    setPatSession(session);
    onPrint();
    setLoading(false);
  } catch (err) {
    console.error(err);
    setLoading(false);
  }
};
          `}
        </pre>
      </div>
    </section>
  );
};

export default ExamplePrintAsync;
