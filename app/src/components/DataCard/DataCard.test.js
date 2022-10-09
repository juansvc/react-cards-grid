import { render, screen } from '@testing-library/react';
import { DataCard } from './DataCard';

describe('The DataCard component', () => {
  it('should display the titles of all of cards', async () => {
    render(<DataCard />);

    await screen.findByText(
      'Nerium: Reimagining the digital CX for Nerium International'
    );
    await screen.findByText(
      'Western Digital: The new Western Digital site quadruples conversions'
    );
  });
  it('should display the description of all of cards', async () => {
    render(<DataCard />);

    await screen.findByText('As Nerium Internation');
    await screen.findByText('As Western Digital');
  });
});
