import Dexie from 'dexie';

const indexedDB = new Dexie('Monikers');

indexedDB.version(1).stores({
  cards: '++id,name,description,category,pointValue',
  numPlayers: '++id,num',
  teams: '++id,team,name'
});

export default indexedDB;
