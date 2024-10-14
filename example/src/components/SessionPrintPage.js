'use client';

import moment from 'moment';
import React from 'react';
import { PrintTable } from 'akvo-react-document';

const style = {
  container: {
    fontFamily: 'Arial, sans-serif',
    background: '#fff',
    color: '#000',
  },
};

const SessionPrintPage = ({
  patSession,
  participants = [],
  decisions = [],
}) => {
  return (
    <div style={style.container}>
      <img
        src="/images/example-print-async.png"
        alt="Cover image"
        width="80%"
      />
      <h1>{patSession?.session_name || 'Untitled'}</h1>
      <h2>Report of the Power Awareness Session</h2>
      <div>
        <p>The session started on: {patSession?.date}</p>
        <p>
          The session ended on:{' '}
          {moment(patSession?.closed_at, 'YYYY-MM-DD').format('DD-MM-YYYY')}
        </p>
        <span>
          <strong>Facilitator:</strong>
          <span>{` ${patSession?.facilitator?.full_name}`}</span>
        </span>
      </div>
      <div style={{ breakAfter: 'page' }}></div>
      <h3>PAT session details</h3>
      <p>Participants:</p>
      <PrintTable>
        <thead>
          <tr>
            <PrintTable.TH>Name</PrintTable.TH>
            <PrintTable.TH>Position</PrintTable.TH>
            <PrintTable.TH>Email address</PrintTable.TH>
            <PrintTable.TH>Partner organization (PO)</PrintTable.TH>
            <PrintTable.TH>Acronym (PO)</PrintTable.TH>
          </tr>
        </thead>
        <tbody>
          {participants?.map((p) => {
            return (
              <tr key={p?.id}>
                <PrintTable.TD>{p?.full_name}</PrintTable.TD>
                <PrintTable.TD>{p?.role}</PrintTable.TD>
                <PrintTable.TD>{p?.email}</PrintTable.TD>
                <PrintTable.TD>{p?.organization_name}</PrintTable.TD>
                <PrintTable.TD>{p?.organization_acronym}</PrintTable.TD>
              </tr>
            );
          })}
        </tbody>
      </PrintTable>
      <p>PAT session context</p>
      <div>{patSession?.context}</div>
      <div style={{ breakAfter: 'page' }}></div>
      <h3>PAT session content</h3>
      <p>
        List of important (types of) decisions that were reflected on in this
        PAT session.
      </p>
      <ul>
        {decisions?.map((d) => {
          return <li key={d?.id}>{d?.name}</li>;
        })}
      </ul>
      <p>
        {`On the following decisions there was agreement on the way partner organizations (PO) are/have been involved in the decision-making process.`}
      </p>
      <PrintTable>
        <thead>
          <tr>
            <PrintTable.TH>(Types of) Decisions</PrintTable.TH>
            {patSession?.organizations?.map((o) => {
              return <PrintTable.TH key={o?.id}>{o?.acronym}</PrintTable.TH>;
            })}
          </tr>
        </thead>
        <tbody>
          {decisions
            ?.filter((d) => d?.agree)
            ?.map((d) => {
              return (
                <tr key={d?.id}>
                  <PrintTable.TD>{d?.name}</PrintTable.TD>
                  {patSession?.organizations?.map((o) => {
                    const actualValue = d?.scores?.find(
                      (s) => s?.organization_id === o?.id
                    );
                    return (
                      <PrintTable.TD key={`${d?.id}-${o?.id}`}>
                        {actualValue?.score || ''}
                      </PrintTable.TD>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </PrintTable>
      <p>
        {`On the following decisions there was no agreement on the way partner organizations PO) are/have been involved in the decision-making process.`}
      </p>
      <PrintTable>
        <thead>
          <tr>
            <PrintTable.TH>(Types of) Decisions</PrintTable.TH>
            {patSession?.organizations?.map((o) => {
              return <PrintTable.TH key={o?.id}>{o?.acronym}</PrintTable.TH>;
            })}
          </tr>
        </thead>
        <tbody>
          {decisions
            ?.filter((d) => !d?.agree)
            ?.map((d) => {
              return (
                <tr key={d?.id}>
                  <PrintTable.TD>{d?.name}</PrintTable.TD>
                  {patSession?.organizations?.map((o) => {
                    const actualValue = d?.scores?.find(
                      (s) =>
                        s?.organization_id === o?.id && s?.desired === false
                    );
                    return (
                      <PrintTable.TD key={`${d?.id}-${o?.id}`}>
                        {actualValue?.score || ''}
                      </PrintTable.TD>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </PrintTable>
      <p>
        {`After discussion, participants agreed that in these decisions partner organisations need to be involved in a different way. The desired level of participation for partner organisations is indicated in the table below:`}
      </p>
      <PrintTable>
        <thead>
          <tr>
            <PrintTable.TH>(Types of) Decisions</PrintTable.TH>
            {patSession?.organizations?.map((o) => {
              return <PrintTable.TH key={o?.id}>{o?.acronym}</PrintTable.TH>;
            })}
          </tr>
        </thead>
        <tbody>
          {decisions?.map((d) => {
            return (
              <tr key={d?.id}>
                <PrintTable.TD>{d?.name}</PrintTable.TD>
                {patSession?.organizations?.map((o) => {
                  const actualValue = d?.scores?.find(
                    (s) =>
                      s?.organization_id === o?.id &&
                      (s?.desired === true || s?.desired === null)
                  );
                  return (
                    <PrintTable.TD key={`${d?.id}-${o?.id}`}>
                      {actualValue?.score || ''}
                    </PrintTable.TD>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </PrintTable>
      <p>
        {`In order to achieve the desired level of participation of all partner organisations, the participants agree that the following needs to be done:`}
      </p>
      <PrintTable>
        <thead>
          <tr>
            <PrintTable.TH>(Types of) Decisions</PrintTable.TH>
            <PrintTable.TH>{`Action to be taken in order to achieve that partner organization can participate as desired.`}</PrintTable.TH>
          </tr>
        </thead>
        <tbody>
          {decisions
            ?.filter((d) => d?.notes)
            ?.map((d) => {
              return (
                <tr key={d?.id}>
                  <PrintTable.TD>{d?.name}</PrintTable.TD>
                  <PrintTable.TD>{d?.notes}</PrintTable.TD>
                </tr>
              );
            })}
        </tbody>
      </PrintTable>
      {patSession?.summary?.length > 0 && (
        <div>
          <p>Concluding remarks</p>
          <div>{patSession.summary}</div>
        </div>
      )}
    </div>
  );
};

export default SessionPrintPage;
