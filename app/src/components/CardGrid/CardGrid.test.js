import { render, screen } from '@testing-library/react';
import { CardGrid } from './CardGrid';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

describe('The CardGrid component', () => {
  let server;
  afterEach(() => {
    server.close();
  });
  describe('if fetching cards is a success', () => {
    const cards = {
      cards: [
        {
          id: 'Nerium',
          title: 'Reimagining the digital CX for Nerium International',
          description:
            'As Nerium International repositioned its brand and elevated.',
          tags: ['CMS Selection', 'Experience Design'],
        },
        {
          id: 'WesternDigital',
          title: 'The new Western Digital site quadruples conversions',
          description:
            'As Western Digital was scaling back its investments in physical.',
          tags: ['Digital Strategy', 'Analytics', 'Consulting'],
        },
      ],
    };
    beforeEach(() => {
      server = setupServer(
        rest.get(
          'https://s3-us-west-1.amazonaws.com/hero-engineering-public/interview/fe-code-challenge.json',
          (_request, response, context) => {
            return response(context.json(cards));
          }
        )
      );
      server.listen();
    });
    it('should display the titles of all of the cards', async () => {
      render(<CardGrid />);

      for (const card of cards.cards) {
        await screen.findByText(card.title);
      }
    });
    it('should display the bodies of all of the cards', async () => {
      render(<CardGrid />);

      for (const card of cards.cards) {
        await screen.findByText(card.description);
      }
    });
  });
  describe('if fetching cards fails', () => {
    beforeEach(() => {
      server = setupServer(
        rest.get(
          'https://s3-us-west-1.amazonaws.com/hero-engineering-public/interview/fe-code-challenge.json',
          (_request, response, context) => {
            return response(
              context.status(500),
              context.json({
                errorMessage: 'Something went wrong',
              })
            );
          }
        )
      );
      server.listen();
    });
    it('should display an error message', async () => {
      render(<CardGrid />);
      await screen.findByText('Something went wrong');
    });
  });
});
