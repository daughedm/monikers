export const numOfCards = number => ({
  type: 'NUM_OF_CARDS',
  number
});

export const addCard = card => ({
  type: 'ADD_CARD',
  card
});

export const updateActiveCards = cards => ({
  type: 'UPDATE_ACTIVE_CARDS',
  cards
})

export const discardedCards = card => ({
  type: 'DISCARDED_CARDS',
  card
});

export const clearDiscardedCards = card => ({
  type: 'CLEAR_DISCARDED_CARDS',
  card
});
