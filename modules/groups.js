export function filterGroups(groups, type) {
  return groups.filter(g => g.id[0] === type)
}

export default [
  {
    id: 'f1',
    players: [
      { id: 8476346, firstName: 'Johnny', lastName: 'Gaudreau', team: 'CGY' },
      { id: 8473419, firstName: 'Brad', lastName: 'Marchand', team: 'BOS' },
      { id: 8471214, firstName: 'Alex', lastName: 'Ovechkin', team: 'WSH' },
      { id: 8478010, firstName: 'Brayden', lastName: 'Point', team: 'TBL' },
      { id: 8474564, firstName: 'Steven', lastName: 'Stamkos', team: 'TBL' },
    ],
  },
  {
    id: 'f2',
    players: [
      { id: 8470638, firstName: 'Patrice', lastName: 'Bergeron', team: 'BOS' },
      { id: 8471675, firstName: 'Sidney', lastName: 'Crosby', team: 'PIT' },
      { id: 8471215, firstName: 'Evgeni', lastName: 'Malkin', team: 'PIT' },
      { id: 8477497, firstName: 'Sean', lastName: 'Monahan', team: 'CGY' },
      { id: 8477956, firstName: 'David', lastName: 'Pastrnak', team: 'BOS' },
    ],
  },
  {
    id: 'f3',
    players: [
      { id: 8473563, firstName: 'Nicklas', lastName: 'Backstrom', team: 'WSH' },
      { id: 8475744, firstName: 'Evgeny', lastName: 'Kuznetsov', team: 'WSH' },
      { id: 8477496, firstName: 'Elias', lastName: 'Lindholm', team: 'CGY' },
      { id: 8479314, firstName: 'Matthew', lastName: 'Tkachuk', team: 'CGY' },
      { id: 8471218, firstName: 'Blake', lastName: 'Wheeler', team: 'WPG' },
    ],
  },
  {
    id: 'f4',
    players: [
      { id: 8476881, firstName: 'Tomas', lastName: 'Hertl', team: 'SJS' },
      { id: 8473548, firstName: 'Phil', lastName: 'Kessel', team: 'PIT' },
      { id: 8478483, firstName: 'Mitchell', lastName: 'Marner', team: 'TOR' },
      { id: 8476460, firstName: 'Mark', lastName: 'Scheifele', team: 'WPG' },
      { id: 8475166, firstName: 'John', lastName: 'Tavares', team: 'TOR' },
    ],
  },
  {
    id: 'f5',
    players: [
      { id: 8474053, firstName: 'Logan', lastName: 'Couture', team: 'SJS' },
      { id: 8471276, firstName: 'David', lastName: 'Krejci', team: 'BOS' },
      { id: 8477492, firstName: 'Nathan', lastName: 'MacKinnon', team: 'COL' },
      { id: 8479318, firstName: 'Auston', lastName: 'Matthews', team: 'TOR' },
      { id: 8470794, firstName: 'Joe', lastName: 'Pavelski', team: 'SJS' },
    ],
  },
  {
    id: 'f6',
    players: [
      { id: 8478042, firstName: 'Viktor', lastName: 'Arvidsson', team: 'NSH' },
      { id: 8475793, firstName: 'Ryan', lastName: 'Johansen', team: 'NSH' },
      { id: 8478414, firstName: 'Timo', lastName: 'Meier', team: 'SJS' },
      { id: 8475158, firstName: 'Ryan', lastName: "O'Reilly", team: 'STL' },
      { id: 8478420, firstName: 'Mikko', lastName: 'Rantanen', team: 'COL' },
    ],
  },
  {
    id: 'f7',
    players: [
      { id: 8478427, firstName: 'Sebastian', lastName: 'Aho', team: 'CAR' },
      { id: 8476887, firstName: 'Filip', lastName: 'Forsberg', team: 'NSH' },
      { id: 8477404, firstName: 'Jake', lastName: 'Guentzel', team: 'PIT' },
      { id: 8471698, firstName: 'T.J.', lastName: 'Oshie', team: 'WSH' },
      {
        id: 8475765,
        firstName: 'Vladimir',
        lastName: 'Tarasenko',
        team: 'STL',
      },
    ],
  },
  {
    id: 'f8',
    players: [
      { id: 8476455, firstName: 'Gabriel', lastName: 'Landeskog', team: 'COL' },
      { id: 8478550, firstName: 'Artemi', lastName: 'Panarin', team: 'CBJ' },
      { id: 8471228, firstName: 'Alexander', lastName: 'Radulov', team: 'DAL' },
      { id: 8475794, firstName: 'Tyler', lastName: 'Seguin', team: 'DAL' },
      { id: 8475913, firstName: 'Mark', lastName: 'Stone', team: 'VGK' },
    ],
  },
  {
    id: 'f9',
    players: [
      { id: 8478398, firstName: 'Kyle', lastName: 'Connor', team: 'WPG' },
      { id: 8475169, firstName: 'Evander', lastName: 'Kane', team: 'SJS' },
      { id: 8474679, firstName: 'Gustav', lastName: 'Nyquist', team: 'SJS' },
      { id: 8474102, firstName: 'David', lastName: 'Perron', team: 'STL' },
      { id: 8476882, firstName: 'Teuvo', lastName: 'Teravainen', team: 'CAR' },
    ],
  },
  {
    id: 'f10',
    players: [
      { id: 8478445, firstName: 'Mathew', lastName: 'Barzal', team: 'NYI' },
      { id: 8476826, firstName: 'Yanni', lastName: 'Gourde', team: 'TBL' },
      { id: 8475798, firstName: 'Mikael', lastName: 'Granlund', team: 'NSH' },
      { id: 8475763, firstName: 'Kevin', lastName: 'Hayes', team: 'WPG' },
      { id: 8476468, firstName: 'J.T.', lastName: 'Miller', team: 'TBL' },
    ],
  },
  {
    id: 'f11',
    players: [
      { id: 8474150, firstName: 'Mikael', lastName: 'Backlund', team: 'CGY' },
      { id: 8475168, firstName: 'Matt', lastName: 'Duchene', team: 'CBJ' },
      { id: 8474870, firstName: 'Tyler', lastName: 'Johnson', team: 'TBL' },
      { id: 8475170, firstName: 'Brayden', lastName: 'Schenn', team: 'STL' },
      { id: 8466138, firstName: 'Joe', lastName: 'Thornton', team: 'SJS' },
    ],
  },
  {
    id: 'f12',
    players: [
      { id: 8474715, firstName: 'Cam', lastName: 'Atkinson', team: 'CBJ' },
      { id: 8478099, firstName: 'Kevin', lastName: 'Labanc', team: 'SJS' },
      { id: 8471669, firstName: 'Paul', lastName: 'Stastny', team: 'VGK' },
      { id: 8476880, firstName: 'Tom', lastName: 'Wilson', team: 'WSH' },
      { id: 8475692, firstName: 'Mats', lastName: 'Zuccarello', team: 'DAL' },
    ],
  },
  {
    id: 'f13',
    players: [
      { id: 8474573, firstName: 'Josh', lastName: 'Bailey', team: 'NYI' },
      { id: 8478498, firstName: 'Jake', lastName: 'DeBrusk', team: 'BOS' },
      { id: 8473564, firstName: 'Michael', lastName: 'Frolik', team: 'CGY' },
      { id: 8479339, firstName: 'Patrik', lastName: 'Laine', team: 'WPG' },
      { id: 8476292, firstName: 'Ondrej', lastName: 'Palat', team: 'TBL' },
    ],
  },
  {
    id: 'f14',
    players: [
      { id: 8475792, firstName: 'Brett', lastName: 'Connolly', team: 'WSH' },
      { id: 8473986, firstName: 'Alex', lastName: 'Killorn', team: 'TBL' },
      {
        id: 8476539,
        firstName: 'Jonathan',
        lastName: 'Marchessault',
        team: 'VGK',
      },
      { id: 8475191, firstName: 'Reilly', lastName: 'Smith', team: 'VGK' },
      { id: 8477944, firstName: 'Jakub', lastName: 'Vrana', team: 'WSH' },
    ],
  },
  {
    id: 'f15',
    players: [
      { id: 8473994, firstName: 'Jamie', lastName: 'Benn', team: 'DAL' },
      { id: 8477940, firstName: 'Nikolaj', lastName: 'Ehlers', team: 'WPG' },
      { id: 8476448, firstName: 'William', lastName: 'Karlsson', team: 'VGK' },
      { id: 8475314, firstName: 'Anders', lastName: 'Lee', team: 'NYI' },
      { id: 8477949, firstName: 'Alex', lastName: 'Tuch', team: 'VGK' },
    ],
  },
  {
    id: 'f16',
    players: [
      { id: 8478519, firstName: 'Anthony', lastName: 'Cirelli', team: 'TBL' },
      { id: 8479400, firstName: 'Pierre-Luc', lastName: 'Dubois', team: 'CBJ' },
      { id: 8475149, firstName: 'Marcus', lastName: 'Johansson', team: 'BOS' },
      { id: 8475754, firstName: 'Brock', lastName: 'Nelson', team: 'NYI' },
      { id: 8478585, firstName: 'Derek', lastName: 'Ryan', team: 'CGY' },
    ],
  },
  {
    id: 'f17',
    players: [
      { id: 8475799, firstName: 'Nino', lastName: 'Niederreiter', team: 'CAR' },
      { id: 8477939, firstName: 'William', lastName: 'Nylander', team: 'TOR' },
      { id: 8474157, firstName: 'Max', lastName: 'Pacioretty', team: 'VGK' },
      { id: 8475225, firstName: 'Craig', lastName: 'Smith', team: 'NSH' },
      { id: 8468508, firstName: 'Justin', lastName: 'Williams', team: 'CAR' },
    ],
  },
  {
    id: 'f18',
    players: [
      { id: 8476288, firstName: 'Ryan', lastName: 'Dzingel', team: 'CBJ' },
      { id: 8471887, firstName: 'Patric', lastName: 'Hornqvist', team: 'PIT' },
      { id: 8477341, firstName: 'Andreas', lastName: 'Johnsson', team: 'TOR' },
      { id: 8475172, firstName: 'Nazem', lastName: 'Kadri', team: 'TOR' },
      { id: 8475768, firstName: 'Jaden', lastName: 'Schwartz', team: 'STL' },
    ],
  },
  {
    id: 'f19',
    players: [
      { id: 8475098, firstName: 'Tyler', lastName: 'Bozak', team: 'STL' },
      { id: 8475820, firstName: 'Joonas', lastName: 'Donskoi', team: 'SJS' },
      { id: 8474189, firstName: 'Lars', lastName: 'Eller', team: 'WSH' },
      { id: 8475907, firstName: 'Micheal', lastName: 'Ferland', team: 'CAR' },
      { id: 8473412, firstName: 'Bryan', lastName: 'Little', team: 'WPG' },
    ],
  },
  {
    id: 'f20',
    players: [
      { id: 8475786, firstName: 'Zach', lastName: 'Hyman', team: 'TOR' },
      { id: 8476873, firstName: 'Mark', lastName: 'Jankowski', team: 'CGY' },
      { id: 8478472, firstName: 'Mathieu', lastName: 'Joseph', team: 'TBL' },
      { id: 8477953, firstName: 'Kasperi', lastName: 'Kapanen', team: 'TOR' },
      { id: 8475204, firstName: 'Brandon', lastName: 'Pirri', team: 'VGK' },
    ],
  },
  {
    id: 'f21',
    players: [
      { id: 8477935, firstName: 'Sam', lastName: 'Bennett', team: 'CGY' },
      { id: 8478046, firstName: 'Danton', lastName: 'Heinen', team: 'BOS' },
      { id: 8475810, firstName: 'Bryan', lastName: 'Rust', team: 'PIT' },
      { id: 8480023, firstName: 'Robert', lastName: 'Thomas', team: 'STL' },
      { id: 8474068, firstName: 'Kyle', lastName: 'Turris', team: 'NSH' },
    ],
  },
  {
    id: 'f22',
    players: [
      { id: 8474009, firstName: 'Nick', lastName: 'Bonino', team: 'NSH' },
      { id: 8475745, firstName: 'Charlie', lastName: 'Coyle', team: 'BOS' },
      { id: 8474586, firstName: 'Jordan', lastName: 'Eberle', team: 'NYI' },
      { id: 8474034, firstName: 'Patrick', lastName: 'Maroon', team: 'STL' },
      { id: 8471262, firstName: 'Carl', lastName: 'Soderberg', team: 'COL' },
    ],
  },
  {
    id: 'f23',
    players: [
      { id: 8476981, firstName: 'Josh', lastName: 'Anderson', team: 'CBJ' },
      { id: 8475231, firstName: 'Casey', lastName: 'Cizikas', team: 'NYI' },
      { id: 8475236, firstName: 'Cody', lastName: 'Eakin', team: 'VGK' },
      { id: 8477955, firstName: 'Jared', lastName: 'McCann', team: 'PIT' },
      { id: 8476925, firstName: 'Colton', lastName: 'Sissons', team: 'NSH' },
    ],
  },
  {
    id: 'f24',
    players: [
      { id: 8478512, firstName: 'Austin', lastName: 'Czarnik', team: 'CGY' },
      { id: 8475343, firstName: 'Nic', lastName: 'Dowd', team: 'WSH' },
      { id: 8471707, firstName: 'James', lastName: 'Neal', team: 'CGY' },
      { id: 8474190, firstName: 'Wayne', lastName: 'Simmonds', team: 'NSH' },
      { id: 8475834, firstName: 'Marcus', lastName: 'Sorensen', team: 'SJS' },
    ],
  },
  {
    id: 'd1',
    players: [
      { id: 8470613, firstName: 'Brent', lastName: 'Burns', team: 'SJS' },
      { id: 8474590, firstName: 'John', lastName: 'Carlson', team: 'WSH' },
      { id: 8470966, firstName: 'Mark', lastName: 'Giordano', team: 'CGY' },
      { id: 8475167, firstName: 'Victor', lastName: 'Hedman', team: 'TBL' },
      { id: 8474578, firstName: 'Erik', lastName: 'Karlsson', team: 'SJS' },
    ],
  },
  {
    id: 'd2',
    players: [
      { id: 8470834, firstName: 'Dustin', lastName: 'Byfuglien', team: 'WPG' },
      { id: 8474600, firstName: 'Roman', lastName: 'Josi', team: 'NSH' },
      { id: 8476792, firstName: 'Torey', lastName: 'Krug', team: 'BOS' },
      { id: 8471724, firstName: 'Kris', lastName: 'Letang', team: 'PIT' },
      { id: 8476853, firstName: 'Morgan', lastName: 'Rielly', team: 'TOR' },
    ],
  },
  {
    id: 'd3',
    players: [
      { id: 8475218, firstName: 'Mattias', lastName: 'Ekholm', team: 'NSH' },
      { id: 8475176, firstName: 'Ryan', lastName: 'Ellis', team: 'NSH' },
      { id: 8474151, firstName: 'Ryan', lastName: 'McDonagh', team: 'TBL' },
      { id: 8474056, firstName: 'P.K.', lastName: 'Subban', team: 'NSH' },
      { id: 8476885, firstName: 'Jacob', lastName: 'Trouba', team: 'WPG' },
    ],
  },
  {
    id: 'd4',
    players: [
      { id: 8475197, firstName: 'Tyson', lastName: 'Barrie', team: 'COL' },
      { id: 8475906, firstName: 'John', lastName: 'Klingberg', team: 'DAL' },
      { id: 8479325, firstName: 'Charlie', lastName: 'McAvoy', team: 'BOS' },
      { id: 8474565, firstName: 'Alex', lastName: 'Pietrangelo', team: 'STL' },
      { id: 8479410, firstName: 'Mikhail', lastName: 'Sergachev', team: 'TBL' },
    ],
  },
  {
    id: 'd5',
    players: [
      { id: 8474673, firstName: 'T.J.', lastName: 'Brodie', team: 'CGY' },
      { id: 8478396, firstName: 'Noah', lastName: 'Hanifin', team: 'CGY' },
      { id: 8477504, firstName: 'Josh', lastName: 'Morrissey', team: 'WPG' },
      { id: 8474602, firstName: 'Justin', lastName: 'Schultz', team: 'PIT' },
      { id: 8471873, firstName: 'Anton', lastName: 'Stralman', team: 'TBL' },
    ],
  },
  {
    id: 'd6',
    players: [
      { id: 8478407, firstName: 'Vince', lastName: 'Dunn', team: 'STL' },
      { id: 8477495, firstName: 'Seth', lastName: 'Jones', team: 'CBJ' },
      { id: 8477506, firstName: 'Ryan', lastName: 'Pulock', team: 'NYI' },
      { id: 8477220, firstName: 'Nate', lastName: 'Schmidt', team: 'VGK' },
      { id: 8478460, firstName: 'Zach', lastName: 'Werenski', team: 'CBJ' },
    ],
  },
  {
    id: 'd7',
    players: [
      { id: 8474581, firstName: 'Jake', lastName: 'Gardiner', team: 'TOR' },
      { id: 8476462, firstName: 'Dougie', lastName: 'Hamilton', team: 'CAR' },
      { id: 8474162, firstName: 'Jake', lastName: 'Muzzin', team: 'TOR' },
      { id: 8475200, firstName: 'Dmitry', lastName: 'Orlov', team: 'WSH' },
      { id: 8477447, firstName: 'Shea', lastName: 'Theodore', team: 'VGK' },
    ],
  },
  {
    id: 'd8',
    players: [
      { id: 8479482, firstName: 'Michal', lastName: 'Kempny', team: 'WSH' },
      { id: 8476525, firstName: 'Colin', lastName: 'Miller', team: 'VGK' },
      { id: 8476850, firstName: 'Ryan', lastName: 'Murray', team: 'CBJ' },
      { id: 8474574, firstName: 'Tyler', lastName: 'Myers', team: 'WPG' },
      {
        id: 8471709,
        firstName: 'Marc-Edouard',
        lastName: 'Vlasic',
        team: 'SJS',
      },
    ],
  },
  {
    id: 'd9',
    players: [
      { id: 8470601, firstName: 'Braydon', lastName: 'Coburn', team: 'TBL' },
      { id: 8475753, firstName: 'Justin', lastName: 'Faulk', team: 'CAR' },
      { id: 8471702, firstName: 'Matt', lastName: 'Niskanen', team: 'WSH' },
      { id: 8476892, firstName: 'Colton', lastName: 'Parayko', team: 'STL' },
      { id: 8477488, firstName: 'Brett', lastName: 'Pesce', team: 'CAR' },
    ],
  },
  {
    id: 'd10',
    players: [
      { id: 8478416, firstName: 'Erik', lastName: 'Cernak', team: 'TBL' },
      { id: 8475208, firstName: 'Brian', lastName: 'Dumoulin', team: 'PIT' },
      { id: 8474612, firstName: 'Travis', lastName: 'Hamonic', team: 'CGY' },
      { id: 8480036, firstName: 'Miro', lastName: 'Heiskanen', team: 'DAL' },
      { id: 8476958, firstName: 'Jaccob', lastName: 'Slavin', team: 'CAR' },
    ],
  },
  {
    id: 'd11',
    players: [
      { id: 8478397, firstName: 'Rasmus', lastName: 'Andersson', team: 'CGY' },
      { id: 8471958, firstName: 'Dan', lastName: 'Girardi', team: 'TBL' },
      { id: 8475181, firstName: 'Nick', lastName: 'Leddy', team: 'NYI' },
      { id: 8476902, firstName: 'Esa', lastName: 'Lindell', team: 'DAL' },
      { id: 8478038, firstName: 'Devon', lastName: 'Toews', team: 'NYI' },
    ],
  },
  {
    id: 'd12',
    players: [
      { id: 8475279, firstName: 'Ben', lastName: 'Chiarot', team: 'WPG' },
      { id: 8475455, firstName: 'Brenden', lastName: 'Dillon', team: 'SJS' },
      { id: 8476891, firstName: 'Matt', lastName: 'Grzelcyk', team: 'BOS' },
      { id: 8475324, firstName: 'Nick', lastName: 'Jensen', team: 'WSH' },
      { id: 8477969, firstName: 'Marcus', lastName: 'Pettersson', team: 'PIT' },
    ],
  },
  {
    id: 't1',
    teams: [
      {
        id: 'CGY',
        fullName: 'Calgary Flames',
        locationName: 'Calgary',
        teamName: 'Flames',
        goalies: [
          { id: 8469608, firstName: 'Mike', lastName: 'Smith' },
          { id: 8479496, firstName: 'David', lastName: 'Rittich' },
        ],
      },
      {
        id: 'NSH',
        fullName: 'Nashville Predators',
        locationName: 'Nashville',
        teamName: 'Predators',
        goalies: [
          { id: 8471469, firstName: 'Pekka', lastName: 'Rinne' },
          { id: 8477424, firstName: 'Juuse', lastName: 'Saros' },
        ],
      },
      {
        id: 'TBL',
        fullName: 'Tampa Bay Lightning',
        locationName: 'Tampa Bay',
        teamName: 'Lightning',
        goalies: [
          { id: 8476883, firstName: 'Andrei', lastName: 'Vasilevskiy' },
          { id: 8475839, firstName: 'Louis', lastName: 'Domingue' },
        ],
      },
      {
        id: 'WSH',
        fullName: 'Washington Capitals',
        locationName: 'Washington',
        teamName: 'Capitals',
        goalies: [
          { id: 8474651, firstName: 'Braden', lastName: 'Holtby' },
          { id: 8477831, firstName: 'Pheonix', lastName: 'Copley' },
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
        ],
      },
      {
        id: 'SJS',
        fullName: 'San Jose Sharks',
        locationName: 'San Jose',
        teamName: 'Sharks',
        goalies: [
          { id: 8474889, firstName: 'Martin', lastName: 'Jones' },
          { id: 8477180, firstName: 'Aaron', lastName: 'Dell' },
        ],
      },
      {
        id: 'STL',
        fullName: 'St. Louis Blues',
        locationName: 'St. Louis',
        teamName: 'Blues',
        goalies: [
          { id: 8476412, firstName: 'Jordan', lastName: 'Binnington' },
          { id: 8474596, firstName: 'Jake', lastName: 'Allen' },
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
      },
    ],
  },
  {
    id: 't3',
    teams: [
      {
        id: 'NYI',
        fullName: 'New York Islanders',
        locationName: 'New York',
        teamName: 'Islanders',
        goalies: [
          { id: 8475215, firstName: 'Robin', lastName: 'Lehner' },
          { id: 8471306, firstName: 'Thomas', lastName: 'Greiss' },
        ],
      },
      {
        id: 'PIT',
        fullName: 'Pittsburgh Penguins',
        locationName: 'Pittsburgh',
        teamName: 'Penguins',
        goalies: [
          { id: 8476899, firstName: 'Matt', lastName: 'Murray' },
          { id: 8479193, firstName: 'Casey', lastName: 'DeSmith' },
        ],
      },
      {
        id: 'TOR',
        fullName: 'Toronto Maple Leafs',
        locationName: 'Toronto',
        teamName: 'Maple Leafs',
        goalies: [
          { id: 8475883, firstName: 'Frederik', lastName: 'Andersen' },
          { id: 8474636, firstName: 'Michael', lastName: 'Hutchinson' },
        ],
      },
      {
        id: 'VGK',
        fullName: 'Vegas Golden Knights',
        locationName: 'Vegas',
        teamName: 'Golden Knights',
        goalies: [
          { id: 8470594, firstName: 'Marc-Andre', lastName: 'Fleury' },
          { id: 8476876, firstName: 'Malcolm', lastName: 'Subban' },
        ],
      },
    ],
  },
  {
    id: 't4',
    teams: [
      {
        id: 'CAR',
        fullName: 'Carolina Hurricanes',
        locationName: 'Carolina',
        teamName: 'Hurricanes',
        goalies: [
          { id: 8475852, firstName: 'Petr', lastName: 'Mrazek' },
          { id: 8470147, firstName: 'Curtis', lastName: 'McElhinney' },
        ],
      },
      {
        id: 'COL',
        fullName: 'Colorado Avalanche',
        locationName: 'Colorado',
        teamName: 'Avalanche',
        goalies: [
          { id: 8475831, firstName: 'Philipp', lastName: 'Grubauer' },
          { id: 8473575, firstName: 'Semyon', lastName: 'Varlamov' },
        ],
      },
      {
        id: 'CBJ',
        fullName: 'Columbus Blue Jackets',
        locationName: 'Columbus',
        teamName: 'Blue Jackets',
        goalies: [
          { id: 8475683, firstName: 'Sergei', lastName: 'Bobrovsky' },
          { id: 8476914, firstName: 'Joonas', lastName: 'Korpisalo' },
        ],
      },
      {
        id: 'DAL',
        fullName: 'Dallas Stars',
        locationName: 'Dallas',
        teamName: 'Stars',
        goalies: [
          { id: 8471750, firstName: 'Ben', lastName: 'Bishop' },
          { id: 8471418, firstName: 'Anton', lastName: 'Khudobin' },
        ],
      },
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
        id: 'CGY',
        fullName: 'Calgary Flames',
        locationName: 'Calgary',
        teamName: 'Flames',
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
        id: 'CBJ',
        fullName: 'Columbus Blue Jackets',
        locationName: 'Columbus',
        teamName: 'Blue Jackets',
      },
      {
        id: 'DAL',
        fullName: 'Dallas Stars',
        locationName: 'Dallas',
        teamName: 'Stars',
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
        id: 'SJS',
        fullName: 'San Jose Sharks',
        locationName: 'San Jose',
        teamName: 'Sharks',
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
