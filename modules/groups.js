export function filterGroups(groups, type) {
  return groups.filter((g) => g.id[0] === type)
}

export default [
  {
    id: 'f1',
    players: [
      { id: 8477934, firstName: 'Leon', lastName: 'Draisaitl', team: 'EDM' },
      { id: 8476453, firstName: 'Nikita', lastName: 'Kucherov', team: 'TBL' },
      { id: 8477492, firstName: 'Nathan', lastName: 'MacKinnon', team: 'COL' },
      { id: 8479318, firstName: 'Auston', lastName: 'Matthews', team: 'TOR' },
      { id: 8478483, firstName: 'Mitch', lastName: 'Marner', team: 'TOR' },
      { id: 8478402, firstName: 'Connor', lastName: 'McDavid', team: 'EDM' },
    ],
  },
  {
    id: 'f2',
    players: [
      { id: 8478427, firstName: 'Sebastian', lastName: 'Aho', team: 'CAR' },
      { id: 8471675, firstName: 'Sidney', lastName: 'Crosby', team: 'PIT' },
      { id: 8476455, firstName: 'Gabriel', lastName: 'Landeskog', team: 'COL' },
      { id: 8473419, firstName: 'Brad', lastName: 'Marchand', team: 'BOS' },
      { id: 8478420, firstName: 'Mikko', lastName: 'Rantanen', team: 'COL' },
      { id: 8475913, firstName: 'Mark', lastName: 'Stone', team: 'VGK' },
    ],
  },
  {
    id: 'f3',
    players: [
      { id: 8477404, firstName: 'Jake', lastName: 'Guentzel', team: 'PIT' },
      { id: 8474157, firstName: 'Max', lastName: 'Pacioretty', team: 'VGK' },
      { id: 8477956, firstName: 'David', lastName: 'Pastrnak', team: 'BOS' },
      { id: 8478010, firstName: 'Brayden', lastName: 'Point', team: 'TBL' },
      { id: 8475166, firstName: 'John', lastName: 'Tavares', team: 'TOR' },
      { id: 8476389, firstName: 'Vincent', lastName: 'Trocheck', team: 'CAR' },
    ],
  },
  {
    id: 'f4',
    players: [
      { id: 8477444, firstName: 'Andre', lastName: 'Burakovsky', team: 'COL' },
      { id: 8471215, firstName: 'Evgeni', lastName: 'Malkin', team: 'PIT' },
      { id: 8480039, firstName: 'Martin', lastName: 'Necas', team: 'CAR' },
      { id: 8477939, firstName: 'William', lastName: 'Nylander', team: 'TOR' },
      { id: 8474564, firstName: 'Steven', lastName: 'Stamkos', team: 'TBL' },
      { id: 8480830, firstName: 'Andrei', lastName: 'Svechnikov', team: 'CAR' },
    ],
  },
  {
    id: 'f5',
    players: [
      { id: 8470638, firstName: 'Patrice', lastName: 'Bergeron', team: 'BOS' },
      { id: 8475786, firstName: 'Zach', lastName: 'Hyman', team: 'TOR' },
      { id: 8476292, firstName: 'Ondrej', lastName: 'Palat', team: 'TBL' },
      { id: 8475810, firstName: 'Bryan', lastName: 'Rust', team: 'PIT' },
      { id: 8473533, firstName: 'Jordan', lastName: 'Staal', team: 'CAR' },
      { id: 8476882, firstName: 'Teuvo', lastName: 'Teravainen', team: 'CAR' },
    ],
  },
  {
    id: 'f6',
    players: [
      { id: 8477493, firstName: 'Aleksander', lastName: 'Barkov', team: 'FLA' },
      { id: 8476456, firstName: 'Jonathan', lastName: 'Huberdeau', team: 'FLA' },
      { id: 8477953, firstName: 'Kasperi', lastName: 'Kapanen', team: 'PIT' },
      { id: 8471276, firstName: 'David', lastName: 'Krejci', team: 'BOS' },
      { id: 8476539, firstName: 'Jonathan', lastName: 'Marchessault', team: 'VGK' },
      { id: 8477955, firstName: 'Jared', lastName: 'McCann', team: 'PIT' },
    ],
  },
  {
    id: 'f7',
    players: [
      { id: 8473563, firstName: 'Nicklas', lastName: 'Backstrom', team: 'WSH' },
      { id: 8475172, firstName: 'Nazem', lastName: 'Kadri', team: 'COL' },
      { id: 8476448, firstName: 'William', lastName: 'Karlsson', team: 'VGK' },
      { id: 8475799, firstName: 'Nino', lastName: 'Niederreiter', team: 'CAR' },
      { id: 8471214, firstName: 'Alex', lastName: 'Ovechkin', team: 'WSH' },
      { id: 8476460, firstName: 'Mark', lastName: 'Scheifele', team: 'WPG' },
    ],
  },
  {
    id: 'f8',
    players: [
      { id: 8475820, firstName: 'Joonas', lastName: 'Donskoi', team: 'COL' },
      { id: 8477940, firstName: 'Nikolaj', lastName: 'Ehlers', team: 'WPG' },
      { id: 8476826, firstName: 'Yanni', lastName: 'Gourde', team: 'TBL' },
      { id: 8475791, firstName: 'Taylor', lastName: 'Hall', team: 'BOS' },
      { id: 8476454, firstName: 'Ryan', lastName: 'Nugent-Hopkins', team: 'EDM' },
      { id: 8476438, firstName: 'Brandon', lastName: 'Saad', team: 'COL' },
    ],
  },
  {
    id: 'f9',
    players: [
      { id: 8470604, firstName: 'Jeff', lastName: 'Carter', team: 'PIT' },
      { id: 8478864, firstName: 'Kirill', lastName: 'Kaprizov', team: 'MIN' },
      { id: 8471698, firstName: 'T.J.', lastName: 'Oshie', team: 'WSH' },
      { id: 8476905, firstName: 'Chandler', lastName: 'Stephenson', team: 'VGK' },
      { id: 8477949, firstName: 'Alex', lastName: 'Tuch', team: 'VGK' },
      { id: 8471218, firstName: 'Blake', lastName: 'Wheeler', team: 'WPG' },
    ],
  },
  {
    id: 'f10',
    players: [
      { id: 8478445, firstName: 'Mathew', lastName: 'Barzal', team: 'NYI' },
      { id: 8476399, firstName: 'Blake', lastName: 'Coleman', team: 'TBL' },
      { id: 8478398, firstName: 'Kyle', lastName: 'Connor', team: 'WPG' },
      { id: 8477942, firstName: 'Kevin', lastName: 'Fiala', team: 'MIN' },
      { id: 8473986, firstName: 'Alex', lastName: 'Killorn', team: 'TBL' },
      { id: 8477409, firstName: 'Carter', lastName: 'Verhaeghe', team: 'FLA' },
    ],
  },
  {
    id: 'f11',
    players: [
      { id: 8475744, firstName: 'Evgeny', lastName: 'Kuznetsov', team: 'WSH' },
      { id: 8475225, firstName: 'Craig', lastName: 'Smith', team: 'BOS' },
      { id: 8469455, firstName: 'Jason', lastName: 'Spezza', team: 'TOR' },
      { id: 8476880, firstName: 'Tom', lastName: 'Wilson', team: 'WSH' },
      { id: 8475692, firstName: 'Mats', lastName: 'Zuccarello', team: 'MIN' },
      { id: 8475722, firstName: 'Jason', lastName: 'Zucker', team: 'PIT' },
    ],
  },
  {
    id: 'f12',
    players: [
      { id: 8476927, firstName: 'Teddy', lastName: 'Blueger', team: 'PIT' },
      { id: 8475158, firstName: 'Ryan', lastName: "O'Reilly", team: 'STL' },
      { id: 8474102, firstName: 'David', lastName: 'Perron', team: 'STL' },
      { id: 8479293, firstName: 'Brandon', lastName: 'Tanev', team: 'PIT' },
      { id: 8466138, firstName: 'Joe', lastName: 'Thornton', team: 'TOR' },
      { id: 8475726, firstName: 'Tyler', lastName: 'Toffoli', team: 'MTL' },
    ],
  },
  {
    id: 'f13',
    players: [
      { id: 8477429, firstName: 'Andrew', lastName: 'Copp', team: 'WPG' },
      { id: 8477407, firstName: 'Anthony', lastName: 'Duclair', team: 'FLA' },
      { id: 8475855, firstName: 'Jesper', lastName: 'Fast', team: 'CAR' },
      { id: 8473422, firstName: 'Nick', lastName: 'Foligno', team: 'TOR' },
      { id: 8471887, firstName: 'Patric', lastName: 'Hornqvist', team: 'FLA' },
      { id: 8475191, firstName: 'Reilly', lastName: 'Smith', team: 'VGK' },
    ],
  },
  {
    id: 'f14',
    players: [
      { id: 8477935, firstName: 'Sam', lastName: 'Bennett', team: 'FLA' },
      { id: 8478519, firstName: 'Anthony', lastName: 'Cirelli', team: 'TBL' },
      { id: 8477456, firstName: 'J.T.', lastName: 'Compher', team: 'COL' },
      { id: 8477021, firstName: 'Alexander', lastName: 'Kerfoot', team: 'TOR' },
      { id: 8477501, firstName: 'Valeri', lastName: 'Nichushkin', team: 'COL' },
      { id: 8479344, firstName: 'Jesse', lastName: 'Puljujarvi', team: 'EDM' },
    ],
  },
  {
    id: 'f15',
    players: [
      { id: 8477406, firstName: 'Mattias', lastName: 'Janmark', team: 'VGK' },
      { id: 8477998, firstName: 'Warren', lastName: 'Foegele', team: 'CAR' },
      { id: 8475220, firstName: 'Marcus', lastName: 'Foligno', team: 'MIN' },
      { id: 8477931, firstName: 'Tomas', lastName: 'Nosek', team: 'VGK' },
      { id: 8471262, firstName: 'Carl', lastName: 'Soderberg', team: 'COL' },
      { id: 8480018, firstName: 'Nick', lastName: 'Suzuki', team: 'MTL' },
    ],
  },
  {
    id: 'f16',
    players: [
      { id: 8476887, firstName: 'Filip', lastName: 'Forsberg', team: 'NSH' },
      { id: 8476851, firstName: 'Alex', lastName: 'Galchenyuk', team: 'TOR' },
      { id: 8475848, firstName: 'Brendan', lastName: 'Gallagher', team: 'MTL' },
      { id: 8474870, firstName: 'Tyler', lastName: 'Johnson', team: 'TBL' },
      { id: 8478542, firstName: 'Evan', lastName: 'Rodrigues', team: 'PIT' },
      { id: 8479977, firstName: 'Kailer', lastName: 'Yamamoto', team: 'EDM' },
      
    ],
  },
  {
    id: 'f17',
    players: [
      { id: 8474573, firstName: 'Josh', lastName: 'Bailey', team: 'NYI' },
      { id: 8479525, firstName: 'Ross', lastName: 'Colton', team: 'TBL' },
      { id: 8474189, firstName: 'Lars', lastName: 'Eller', team: 'WSH' },
      { id: 8478413, firstName: 'Jordan', lastName: 'Greenway', team: 'MIN' },
      { id: 8477511, firstName: 'Anthony', lastName: 'Mantha', team: 'WSH' },
      { id: 8476934, firstName: 'Brock', lastName: 'McGinn', team: 'CAR' },
    ],
  },
  {
    id: 'f18',
    players: [
      { id: 8479944, firstName: 'Zach', lastName: 'Aston-Reese', team: 'PIT' },
      { id: 8475163, firstName: 'Alex', lastName: 'Chiasson', team: 'EDM' },
      { id: 8474586, firstName: 'Jordan', lastName: 'Eberle', team: 'NYI' },
      { id: 8478493, firstName: 'Joel', lastName: 'Eriksson Ek', team: 'MIN' },
      { id: 8476624, firstName: 'Barclay', lastName: 'Goodrow', team: 'TBL' },
      { id: 8478466, firstName: 'Daniel', lastName: 'Sprong', team: 'WSH' },
    ],
  },
  {
    id: 'f19',
    players: [
      { id: 8478463, firstName: 'Anthony', lastName: 'Beauvillier', team: 'NYI' },
      { id: 8474034, firstName: 'Patrick', lastName: 'Maroon', team: 'TBL' },
      { id: 8471707, firstName: 'James', lastName: 'Neal', team: 'EDM' },
      { id: 8471669, firstName: 'Paul', lastName: 'Stastny', team: 'WPG' },
      { id: 8475193, firstName: 'Tomas', lastName: 'Tatar', team: 'MTL' },
      { id: 8477505, firstName: 'Alexander', lastName: 'Wennberg', team: 'FLA' },
    ],
  },
  {
    id: 'f20',
    players: [
      { id: 8479400, firstName: 'Pierre-Luc', lastName: 'Dubois', team: 'WPG' },
      { id: 8478472, firstName: 'Mathieu', lastName: 'Joseph', team: 'TBL' },
      { id: 8479370, firstName: 'Tyson', lastName: 'Jost', team: 'COL' },
      { id: 8476921, firstName: 'Jordan', lastName: 'Martinook', team: 'CAR' },
      { id: 8481624, firstName: 'Ilya', lastName: 'Mikheyev', team: 'TOR' },
      { id: 8475754, firstName: 'Brock', lastName: 'Nelson', team: 'NYI' },
    ],
  },
  {
    id: 'f21',
    players: [
      { id: 8475745, firstName: 'Charlie', lastName: 'Coyle', team: 'BOS' },
      { id: 8478498, firstName: 'Jake', lastName: 'DeBrusk', team: 'BOS' },
      { id: 8474884, firstName: 'Mike', lastName: 'Hoffman', team: 'STL' },
      { id: 8480946, firstName: 'Dominik', lastName: 'Kahun', team: 'EDM' },
      { id: 8475170, firstName: 'Brayden', lastName: 'Schenn', team: 'STL' },
      { id: 8477839, firstName: 'Conor', lastName: 'Sheary', team: 'WSH' },
    ],
  },
  {
    id: 'f22',
    players: [
      { id: 8474009, firstName: 'Nick', lastName: 'Bonino', team: 'MIN' },
      { id: 8476392, firstName: 'Adam', lastName: 'Lowry', team: 'WPG' },
      { id: 8476419, firstName: 'Jean-Gabriel', lastName: 'Pageau', team: 'NYI' },
      { id: 8475151, firstName: 'Kyle', lastName: 'Palmieri', team: 'NYI' },
      { id: 8475768, firstName: 'Jaden', lastName: 'Schwartz', team: 'STL' },
      { id: 8475765, firstName: 'Vladimir', lastName: 'Tarasenko', team: 'STL' },
    ],
  },
  {
    id: 'f23',
    players: [
      { id: 8478042, firstName: 'Viktor', lastName: 'Arvidsson', team: 'NSH' },
      { id: 8479996, firstName: 'Cody', lastName: 'Glass', team: 'VGK' },
      { id: 8476873, firstName: 'Mark', lastName: 'Jankowski', team: 'PIT' },
      { id: 8470610, firstName: 'Zach', lastName: 'Parise', team: 'MIN' },
      { id: 8478366, firstName: 'Frank', lastName: 'Vatrano', team: 'FLA' },
      { id: 8480789, firstName: 'Oliver', lastName: 'Wahlstrom', team: 'NYI' },
    ],
  },
  {
    id: 'f24',
    players: [
      { id: 8476981, firstName: 'Josh', lastName: 'Anderson', team: 'MTL' },
      { id: 8478891, firstName: 'Mason', lastName: 'Appleton', team: 'WPG' },
      { id: 8476479, firstName: 'Phillip', lastName: 'Danault', team: 'MTL' },
      { id: 8477478, firstName: 'William', lastName: 'Carrier', team: 'VGK' },
      { id: 8478115, firstName: 'Pierre', lastName: 'Engvall', team: 'TOR' },
      { id: 8480009, firstName: 'Eeli', lastName: 'Tolvanen', team: 'NSH' },
    ],
  },
  {
    id: 'd1',
    players: [
      { id: 8475197, firstName: 'Tyson', lastName: 'Barrie', team: 'EDM' },
      { id: 8476462, firstName: 'Dougie', lastName: 'Hamilton', team: 'CAR' },
      { id: 8475167, firstName: 'Victor', lastName: 'Hedman', team: 'TBL' },
      { id: 8471724, firstName: 'Kris', lastName: 'Letang', team: 'PIT' },
      { id: 8480069, firstName: 'Cale', lastName: 'Makar', team: 'COL' },
      { id: 8477447, firstName: 'Shea', lastName: 'Theodore', team: 'VGK' },
    ],
  },
  {
    id: 'd2',
    players: [
      { id: 8474590, firstName: 'John', lastName: 'Carlson', team: 'WSH' },
      { id: 8479398, firstName: 'Samuel', lastName: 'Girard', team: 'COL' },
      { id: 8477498, firstName: 'Darnell', lastName: 'Nurse', team: 'EDM' },
      { id: 8474565, firstName: 'Alex', lastName: 'Pietrangelo', team: 'VGK' },
      { id: 8476853, firstName: 'Morgan', lastName: 'Rielly', team: 'TOR' },
      { id: 8478038, firstName: 'Devon', lastName: 'Toews', team: 'COL' },
    ],
  },
  {
    id: 'd3',
    players: [
      { id: 8474166, firstName: 'Alec', lastName: 'Martinez', team: 'VGK' },
      { id: 8479325, firstName: 'Charlie', lastName: 'McAvoy', team: 'BOS' },
      { id: 8474162, firstName: 'Jake', lastName: 'Muzzin', team: 'TOR' },
      { id: 8477488, firstName: 'Brett', lastName: 'Pesce', team: 'CAR' },
      { id: 8479410, firstName: 'Mikhail', lastName: 'Sergachev', team: 'TBL' },
      { id: 8477346, firstName: 'MacKenzie', lastName: 'Weegar', team: 'FLA' },
    ],
  },
  {
    id: 'd4',
    players: [
      { id: 8476891, firstName: 'Matt', lastName: 'Grzelcyk', team: 'BOS' },
      { id: 8475718, firstName: 'Justin', lastName: 'Holl', team: 'TOR' },
      { id: 8475200, firstName: 'Dmitry', lastName: 'Orlov', team: 'WSH' },
      { id: 8480145, firstName: 'Neal', lastName: 'Pionk', team: 'WPG' },
      { id: 8476422, firstName: 'Mike', lastName: 'Reilly', team: 'BOS' },
      { id: 8474602, firstName: 'Justin', lastName: 'Schultz', team: 'WSH' },
    ],
  },
  {
    id: 'd5',
    players: [
      { id: 8475208, firstName: 'Brian', lastName: 'Dumoulin', team: 'PIT' },
      { id: 8474600, firstName: 'Roman', lastName: 'Josi', team: 'NSH' },
      { id: 8476875, firstName: 'Mike', lastName: 'Matheson', team: 'PIT' },
      { id: 8473507, firstName: 'Jeff', lastName: 'Petry', team: 'MTL' },
      { id: 8476958, firstName: 'Jaccob', lastName: 'Slavin', team: 'CAR' },
      { id: 8471735, firstName: 'Keith', lastName: 'Yandle', team: 'FLA' },
    ],
  },
  {
    id: 'd6',
    players: [
      { id: 8479402, firstName: 'Jake', lastName: 'Bean', team: 'CAR' },
      { id: 8476879, firstName: 'Cody', lastName: 'Ceci', team: 'PIT' },
      { id: 8478416, firstName: 'Erik', lastName: 'Cernak', team: 'TBL' },
      { id: 8477435, firstName: 'Ryan', lastName: 'Graves', team: 'COL' },
      { id: 8479439, firstName: 'Jacob', lastName: 'MacDonald', team: 'COL' },
      { id: 8474716, firstName: 'Jared', lastName: 'Spurgeon', team: 'MIN' },
    ],
  },
  {
    id: 'd7',
    players: [
      { id: 8474673, firstName: 'T.J.', lastName: 'Brodie', team: 'TOR' },
      { id: 8478055, firstName: 'Gustav', lastName: 'Forsling', team: 'FLA' },
      { id: 8479980, firstName: 'Nicolas', lastName: 'Hague', team: 'VGK' },
      { id: 8475181, firstName: 'Nick', lastName: 'Leddy', team: 'NYI' },
      { id: 8478507, firstName: 'John', lastName: 'Marino', team: 'PIT' },
      { id: 8477986, firstName: 'Brandon', lastName: 'Montour', team: 'FLA' },
    ],
  },
  {
    id: 'd8',
    players: [
      { id: 8476463, firstName: 'Jonas', lastName: 'Brodin', team: 'MIN' },
      { id: 8475455, firstName: 'Brenden', lastName: 'Dillon', team: 'WSH' },
      { id: 8476856, firstName: 'Mathew', lastName: 'Dumba', team: 'MIN' },
      { id: 8477932, firstName: 'Aaron', lastName: 'Ekblad', team: 'FLA' },
      { id: 8475176, firstName: 'Ryan', lastName: 'Ellis', team: 'NSH' },
      { id: 8476792, firstName: 'Torey', lastName: 'Krug', team: 'STL' },
    ],
  },
  {
    id: 'd9',
    players: [
      { id: 8475218, firstName: 'Mattias', lastName: 'Ekholm', team: 'NSH' },
      { id: 8474151, firstName: 'Ryan', lastName: 'McDonagh', team: 'TBL' },
      { id: 8477504, firstName: 'Josh', lastName: 'Morrissey', team: 'WPG' },
      { id: 8471729, firstName: 'Kris', lastName: 'Russell', team: 'EDM' },
      { id: 8476869, firstName: 'Brady', lastName: 'Skjei', team: 'CAR' },
      { id: 8470642, firstName: 'Shea', lastName: 'Weber', team: 'MTL' },
    ],
  },
  {
    id: 'd10',
    players: [
      { id: 8478451, firstName: 'Ethan', lastName: 'Bear', team: 'EDM' },
      { id: 8478407, firstName: 'Vince', lastName: 'Dunn', team: 'STL' },
      { id: 8475324, firstName: 'Nick', lastName: 'Jensen', team: 'WSH' },
      { id: 8475233, firstName: 'David', lastName: 'Savard', team: 'TBL' },
      { id: 8470600, firstName: 'Ryan', lastName: 'Suter', team: 'MIN' },
      { id: 8480727, firstName: 'Zach', lastName: 'Whitecloud', team: 'VGK' },
    ],
  },
  {
    id: 'd11',
    players: [
      { id: 8478408, firstName: 'Travis', lastName: 'Dermott', team: 'TOR' },
      { id: 8480865, firstName: 'Noah', lastName: 'Dobson', team: 'NYI' },
      { id: 8476457, firstName: 'Adam', lastName: 'Larsson', team: 'EDM' },
      { id: 8476892, firstName: 'Colton', lastName: 'Parayko', team: 'STL' },
      { id: 8477506, firstName: 'Ryan', lastName: 'Pulock', team: 'NYI' },
      { id: 8477369, firstName: 'Carson', lastName: 'Soucy', team: 'MIN' },
    ],
  },
  {
    id: 'd12',
    players: [
      { id: 8477365, firstName: 'Connor', lastName: 'Clifton', team: 'BOS' },
      { id: 8476441, firstName: 'Joel', lastName: 'Edmundson', team: 'MTL' },
      { id: 8475753, firstName: 'Justin', lastName: 'Faulk', team: 'STL' },
      { id: 8475762, firstName: 'Derek', lastName: 'Forbort', team: 'WPG' },
      { id: 8478468, firstName: 'Jeremy', lastName: 'Lauzon', team: 'BOS' },
      { id: 8476917, firstName: 'Adam', lastName: 'Pelech', team: 'NYI' },
    ],
  },
  {
    id: 't1',
    teams: [
      {
        id: 'CAR',
        fullName: 'Carolina Hurricanes',
        locationName: 'Carolina',
        teamName: 'Hurricanes',
        goalies: [
          { id: 8477968, firstName: 'Alex', lastName: 'Nedeljkovic' },
          { id: 8473503, firstName: 'James', lastName: 'Reimer' },
          { id: 8475852, firstName: 'Petr', lastName: 'Mrazek' },
        ],
      },
      {
        id: 'COL',
        fullName: 'Colorado Avalanche',
        locationName: 'Colorado',
        teamName: 'Avalanche',
        goalies: [
          { id: 8475831, firstName: 'Philipp', lastName: 'Grubauer' },
          { id: 8471227, firstName: 'Devan', lastName: 'Dubnyk' },
          { id: 8477992, firstName: 'Jonas', lastName: 'Johansson' },
        ],
      },
      {
        id: 'TOR',
        fullName: 'Toronto Maple Leafs',
        locationName: 'Toronto',
        teamName: 'Maple Leafs',
        goalies: [
          { id: 8475789, firstName: 'Jack', lastName: 'Campbell' },
          { id: 8475883, firstName: 'Frederik', lastName: 'Andersen' },
          { id: 8479496, firstName: 'David', lastName: 'Rittich' },
        ],
      },
      {
        id: 'VGK',
        fullName: 'Vegas Golden Knights',
        locationName: 'Vegas',
        teamName: 'Golden Knights',
        goalies: [
          { id: 8470594, firstName: 'Marc-Andre', lastName: 'Fleury' },
          { id: 8475215, firstName: 'Robin', lastName: 'Lehner' },
        ],
      },
    ],
  },
  {
    id: 't2',
    teams: [
      {
        id: 'BOS',
        fullName: 'Boston Bruins',
        locationName: 'Boston',
        teamName: 'Bruins',
        goalies: [
          { id: 8471695, firstName: 'Tuukka', lastName: 'Rask' },
          { id: 8470860, firstName: 'Jaroslav', lastName: 'Halak' },
          { id: 8480280, firstName: 'Jeremy', lastName: 'Swayman' },
        ],
      },
      {
        id: 'FLA',
        fullName: 'Florida Panthers',
        locationName: 'Florida',
        teamName: 'Panthers',
        goalies: [
          { id: 8475683, firstName: 'Sergei', lastName: 'Bobrovsky' },
          { id: 8476904, firstName: 'Chris', lastName: 'Driedger' },
          { id: 8481519, firstName: 'Spencer', lastName: 'Knight' },
        ],
      },
      {
        id: 'PIT',
        fullName: 'Pittsburgh Penguins',
        locationName: 'Pittsburgh',
        teamName: 'Penguins',
        goalies: [
          { id: 8477465, firstName: 'Tristan', lastName: 'Jarry' },
          { id: 8479193, firstName: 'Casey', lastName: 'DeSmith' },
        ]
      },
      {
        id: 'TBL',
        fullName: 'Tampa Bay Lightning',
        locationName: 'Tampa Bay',
        teamName: 'Lightning',
        goalies: [
          { id: 8476883, firstName: 'Andrei', lastName: 'Vasilevskiy' },
          { id: 8470147, firstName: 'Curtis', lastName: 'McElhinney' },
        ],
      },
    ],
  },
  {
    id: 't3',
    teams: [
      {
        id: 'EDM',
        fullName: 'Edmonton Oilers',
        locationName: 'Edmonton',
        teamName: 'Oilers',
        goalies: [
          { id: 8469608, firstName: 'Mike', lastName: 'Smith' },
          { id: 8475156, firstName: 'Mikko', lastName: 'Koskinen' },
        ],
      },
      {
        id: 'MIN',
        fullName: 'Minnesota Wild',
        locationName: 'Minnesota',
        teamName: 'Wild',
        goalies: [
          { id: 8475660, firstName: 'Cam', lastName: 'Talbot' },
          { id: 8478039, firstName: 'Kaapo', lastName: 'Kahkonen' },
        ],
      },
      {
        id: 'NYI',
        fullName: 'New York Islanders',
        locationName: 'New York',
        teamName: 'Islanders',
        goalies: [
          { id: 8473575, firstName: 'Semyon', lastName: 'Varlamov' },
          { id: 8478009, firstName: 'Ilya', lastName: 'Sorokin' },
        ],
      },
      {
        id: 'WSH',
        fullName: 'Washington Capitals',
        locationName: 'Washington',
        teamName: 'Capitals',
        goalies: [
          { id: 8477970, firstName: 'Vitek', lastName: 'Vanecek' },
          { id: 8467950, firstName: 'Craig', lastName: 'Anderson' },
          { id: 8478492, firstName: 'Ilya', lastName: 'Samsonov' },
        ],
      },
    ],
  },
  {
    id: 't4',
    teams: [
      {
        id: 'MTL',
        fullName: 'Montreal Canadiens',
        locationName: 'Montreal',
        teamName: 'Canadiens',
        goalies: [
          { id: 8474596, firstName: 'Jake', lastName: 'Allen' },
          { id: 8471679, firstName: 'Carey', lastName: 'Price' },
        ],
      },
      {
        id: 'NSH',
        fullName: 'Nashville Predators',
        locationName: 'Nashville',
        teamName: 'Predators',
        goalies: [
          { id: 8477424, firstName: 'Juuse', lastName: 'Saros' },
          { id: 8471469, firstName: 'Pekka', lastName: 'Rinne' },
        ],
      },
      {
        id: 'STL',
        fullName: 'St. Louis Blues',
        locationName: 'St. Louis',
        teamName: 'Blues',
        goalies: [
          { id: 8476412, firstName: 'Jordan', lastName: 'Binnington' },
          { id: 8478024, firstName: 'Ville', lastName: 'Husso' },
        ],
      },
      {
        id: 'WPG',
        fullName: 'Winnipeg Jets',
        locationName: 'Winnipeg',
        teamName: 'Jets',
        goalies: [
          { id: 8476945, firstName: 'Connor', lastName: 'Hellebuyck' },
          { id: 8476316, firstName: 'Laurent', lastName: 'Brossoit' },
        ],
      }
    ],
  },
  {
    id: 'sc',
    teams: [
      {
        id: 'BOS',
        fullName: 'Boston Bruins',
        locationName: 'Boston',
        teamName: 'Bruins',
      },
      {
        id: 'CAR',
        fullName: 'Carolina Hurricanes',
        locationName: 'Carolina',
        teamName: 'Hurricanes',
      },
      {
        id: 'COL',
        fullName: 'Colorado Avalanche',
        locationName: 'Colorado',
        teamName: 'Avalanche',
      },
      {
        id: 'EDM',
        fullName: 'Edmonton Oilers',
        locationName: 'Edmonton',
        teamName: 'Oilers',
      },
      {
        id: 'FLA',
        fullName: 'Florida Panthers',
        locationName: 'Florida',
        teamName: 'Panthers',
      },
      {
        id: 'MIN',
        fullName: 'Minnesota Wild',
        locationName: 'Minnesota',
        teamName: 'Wild',
      },
      {
        id: 'MTL',
        fullName: 'Montreal Canadiens',
        locationName: 'Montreal',
        teamName: 'Canadiens',
      },
      {
        id: 'NSH',
        fullName: 'Nashville Predators',
        locationName: 'Nashville',
        teamName: 'Predators',
      },
      {
        id: 'NYI',
        fullName: 'New York Islanders',
        locationName: 'New York',
        teamName: 'Islanders',
      },
      {
        id: 'PIT',
        fullName: 'Pittsburgh Penguins',
        locationName: 'Pittsburgh',
        teamName: 'Penguins',
      },
      {
        id: 'STL',
        fullName: 'St. Louis Blues',
        locationName: 'St. Louis',
        teamName: 'Blues',
      },
      {
        id: 'TBL',
        fullName: 'Tampa Bay Lightning',
        locationName: 'Tampa Bay',
        teamName: 'Lightning',
      },
      {
        id: 'TOR',
        fullName: 'Toronto Maple Leafs',
        locationName: 'Toronto',
        teamName: 'Maple Leafs',
      },
      {
        id: 'VGK',
        fullName: 'Vegas Golden Knights',
        locationName: 'Vegas',
        teamName: 'Golden Knights',
      },
      {
        id: 'WSH',
        fullName: 'Washington Capitals',
        locationName: 'Washington',
        teamName: 'Capitals',
      },
      {
        id: 'WPG',
        fullName: 'Winnipeg Jets',
        locationName: 'Winnipeg',
        teamName: 'Jets',
      },
    ],
  },
]
