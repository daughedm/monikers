import Dexie from 'dexie';

const indexedDB = new Dexie('Monikers');

indexedDB.version(1).stores({
  allCards: '++id,name,description,category,pointValue',
  numCards: '++id,num',
  activeCards: '++id,name,description,category,pointValue',
  discardedCards: '++id,name,description,category,pointValue',
  teamNames: '++id,team,name',
  teamOneScore: '++id,score',
  teamTwoScore: '++id,score',
  currTeam: '++id,name',
  currRound: '++id,round',
  teamTimer: '++id,state'
});

export default indexedDB;
