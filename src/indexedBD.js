import Dexie from 'dexie';

const indexedDB = new Dexie('Monikers');

indexedDB.version(1).stores({
  allCards: '++id,name,description,category,pointValue'
});

export default indexedDB;
