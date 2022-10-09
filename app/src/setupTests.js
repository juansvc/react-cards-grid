import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://s3-us-west-1.amazonaws.com/hero-engineering-public/interview/fe-code-challenge.json',
    (request, response, context) => {
      return response(
        context.json([
          {
            id: 'Nerium',
            tags: ['CMS Selection', 'Experience Design'],
            image: 'http://herodigi....jpg',
            title:
              'Nerium: Reimagining the digital CX for Nerium International',
            description: 'As Nerium Internation',
            featured: 0,
          },
          {
            id: 'WesternDigital',
            tags: ['Digital Strategy', 'Analytics', 'Consulting'],
            image: 'http://herodigi....jpg',
            title:
              'Western Digital: The new Western Digital site quadruples conversions',
            description: 'As Western Digital',
            featured: 1,
          },
        ])
      );
    }
  )
);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});
