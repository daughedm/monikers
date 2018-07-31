/* eslint-disable max-len */

import { numCards, activeCards, discardedCards } from './cardReducer.js';

describe('Card Reducers', () => {
  describe('numCards', () => {
    it('should return default state when no action passed', () => {
      expect(numCards(-1, {})).toEqual(-1);
    });

    it('should return the number of desired cards', () => {
      const expected = 45;

      const mockAction = {
        type: 'NUM_OF_CARDS',
        number: 45
      };

      expect(numCards(-1, mockAction)).toEqual(expected);
    });
  });

  describe('activeCards', () => {
    it('should return default state when no action passed', () => {
      expect(activeCards([], {})).toEqual([]);
    });

    it('should return an array of the active cards', () => {
      const expected = [
        {
          name: 'Doge',
          description:
            'An Internet meme that shows a Shiba Inu surrounded by colorful Comic Sans text that describes its inner monologue, such as "Wow," "Concern," and "so scare." There is much confuse over the name\'s pronunciation, yet it was recently used to brand a Bitcoin competitor.',
          category: 'CELEBRITY',
          pointValue: 3
        },
        {
          name: 'Blacula',
          description:
            'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
          category: 'FICTIONAL CHARACTER',
          pointValue: 4
        }
      ];

      const mockAction = {
        type: 'ADD_CARD',
        card: {
          name: 'Blacula',
          description:
            'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
          category: 'FICTIONAL CHARACTER',
          pointValue: 4
        }
      };

      expect(
        activeCards(
          [
            {
              name: 'Doge',
              description:
                // eslint-disable-next-line
                'An Internet meme that shows a Shiba Inu surrounded by colorful Comic Sans text that describes its inner monologue, such as "Wow," "Concern," and "so scare." There is much confuse over the name\'s pronunciation, yet it was recently used to brand a Bitcoin competitor.',
              category: 'CELEBRITY',
              pointValue: 3
            }
          ],
          mockAction
        )
      ).toEqual(expected);
    });

    it('should return an updated active cards array', () => {
      const expected = [
        {
          name: 'Doge',
          description:
            'An Internet meme that shows a Shiba Inu surrounded by colorful Comic Sans text that describes its inner monologue, such as "Wow," "Concern," and "so scare." There is much confuse over the name\'s pronunciation, yet it was recently used to brand a Bitcoin competitor.',
          category: 'CELEBRITY',
          pointValue: 3
        },
        {
          name: 'Blacula',
          description:
            'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
          category: 'FICTIONAL CHARACTER',
          pointValue: 4
        }
      ];

      const mockAction = {
        type: 'UPDATE_ACTIVE_CARDS',
        cards: [
          {
            name: 'Doge',
            description:
              'An Internet meme that shows a Shiba Inu surrounded by colorful Comic Sans text that describes its inner monologue, such as "Wow," "Concern," and "so scare." There is much confuse over the name\'s pronunciation, yet it was recently used to brand a Bitcoin competitor.',
            category: 'CELEBRITY',
            pointValue: 3
          },
          {
            name: 'Blacula',
            description:
              'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
            category: 'FICTIONAL CHARACTER',
            pointValue: 4
          }
        ]
      };

      expect(
        activeCards(
          [
            {
              name: 'Doge',
              description:
                // eslint-disable-next-line
                'An Internet meme that shows a Shiba Inu surrounded by colorful Comic Sans text that describes its inner monologue, such as "Wow," "Concern," and "so scare." There is much confuse over the name\'s pronunciation, yet it was recently used to brand a Bitcoin competitor.',
              category: 'CELEBRITY',
              pointValue: 3
            }
          ],
          mockAction
        )
      ).toEqual(expected);
    });
  });

  describe('discardedCards', () => {
    it('should return default state when no action passed', () => {
      expect(discardedCards([], {})).toEqual([]);
    });

    it('should return an array of discarded cards', () => {
      const expected = [
        {
          name: 'Doge',
          description:
            'An Internet meme that shows a Shiba Inu surrounded by colorful Comic Sans text that describes its inner monologue, such as "Wow," "Concern," and "so scare." There is much confuse over the name\'s pronunciation, yet it was recently used to brand a Bitcoin competitor.',
          category: 'CELEBRITY',
          pointValue: 3
        },
        {
          name: 'Blacula',
          description:
            'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
          category: 'FICTIONAL CHARACTER',
          pointValue: 4
        }
      ];

      const mockAction = {
        type: 'DISCARDED_CARDS',
        card: {
          name: 'Blacula',
          description:
            'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
          category: 'FICTIONAL CHARACTER',
          pointValue: 4
        }
      };

      expect(
        discardedCards(
          [
            {
              name: 'Doge',
              description:
                // eslint-disable-next-line
                'An Internet meme that shows a Shiba Inu surrounded by colorful Comic Sans text that describes its inner monologue, such as "Wow," "Concern," and "so scare." There is much confuse over the name\'s pronunciation, yet it was recently used to brand a Bitcoin competitor.',
              category: 'CELEBRITY',
              pointValue: 3
            }
          ],
          mockAction
        )
      ).toEqual(expected);
    });

    it('should clear discarded cards', () => {
      const expectedAdd = [
        {
          name: 'Blacula',
          description:
            'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
          category: 'FICTIONAL CHARACTER',
          pointValue: 4
        }
      ];

      const mockAddAction = {
        type: 'DISCARDED_CARDS',
        card: {
          name: 'Blacula',
          description:
            'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
          category: 'FICTIONAL CHARACTER',
          pointValue: 4
        }
      };

      const mockClearAction = {
        type: 'CLEAR_DISCARDED_CARDS'
      };

      expect(discardedCards([], mockAddAction)).toEqual(expectedAdd);
      expect(discardedCards([], mockClearAction)).toEqual([]);
    });
  });
});
