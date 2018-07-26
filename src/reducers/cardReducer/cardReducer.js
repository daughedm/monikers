export const numCards = (state = -1, action) => {
  switch (action.type) {
  case 'NUM_OF_CARDS':
    return action.number;
  default:
    return state;
  }
};

export const activeCards = (state = [], action) => {
  switch (action.type) {
  case 'ADD_CARD':
    return [...state, action.card];
  case 'UPDATE_ACTIVE_CARDS':
    return [...action.cards];
  default:
    return state;
  }
};

export const discardedCards = (state = [], action) => {
  switch (action.type) {
  case 'DISCARDED_CARDS':
    return [...state, action.card];
  case 'CLEAR_DISCARDED_CARDS':
    return [];
  default:
    return state;
  }
};