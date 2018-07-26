import {
  numOfCards,
  addCard,
  updateActiveCards,
  discardedCards
} from './cardActions.js';

describe("Card Actions", () => {
  describe("numOfCards", () => {
    it("has a type of NUM_OF_CARDS", () => {
      const number = 45;

      const actual = numOfCards(number);

      expect(actual).toEqual({
        type: 'NUM_OF_CARDS',
        number
      });
    });
  });

  describe("addCard", () => {
    it("has a type of ADD_CARD", () => {
      const cards = [
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
        },
        {
          name: 'A Furry',
          description:
            'A person who wears a full body animal suit, often for conventions, roleplaying, or personal recreation. Their use in sexual activity is a controversial topic in the community. In a recent survey, 37% reported that it was an important part of their interest in the activity.',
          category: 'ET CETERA',
          pointValue: 3
        }
      ];

      const actual = addCard(cards);

      expect(actual).toEqual({
        type: 'ADD_CARD',
        card: cards
      });
    });
  });

  describe("updateActiveCards", () => {
    it("has a type of UPDATE_ACTIVE_CARDS", () => {
      const cards = [
        {
          name: 'A Furry',
          description:
            'A person who wears a full body animal suit, often for conventions, roleplaying, or personal recreation. Their use in sexual activity is a controversial topic in the community. In a recent survey, 37% reported that it was an important part of their interest in the activity.',
          category: 'ET CETERA',
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

      const actual = updateActiveCards(cards);

      expect(actual).toEqual({
        type: 'UPDATE_ACTIVE_CARDS',
        cards
      });
    });
  });

  describe("discardedCards", () => {
    it("has a type of 'DISCARDED_CARDS'", () => {
      const card = {
        name: 'Blacula',
        description:
          'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
        category: 'FICTIONAL CHARACTER',
        pointValue: 4
      };

      const actual = discardedCards(card);

      expect(actual).toEqual({
        type: 'DISCARDED_CARDS',
        card
      });
    });
  });
});
