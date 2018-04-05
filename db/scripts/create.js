db.createCollection('picks')
db.createCollection('games')
db.createCollection('statistics')

db.picks.createIndex(
   { firstName: 1, lastName: 1 },
   { unique: true }
)

db.statistics.createIndex(
   { dateString: 1 },
   { unique: true }
)
