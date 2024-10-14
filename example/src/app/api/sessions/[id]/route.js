export function GET(_, { params }) {
  const decisions = [
    {
      id: 1,
      name: 'How to build a landing page with NextJS',
      notes: null,
      agree: true,
      scores: [
        {
          id: 1,
          organization_id: 1,
          score: 1,
          desired: null,
        },
        {
          id: 2,
          organization_id: 2,
          score: 1,
          desired: null,
        },
        {
          id: 3,
          organization_id: 3,
          score: 2,
          desired: null,
        },
        {
          id: 4,
          organization_id: 4,
          score: 4,
          desired: null,
        },
      ],
    },
    {
      id: 2,
      name: 'Generate pdf with reportlab in django',
      notes: 'Please do bla bla and bla',
      agree: false,
      scores: [
        {
          id: 5,
          organization_id: 1,
          score: 4,
          desired: false,
        },
        {
          id: 6,
          organization_id: 2,
          score: 4,
          desired: false,
        },
        {
          id: 7,
          organization_id: 3,
          score: 4,
          desired: false,
        },
        {
          id: 8,
          organization_id: 4,
          score: 4,
          desired: false,
        },
        {
          id: 13,
          organization_id: 1,
          score: 0,
          desired: true,
        },
        {
          id: 14,
          organization_id: 2,
          score: 2,
          desired: true,
        },
        {
          id: 15,
          organization_id: 3,
          score: 3,
          desired: true,
        },
        {
          id: 16,
          organization_id: 4,
          score: 4,
          desired: true,
        },
      ],
    },
    {
      id: 5,
      name: 'Hello world new',
      notes: 'Do this and do that wew 12344',
      agree: false,
      scores: [
        {
          id: 17,
          organization_id: 1,
          score: 2,
          desired: false,
        },
        {
          id: 18,
          organization_id: 2,
          score: 2,
          desired: false,
        },
        {
          id: 19,
          organization_id: 3,
          score: 3,
          desired: false,
        },
        {
          id: 20,
          organization_id: 4,
          score: 3,
          desired: false,
        },
        {
          id: 21,
          organization_id: 1,
          score: 3,
          desired: true,
        },
        {
          id: 22,
          organization_id: 2,
          score: 1,
          desired: true,
        },
        {
          id: 23,
          organization_id: 3,
          score: 1,
          desired: true,
        },
        {
          id: 24,
          organization_id: 4,
          score: 4,
          desired: true,
        },
      ],
    },
  ];
  const participants = [
    {
      id: 1,
      full_name: 'Participant 1',
      email: 'participant1@example.com',
      role: 'Project manager',
      organization_name: 'Organization #1',
    },
    {
      id: 2,
      full_name: 'Participant 2',
      email: 'participant2@example.com',
      role: 'Software Engineer',
      organization_name: 'Organization #2',
    },
    {
      id: 3,
      full_name: 'Participant 3',
      email: 'participant3@example.com',
      role: 'MnE',
      organization_name: 'Organization #3',
    },
  ];
  const session = {
    id: params?.id || 1,
    session_name: 'Lorem ipsum session',
    facilitator: {
      id: 4,
      full_name: 'Faciliator User',
    },
    countries: ['KE', 'NL', 'ID'],
    sector: 'Policy coherence',
    other_sector: null,
    date: '23-09-2024',
    context:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis dignissim elit. Ut laoreet mattis purus, quis mattis sapien placerat id. Morbi elementum tellus nisi, a posuere lorem tempor non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis dignissim elit. Ut laoreet mattis purus, quis mattis sapien placerat id. Morbi elementum tellus nisi, a posuere lorem tempor non.',
    organizations: [
      {
        id: 1,
        name: 'Organization #1',
        acronym: 'ORG ONE',
      },
      {
        id: 2,
        name: 'Organization #2',
        acronym: 'ORG TWO',
      },
      {
        id: 3,
        name: 'Organization #3',
        acronym: 'ORG THREE',
      },
    ],
    join_code: 'curtain-tree-snow-barn-7191',
    is_published: true,
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    summary:
      'Consequat cras suscipit mi vitae at non egestas phasellus. Venenatis nascetur ad fames ridiculus dictumst vulputate fusce. Mus varius feugiat condimentum accumsan leo molestie parturient ridiculus. Iaculis mollis sapien, curae dapibus inceptos volutpat nullam. Himenaeos feugiat mi quam dolor magna ultrices nunc\n\n12345',
    created_at: '2024-09-20T03:39:23+0000',
    updated_at: null,
    closed_at: '2024-10-10T04:55:02+0000',
    is_owner: true,
  };
  return Response.json({ session, decisions, participants });
}
