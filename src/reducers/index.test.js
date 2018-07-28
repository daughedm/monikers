import { createStore } from 'redux';
import rootReducer from './index';
import * as cardReducer from './cardReducer/cardReducer';
import * as gameReducer from './gameReducer/gameReducer';

const store = createStore(rootReducer);

describe('rootReducer', () => {
  it('checks that the intial state of the root reducer matches what the child reducer returns, given an empty action', () => {
    expect(store.getState().teamNames).toEqual(gameReducer.teamNames([], {}));
    expect(store.getState().numCards).toEqual(cardReducer.numCards(-1, {}));
    expect(store.getState().activeCards).toEqual(
      cardReducer.activeCards([], {})
    );
    expect(store.getState().discardedCards).toEqual(
      cardReducer.discardedCards([], {})
    );
    expect(store.getState().currTeam).toEqual(gameReducer.currentTeam('', {}));
    expect(store.getState().currRound).toEqual(gameReducer.currentRound(1, {}));
    expect(store.getState().teamOneScore).toEqual(
      gameReducer.teamOneScore(0, {})
    );
    expect(store.getState().teamTwoScore).toEqual(
      gameReducer.teamTwoScore(0, {})
    );
    expect(store.getState().teamTimer).toEqual(
      gameReducer.teamTimer('pregame', {})
    );
  });
});
