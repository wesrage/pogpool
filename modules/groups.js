export function filterGroups(groups, type) {
   return groups.filter(g => g.id[0] === type)
}

export default [
   {
      id: 'f1',
      players: [
         { id: 8476453, firstName: 'Nikita', lastName: 'Kucherov', team: 'TBL' },
         { id: 8471215, firstName: 'Evgeni', lastName: 'Malkin', team: 'PIT' },
         { id: 8473419, firstName: 'Brad', lastName: 'Marchand', team: 'BOS' },
         { id: 8474564, firstName: 'Steven', lastName: 'Stamkos', team: 'TBL' },
         { id: 8471218, firstName: 'Blake', lastName: 'Wheeler', team: 'WPG' },
      ],
   },
   {
      id: 'f2',
      players: [
         { id: 8471675, firstName: 'Sidney', lastName: 'Crosby', team: 'PIT' },
         { id: 8476887, firstName: 'Filip', lastName: 'Forsberg', team: 'NSH' },
         { id: 8473512, firstName: 'Claude', lastName: 'Giroux', team: 'PHI' },
         { id: 8473548, firstName: 'Phil', lastName: 'Kessel', team: 'PIT' },
         { id: 8476460, firstName: 'Mark', lastName: 'Scheifele', team: 'WPG' },
      ],
   },
   {
      id: 'f3',
      players: [
         { id: 8470638, firstName: 'Patrice', lastName: 'Bergeron', team: 'BOS' },
         { id: 8470612, firstName: 'Ryan', lastName: 'Getzlaf', team: 'ANA' },
         { id: 8476539, firstName: 'Jonathan', lastName: 'Marchessault', team: 'VGK' },
         { id: 8471214, firstName: 'Alex', lastName: 'Ovechkin', team: 'WSH' },
         { id: 8477956, firstName: 'David', lastName: 'Pastrnak', team: 'BOS' },
      ],
   },
   {
      id: 'f4',
      players: [
         { id: 8476448, firstName: 'William', lastName: 'Karlsson', team: 'VGK' },
         { id: 8475744, firstName: 'Evgeny', lastName: 'Kuznetsov', team: 'WSH' },
         { id: 8477492, firstName: 'Nathan', lastName: 'MacKinnon', team: 'COL' },
         { id: 8479318, firstName: 'Auston', lastName: 'Matthews', team: 'TOR' },
         { id: 8474161, firstName: 'Jakub', lastName: 'Voracek', team: 'PHI' },
      ],
   },
   {
      id: 'f5',
      players: [
         { id: 8478042, firstName: 'Viktor', lastName: 'Arvidsson', team: 'NSH' },
         { id: 8475791, firstName: 'Taylor', lastName: 'Hall', team: 'NJD' },
         { id: 8471685, firstName: 'Anze', lastName: 'Kopitar', team: 'LAK' },
         { id: 8479339, firstName: 'Patrik', lastName: 'Laine', team: 'WPG' },
         { id: 8478550, firstName: 'Artemi', lastName: 'Panarin', team: 'CBJ' },
      ],
   },
   {
      id: 'f6',
      players: [
         { id: 8473563, firstName: 'Nicklas', lastName: 'Backstrom', team: 'WSH' },
         { id: 8476461, firstName: 'Sean', lastName: 'Couturier', team: 'PHI' },
         { id: 8474102, firstName: 'David', lastName: 'Perron', team: 'VGK' },
         { id: 8478010, firstName: 'Brayden', lastName: 'Point', team: 'TBL' },
         { id: 8475191, firstName: 'Reilly', lastName: 'Smith', team: 'VGK' },
      ],
   },
   {
      id: 'f7',
      players: [
         { id: 8476826, firstName: 'Yanni', lastName: 'Gourde', team: 'TBL' },
         { id: 8478483, firstName: 'Mitchell', lastName: 'Marner', team: 'TOR' },
         { id: 8476483, firstName: 'Rickard', lastName: 'Rakell', team: 'ANA' },
         { id: 8478420, firstName: 'Mikko', lastName: 'Rantanen', team: 'COL' }, 
         { id: 8470595, firstName: 'Eric', lastName: 'Staal', team: 'MIN' },
      ],
   },
   {
      id: 'f8',
      players: [
         { id: 8478398, firstName: 'Kyle', lastName: 'Connor', team: 'WPG' },
         { id: 8476460, firstName: 'Nikolaj', lastName: 'Ehlers', team: 'WPG' },
         { id: 8475793, firstName: 'Ryan', lastName: 'Johansen', team: 'NSH' },
         { id: 8476468, firstName: 'J.T.', lastName: 'Miller', team: 'TBL' },
         { id: 8474068, firstName: 'Kyle', lastName: 'Turris', team: 'NSH' },
      ],
   },
   {
      id: 'f9',
      players: [
         { id: 8470604, firstName: 'Jeff', lastName: 'Carter', team: 'LAK' },
         { id: 8474053, firstName: 'Logan', lastName: 'Couture', team: 'SJS' },
         { id: 8477939, firstName: 'William', lastName: 'Nylander', team: 'TOR' },
         { id: 8470794, firstName: 'Joe', lastName: 'Pavelski', team: 'SJS' },
         { id: 8471669, firstName: 'Paul', lastName: 'Stastny', team: 'WPG' },
      ],
   },
   {
      id: 'f10',
      players: [
         { id: 8475798, firstName: 'Mikael', lastName: 'Granlund', team: 'MIN' },
         { id: 8475287, firstName: 'Erik', lastName: 'Haula', team: 'VGK' },
         { id: 8471276, firstName: 'David', lastName: 'Krejci', team: 'BOS' },
         { id: 8475225, firstName: 'Craig', lastName: 'Smith', team: 'NSH' },
         { id: 8466138, firstName: 'Joe', lastName: 'Thornton', team: 'SJS' },
      ],
   },
   {
      id: 'f11',
      players: [
         { id: 8474715, firstName: 'Cam', lastName: 'Atkinson', team: 'CBJ' },
         { id: 8477987, firstName: 'Ryan', lastName: 'Donato', team: 'BOS' },
         { id: 8477942, firstName: 'Kevin', lastName: 'Fiala', team: 'NSH' },
         { id: 8471887, firstName: 'Patric', lastName: 'Hornqvist', team: 'PIT' },
         { id: 8476292, firstName: 'Ondrej', lastName: 'Palat', team: 'TBL' },
      ],
   },
   {
      id: 'f12',
      players: [
         { id: 8475169, firstName: 'Evander', lastName: 'Kane', team: 'SJS' },
         { id: 8475172, firstName: 'Nazem', lastName: 'Kadri', team: 'TOR' },
         { id: 8470621, firstName: 'Corey', lastName: 'Perry', team: 'ANA' },
         { id: 8474037, firstName: 'James', lastName: 'van Riemsdyk', team: 'TOR' },
         { id: 8475722, firstName: 'Jason', lastName: 'Zucker', team: 'MIN' },        
      ],
   },
   {
      id: 'f13',
      players: [
         { id: 8478498, firstName: 'Jake', lastName: 'DeBrusk', team: 'BOS' },
         { id: 8478046, firstName: 'Danton', lastName: 'Heinen', team: 'BOS' },
         { id: 8474870, firstName: 'Tyler', lastName: 'Johnson', team: 'TBL' },
         { id: 8471707, firstName: 'James', lastName: 'Neal', team: 'VGK' },
         { id: 8470598, firstName: 'Thomas', lastName: 'Vanek', team: 'CBJ' },
      ],
   },
   {
      id: 'f14',
      players: [
         { id: 8473544, firstName: 'Derick', lastName: 'Brassard', team: 'PIT' },
         { id: 8470606, firstName: 'Dustin', lastName: 'Brown', team: 'LAK' },
         { id: 8478519, firstName: 'Anthony', lastName: 'Cirelli', team: 'TBL' },
         { id: 8477404, firstName: 'Jake', lastName: 'Guentzel', team: 'PIT' },
         { id: 8471698, firstName: 'T.J.', lastName: 'Oshie', team: 'WSH' },
      ],
   },
   {
      id: 'f15',
      players: [
         { id: 8470655, firstName: 'David', lastName: 'Backes', team: 'BOS' },
         { id: 8474641, firstName: 'Adam', lastName: 'Henrique', team: 'ANA' },
         { id: 8473986, firstName: 'Alex', lastName: 'Killorn', team: 'TBL' },
         { id: 8476455, firstName: 'Gabriel', lastName: 'Landeskog', team: 'COL' },
         { id: 8473618, firstName: 'Mathieu', lastName: 'Perreault', team: 'WPG' },
      ],
   },
   {
      id: 'f16',
      players: [
         { id: 8479400, firstName: 'Pierre-Luc', lastName: 'Dubois', team: 'CBJ' },
         { id: 8475714, firstName: 'Calle', lastName: 'Jarnkrok', team: 'NSH' },
         { id: 8473412, firstName: 'Bryan', lastName: 'Little', team: 'WPG' },
         { id: 8466139, firstName: 'Patrick', lastName: 'Marleau', team: 'TOR' },
         { id: 8474190, firstName: 'Wayne', lastName: 'Simmonds', team: 'PHI' },
      ],
   },
   {
      id: 'f17',
      players: [
         { id: 8476881, firstName: 'Tomas', lastName: 'Hertl', team: 'SJS' },
         { id: 8478131, firstName: 'Ondrej', lastName: 'Kase', team: 'ANA' },
         { id: 8478439, firstName: 'Travis', lastName: 'Konecny', team: 'PHI' },
         { id: 8475151, firstName: 'Kyle', lastName: 'Palmieri', team: 'NJD' },
         { id: 8475810, firstName: 'Bryan', lastName: 'Rust', team: 'PIT' },
      ],
   },
   {
      id: 'f18',
      players: [
         { id: 8475098, firstName: 'Tyler', lastName: 'Bozak', team: 'TOR' },
         { id: 8470041, firstName: 'Rick', lastName: 'Nash', team: 'BOS' },
         { id: 8474062, firstName: 'Riley', lastName: 'Nash', team: 'BOS' },
         { id: 8470610, firstName: 'Zach', lastName: 'Parise', team: 'MIN' },
         { id: 8477505, firstName: 'Alexander', lastName: 'Wennberg', team: 'CBJ' },
      ],
   },
   {
      id: 'f19',
      players: [
         { id: 8480002, firstName: 'Nico', lastName: 'Hischier', team: 'NJD' },
         { id: 8475786, firstName: 'Zach', lastName: 'Hyman', team: 'TOR' },
         { id: 8478099, firstName: 'Kevin', lastName: 'Labanc', team: 'SJS' },
         { id: 8475164, firstName: 'Jakob', lastName: 'Silfverberg', team: 'ANA' },
         { id: 8475726, firstName: 'Tyler', lastName: 'Toffoli', team: 'LAK' },
      ],
   },
   {
      id: 'f20',
      players: [
         { id: 8475745, firstName: 'Charlie', lastName: 'Coyle', team: 'MIN' },
         { id: 8477451, firstName: 'Ryan', lastName: 'Hartman', team: 'NSH' },
         { id: 8476392, firstName: 'Adam', lastName: 'Lowry', team: 'WPG' },
         { id: 8478458, firstName: 'Jack', lastName: 'Roslovic', team: 'WPG' },
         { id: 8477949, firstName: 'Alex', lastName: 'Tuch', team: 'VGK' },
      ],
   },
   {
      id: 'f21',
      players: [
         { id: 8477416, firstName: 'Oliver', lastName: 'Bjorkstrand', team: 'CBJ' },
         { id: 8474571, firstName: 'Mikkel', lastName: 'Boedker', team: 'SJS' },
         { id: 8474189, firstName: 'Lars', lastName: 'Eller', team: 'WSH' },
         { id: 8469459, firstName: 'Mikko', lastName: 'Koivu', team: 'MIN' },
         { id: 8476919, firstName: 'Chris', lastName: 'Tierney', team: 'SJS' },
      ],
   },
   {
      id: 'f22',
      players: [
         { id: 8476981, firstName: 'Josh', lastName: 'Anderson', team: 'CBJ' },
         { id: 8475820, firstName: 'Joonas', lastName: 'Donskoi', team: 'SJS' },
         { id: 8468486, firstName: 'Scott', lastName: 'Hartnell', team: 'NSH' },
         { id: 8474034, firstName: 'Patrick', lastName: 'Maroon', team: 'NJD' },
         { id: 8475193, firstName: 'Tomas', lastName: 'Tatar', team: 'VGK' },
      ],
   },
   {
      id: 'f23',
      players: [
         { id: 8477444, firstName: 'Andre', lastName: 'Burakovsky', team: 'WSH' },
         { id: 8471699, firstName: 'Andrew', lastName: 'Cogliano', team: 'ANA' },
         { id: 8473422, firstName: 'Nick', lastName: 'Foligno', team: 'CBJ' },
         { id: 8475799, firstName: 'Nino', lastName: 'Niederreiter', team: 'MIN' },
         { id: 8476871, firstName: 'Tanner', lastName: 'Pearson', team: 'LAK' },
      ],
   },
   {
      id: 'f24',
      players: [
         { id: 8474009, firstName: 'Nick', lastName: 'Bonino', team: 'NSH' },
         { id: 8476432, firstName: 'Boone', lastName: 'Jenner', team: 'CBJ' },
         { id: 8478414, firstName: 'Timo', lastName: 'Meier', team: 'SJS' },
         { id: 8477839, firstName: 'Conor', lastName: 'Sheary', team: 'PIT' },
         { id: 8476880, firstName: 'Tom', lastName: 'Wilson', team: 'WSH' },
      ],
   },
   {
      id: 'd1',
      players: [
         { id: 8475176, firstName: 'Ryan', lastName: 'Ellis', team: 'NSH' },
         { id: 8475167, firstName: 'Victor', lastName: 'Hedman', team: 'TBL' },
         { id: 8474600, firstName: 'Roman', lastName: 'Josi', team: 'NSH' }, 
         { id: 8476792, firstName: 'Torey', lastName: 'Krug', team: 'BOS' },
         { id: 8474056, firstName: 'P.K.', lastName: 'Subban', team: 'NSH' },
      ],
   },
   {
      id: 'd2',
      players: [
         { id: 8470613, firstName: 'Brent', lastName: 'Burns', team: 'SJS' },
         { id: 8470834, firstName: 'Dustin', lastName: 'Byfuglien', team: 'WPG' },
         { id: 8474590, firstName: 'John', lastName: 'Carlson', team: 'WSH' },
         { id: 8476906, firstName: 'Shayne', lastName: 'Gostisbehere', team: 'PHI' },
         { id: 8477495, firstName: 'Seth', lastName: 'Jones', team: 'CBJ' },
      ],
   },
   {
      id: 'd3',
      players: [
         { id: 8474581, firstName: 'Jake', lastName: 'Gardiner', team: 'TOR' },
         { id: 8471724, firstName: 'Kris', lastName: 'Letang', team: 'PIT' },
         { id: 8479325, firstName: 'Charlie', lastName: 'McAvoy', team: 'BOS' },
         { id: 8476853, firstName: 'Morgan', lastName: 'Rielly', team: 'TOR' },
         { id: 8479410, firstName: 'Mikhail', lastName: 'Sergachev', team: 'TBL' },
      ],
   },
   {
      id: 'd4',
      players: [
         { id: 8475197, firstName: 'Tyson', lastName: 'Barrie', team: 'COL' },
         { id: 8474563, firstName: 'Drew', lastName: 'Doughty', team: 'LAK' },
         { id: 8476856, firstName: 'Mathew', lastName: 'Dumba', team: 'MIN' },
         { id: 8474151, firstName: 'Ryan', lastName: 'McDonagh', team: 'TBL' },
         { id: 8476525, firstName: 'Colin', lastName: 'Miller', team: 'VGK' },
      ],
   },
   {
      id: 'd5',
      players: [
         { id: 8475218, firstName: 'Mattias', lastName: 'Ekholm', team: 'NSH' },
         { id: 8474162, firstName: 'Jake', lastName: 'Muzzin', team: 'LAK' },
         { id: 8477220, firstName: 'Nate', lastName: 'Schmidt', team: 'VGK' },
         { id: 8474716, firstName: 'Jared', lastName: 'Spurgeon', team: 'MIN' },
         { id: 8477447, firstName: 'Shea', lastName: 'Theodore', team: 'VGK' },
      ],
   },
   {
      id: 'd6',
      players: [
         { id: 8475764, firstName: 'Cam', lastName: 'Fowler', team: 'ANA' },
         { id: 8474574, firstName: 'Tyler', lastName: 'Myers', team: 'WPG' },
         { id: 8478500, firstName: 'Ivan', lastName: 'Provorov', team: 'PHI' },
         { id: 8476885, firstName: 'Jacob', lastName: 'Trouba', team: 'WPG' },
         { id: 8478460, firstName: 'Zach', lastName: 'Werenski', team: 'CBJ' },
      ],
   },
   {
      id: 'd7',
      players: [
         { id: 8474027, firstName: 'Justin', lastName: 'Braun', team: 'SJS' },
         { id: 8476854, firstName: 'Hampus', lastName: 'Lindholm', team: 'ANA' },
         { id: 8476312, firstName: 'Josh', lastName: 'Manson', team: 'ANA' },
         { id: 8471702, firstName: 'Matt', lastName: 'Niskanen', team: 'WSH' },
         { id: 8474602, firstName: 'Justin', lastName: 'Schultz', team: 'PIT' },
      ],
   },
   {
      id: 'd8',
      players: [
         { id: 8477355, firstName: 'Will', lastName: 'Butcher', team: 'NJD' },
         { id: 8465009, firstName: 'Zdeno', lastName: 'Chara', team: 'BOS' },
         { id: 8477986, firstName: 'Brandon', lastName: 'Montour', team: 'ANA' },
         { id: 8475200, firstName: 'Dmitry', lastName: 'Orlov', team: 'WSH' },
         { id: 8471709, firstName: 'Marc-Edouard', lastName: 'Vlasic', team: 'SJS' },
      ],
   },
   {
      id: 'd9',
      players: [
         { id: 8478408, firstName: 'Travis', lastName: 'Dermott', team: 'TOR' },
         { id: 8476874, firstName: 'Olli', lastName: 'Maatta', team: 'PIT' },
         { id: 8477504, firstName: 'Josh', lastName: 'Morrissey', team: 'WPG' },
         { id: 8470602, firstName: 'Dion', lastName: 'Phaneuf', team: 'LAK' },
         { id: 8475222, firstName: 'Sami', lastName: 'Vatanen', team: 'NJD' },
      ],
   },
   {
      id: 'd10',
      players: [
         { id: 8475455, firstName: 'Brenden', lastName: 'Dillon', team: 'SJS' },
         { id: 8468674, firstName: 'Deryk', lastName: 'Engelland', team: 'VGK' },
         { id: 8471958, firstName: 'Dan', lastName: 'Girardi', team: 'TBL' },
         { id: 8468493, firstName: 'Ron', lastName: 'Hainsey', team: 'TOR' },
         { id: 8471873, firstName: 'Anton', lastName: 'Stralman', team: 'TBL' },
      ],
   },
   {
      id: 'd11',
      players: [
         { id: 8476463, firstName: 'Jonas', lastName: 'Brodin', team: 'MIN' },
         { id: 8479398, firstName: 'Samuel', lastName: 'Girard', team: 'COL' },
         { id: 8476891, firstName: 'Matt', lastName: 'Grzelcyk', team: 'BOS' },
         { id: 8474207, firstName: 'Nick', lastName: 'Holden', team: 'BOS' },
         { id: 8474166, firstName: 'Alec', lastName: 'Martinez', team: 'LAK'},
      ],
   },
   {
      id: 'd12',
      players: [
         { id: 8470601, firstName: 'Braydon', lastName: 'Coburn', team: 'TBL' },
         { id: 8475208, firstName: 'Brian', lastName: 'Dumoulin', team: 'PIT' },
         { id: 8473446, firstName: 'Erik', lastName: 'Johnson', team: 'COL' },
         { id: 8476467, firstName: 'Jamie', lastName: 'Oleksiak', team: 'PIT' },
         { id: 8476923, firstName: 'Damon', lastName: 'Severson', team: 'NJD' },
      ],
   },
   {
      id: 't1',
      teams: [
         {
            id: 'BOS',
            fullName: 'Boston Bruins',
            locationName: 'Boston',
            teamName: 'Bruins',
            goalies: [
               { firstName: 'Tuukka', lastName: 'Rask' },
               { firstName: 'Anton', lastName: 'Khudobin' },
            ],
         },
         {
            id: 'NSH',
            fullName: 'Nashville Predators',
            locationName: 'Nashville',
            teamName: 'Predators',
            goalies: [
               { firstName: 'Pekka', lastName: 'Rinne' },
               { firstName: 'Juuse', lastName: 'Saros' },
            ],
         },
         {
            id: 'TBL',
            fullName: 'Tampa Bay Lightning',
            locationName: 'Tampa Bay',
            teamName: 'Lightning',
            goalies: [
               { firstName: 'Andrei', lastName: 'Vasilevskiy' },
               { firstName: 'Louis', lastName: 'Domingue' },
            ],
         },
         {
            id: 'WPG',
            fullName: 'Winnipeg Jets',
            lastName: 'Winnipeg',
            teamName: 'Jets',
            goalies: [
               { firstName: 'Connor', lastName: 'Hellebuyck' },
               { firstName: 'Steve', lastName: 'Mason' },
            ],
         },
      ],
   },
   {
      id: 't2',
      teams: [
         {
            id: 'PIT',
            fullName: 'Pittsburgh Penguins',
            locationName: 'Pittsburgh',
            teamName: 'Penguins',
            goalies: [
               { firstName: 'Matt', lastName: 'Murray' },
               { firstName: 'Tristan', lastName: 'Jarry' },
            ],
         },
         {
            id: 'TOR',
            fullName: 'Toronto Maple Leafs',
            locationName: 'Toronto',
            teamName: 'Maple Leafs',
            goalies: [
               { firstName: 'Frederik', lastName: 'Andersen' },
               { firstName: 'Curtis', lastName: 'McElhinney' },
            ],
         },
         {
            id: 'VGK',
            fullName: 'Vegas Golden Knights',
            locationName: 'Vegas',
            teamName: 'Golden Knights',
            goalies: [
               { firstName: 'Marc-Andre', lastName: 'Fleury' },
               { firstName: 'Malcolm', lastName: 'Subban' },
            ],
         },
         {
            id: 'WSH',
            fullName: 'Washington Capitals',
            locationName: 'Washington',
            teamName: 'Capitals',
            goalies: [
               { firstName: 'Braden', lastName: 'Holtby' },
               { firstName: 'Philipp', lastName: 'Grubauer' },
            ],
         },
      ],
   },
   {
      id: 't3',
      teams: [
         {
            id: 'ANA',
            fullName: 'Anaheim Ducks',
            locationName: 'Anaheim',
            teamName: 'Ducks',
            goalies: [
               { firstName: 'John', lastName: 'Gibson' },
               { firstName: 'Ryan', lastName: 'Miller' },
            ],
         },
         {
            id: 'CBJ',
            fullName: 'Columbus Blue Jackets',
            locationName: 'Columbus',
            teamName: 'Blue Jackets',
            goalies: [
               { firstName: 'Sergei', lastName: 'Bobrovsky' },
               { firstName: 'Joonas', lastName: 'Korpisalo' },
            ],
         },
         {
            id: 'PHI',
            fullName: 'Philadelphia Flyers',
            locationName: 'Philadelphia',
            teamName: 'Flyers',
            goalies: [
               { firstName: 'Brian', lastName: 'Elliott' },
               { firstName: 'Petr', lastName: 'Mrazek' },
            ],
         },
         {
            id: 'SJS',
            fullName: 'San Jose Sharks',
            locationName: 'San Jose',
            teamName: 'Sharks',
            goalies: [
               { firstName: 'Martin', lastName: 'Jones' },
               { firstName: 'Aaron', lastName: 'Dell' },
            ],
         },
      ],
   },
   {
      id: 't4',
      teams: [
         {
            id: 'COL',
            fullName: 'Colorado Avalanche',
            locationName: 'Colorado',
            teamName: 'Avalanche',
            goalies: [
               { firstName: 'Jonathan', lastName: 'Bernier' },
               { firstName: 'Andrew', lastName: 'Hammond' },
            ],
         },
         {
            id: 'LAK',
            fullName: 'Los Angeles Kings',
            locationName: 'Los Angeles',
            teamName: 'Kings',
            goalies: [
               { firstName: 'Jonathan', lastName: 'Quick' },
               { firstName: 'Jack', lastName: 'Campbell' },
            ],
         },
         {
            id: 'MIN',
            fullName: 'Minnesota Wild',
            locationName: 'Minnesota',
            teamName: 'Wild',
            goalies: [
               { firstName: 'Devan', lastName: 'Dubnyk' },
               { firstName: 'Darcy', lastName: 'Kuemper' },
            ],
         },
         {
            id: 'NJD',
            fullName: 'New Jersey Devils',
            locationName: 'New Jersey',
            teamName: 'Devils',
            goalies: [
               { firstName: 'Keith', lastName: 'Kinkaid' },
               { firstName: 'Cory', lastName: 'Schneider' },
            ],
         },
      ],
   },
   {
      id: 'sc',
      teams: [
         { id: 'ANA', fullName: 'Anaheim Ducks', locationName: 'Anaheim', teamName: 'Ducks' },
         { id: 'BOS', fullName: 'Boston Bruins', locationName: 'Boston', teamName: 'Bruins' },
         { id: 'COL', fullName: 'Colorado Avalanche', locationName: 'Colorado', teamName: 'Avalanche' },
         { id: 'CBJ', fullName: 'Columbus Blue Jackets', locationName: 'Columbus', teamName: 'Blue Jackets' },
         { id: 'LAK', fullName: 'Los Angeles Kings', locationName: 'Los Angeles', teamName: 'Kings' },
         { id: 'MIN', fullName: 'Minnesota Wild', locationName: 'Minnesota', teamName: 'Wild' },
         { id: 'NSH', fullName: 'Nashville Predators', locationName: 'Nashville', teamName: 'Predators' },
         { id: 'NJD', fullName: 'New Jersey Devils', locationName: 'New Jersey', teamName: 'Devils' },
         { id: 'PHI', fullName: 'Philadelphia Flyers', locationName: 'Philadelphia', teamName: 'Flyers' },
         { id: 'PIT', fullName: 'Pittsburgh Penguins', locationName: 'Pittsburgh', teamName: 'Penguins' },
         { id: 'SJS', fullName: 'San Jose Sharks', locationName: 'San Jose', teamName: 'Sharks' },
         { id: 'TBL', fullName: 'Tampa Bay Lightning', locationName: 'Tampa Bay', teamName: 'Lightning' },
         { id: 'TOR', fullName: 'Toronto Maple Leafs', locationName: 'Toronto', teamName: 'Maple Leafs' },
         { id: 'VGK', fullName: 'Vegas Golden Knights', locationName: 'Vegas', teamName: 'Golden Knights' },
         { id: 'WSH', fullName: 'Washington Capitals', locationName: 'Washington', teamName: 'Capitals' },
         { id: 'WPG', fullName: 'Winnipeg Jets', locationName: 'Winnipeg', teamName: 'Jets' },
      ],
   },
]
