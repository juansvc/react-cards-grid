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
          id: 1,
          title: 'First card',
          description: 'This is the first card',
        },
        {
          id: 2,
          title: 'Second card',
          description: 'This is the second card',
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
