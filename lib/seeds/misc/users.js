module.exports = db => {
  const users = [
    {
      name: 'Webster Weeks',
      company: 'Viocular',
      email: 'websterweeks@viocular.com',
      phone: '+1 (969) 524-3532',
      address: '168 Elmwood Avenue, Utting, Arkansas, 32042',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Sherry Cooley',
      company: 'Frolix',
      email: 'sherrycooley@frolix.com',
      phone: '+1 (801) 527-2536',
      address: '612 Jackson Place, Idledale, Colorado, 67881',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Sutton Peters',
      company: 'Bristo',
      email: 'suttonpeters@bristo.com',
      phone: '+1 (879) 413-2267',
      address: '825 Lafayette Walk, Beason, Massachusetts, 22579',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Hughes Lara',
      company: 'Kinetica',
      email: 'hugheslara@kinetica.com',
      phone: '+1 (943) 566-3552',
      address: '523 Tudor Terrace, Kenmar, Vermont, 50362',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Christian Crawford',
      company: 'Glasstep',
      email: 'christiancrawford@glasstep.com',
      phone: '+1 (940) 562-2379',
      address: '923 Buffalo Avenue, Hamilton, Maryland, 49960',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Elva Hess',
      company: 'Gynko',
      email: 'elvahess@gynko.com',
      phone: '+1 (981) 500-2073',
      address: '130 Lawton Street, Lindcove, Maine, 64794',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Glenna Bradshaw',
      company: 'Vetron',
      email: 'glennabradshaw@vetron.com',
      phone: '+1 (809) 542-2698',
      address: '432 Kosciusko Street, Steinhatchee, North Dakota, 66446',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Britney Sanchez',
      company: 'Decratex',
      email: 'britneysanchez@decratex.com',
      phone: '+1 (858) 429-2206',
      address: '951 Love Lane, Farmers, Arizona, 41644',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Kelly Rasmussen',
      company: 'Skybold',
      email: 'kellyrasmussen@skybold.com',
      phone: '+1 (819) 401-2945',
      address: '411 Rochester Avenue, Wolcott, Puerto Rico, 11540',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Nina Horton',
      company: 'Prowaste',
      email: 'ninahorton@prowaste.com',
      phone: '+1 (859) 402-3018',
      address: '595 India Street, Gila, Michigan, 19501',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Herrera Pace',
      company: 'Comvex',
      email: 'herrerapace@comvex.com',
      phone: '+1 (948) 421-3983',
      address: '438 Shale Street, Eden, Ohio, 18107',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Lorena Leblanc',
      company: 'Ontality',
      email: 'lorenaleblanc@ontality.com',
      phone: '+1 (818) 461-3062',
      address: '861 Keen Court, Fairmount, New Jersey, 71474',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Ginger Mcmahon',
      company: 'Skinserve',
      email: 'gingermcmahon@skinserve.com',
      phone: '+1 (920) 480-2878',
      address: '302 Empire Boulevard, Volta, Florida, 62725',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Larson Franks',
      company: 'Comcur',
      email: 'larsonfranks@comcur.com',
      phone: '+1 (868) 416-2889',
      address: '836 Homecrest Court, Byrnedale, Tennessee, 62872',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Bettie Farmer',
      company: 'Kengen',
      email: 'bettiefarmer@kengen.com',
      phone: '+1 (858) 442-3405',
      address: '147 McKinley Avenue, Berlin, District Of Columbia, 18400',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Darcy Booker',
      company: 'Manglo',
      email: 'darcybooker@manglo.com',
      phone: '+1 (903) 561-2872',
      address: '205 Pioneer Street, Highland, New Mexico, 78918',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Paul Montoya',
      company: 'Stockpost',
      email: 'paulmontoya@stockpost.com',
      phone: '+1 (955) 413-2892',
      address: '313 National Drive, Freeburn, Wisconsin, 38567',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Levy Mckee',
      company: 'Acruex',
      email: 'levymckee@acruex.com',
      phone: '+1 (985) 550-3996',
      address: '714 Roebling Street, Troy, Virginia, 98278',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Barnes Nielsen',
      company: 'Eplode',
      email: 'barnesnielsen@eplode.com',
      phone: '+1 (875) 563-3183',
      address: '563 Lloyd Street, Gordon, Indiana, 91142',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Saundra Boone',
      company: 'Optyk',
      email: 'saundraboone@optyk.com',
      phone: '+1 (986) 568-3934',
      address: '611 Roosevelt Court, Babb, Marshall Islands, 17016',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Russell Cole',
      company: 'Bluegrain',
      email: 'russellcole@bluegrain.com',
      phone: '+1 (909) 420-3058',
      address: '939 Herzl Street, Mapletown, Mississippi, 22183',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Mayra Boyd',
      company: 'Assitia',
      email: 'mayraboyd@assitia.com',
      phone: '+1 (831) 478-2271',
      address: '554 Stone Avenue, Riner, Texas, 46106',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Marsha Myers',
      company: 'Omatom',
      email: 'marshamyers@omatom.com',
      phone: '+1 (971) 445-3958',
      address: '548 Schaefer Street, Bourg, Kentucky, 75569',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Dee Mosley',
      company: 'Combogene',
      email: 'deemosley@combogene.com',
      phone: '+1 (902) 526-2143',
      address: '247 Glendale Court, Wheaton, Connecticut, 97418',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Carey Graham',
      company: 'Ohmnet',
      email: 'careygraham@ohmnet.com',
      phone: '+1 (997) 445-2895',
      address: '364 Oriental Boulevard, Leyner, Idaho, 90842',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Moss Hicks',
      company: 'Cubix',
      email: 'mosshicks@cubix.com',
      phone: '+1 (878) 436-2808',
      address: '180 Locust Avenue, Celeryville, Kansas, 78720',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Vaughan Whitley',
      company: 'Viagrand',
      email: 'vaughanwhitley@viagrand.com',
      phone: '+1 (815) 463-2243',
      address: '351 Pierrepont Street, Dennard, Nevada, 51828',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Nichols Mclaughlin',
      company: 'Pasturia',
      email: 'nicholsmclaughlin@pasturia.com',
      phone: '+1 (821) 470-2925',
      address: '281 Vanderveer Place, Maury, Washington, 95940',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Laverne Rowe',
      company: 'Phormula',
      email: 'lavernerowe@phormula.com',
      phone: '+1 (905) 553-3323',
      address: '617 Grove Place, Sunriver, Hawaii, 44252',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Natalie Albert',
      company: 'Equicom',
      email: 'nataliealbert@equicom.com',
      phone: '+1 (913) 480-3153',
      address: '536 Sedgwick Street, Nadine, Iowa, 84120',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Candice Hensley',
      company: 'Telpod',
      email: 'candicehensley@telpod.com',
      phone: '+1 (992) 534-3476',
      address: '185 Aberdeen Street, Norris, Georgia, 21026',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Patton Dickson',
      company: 'Oronoko',
      email: 'pattondickson@oronoko.com',
      phone: '+1 (991) 483-2126',
      address: '685 Newton Street, Fulford, Alaska, 82322',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Mara Chapman',
      company: 'Conjurica',
      email: 'marachapman@conjurica.com',
      phone: '+1 (983) 403-2674',
      address: '524 Heath Place, Herald, New Hampshire, 23489',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Ila Chase',
      company: 'Avit',
      email: 'ilachase@avit.com',
      phone: '+1 (823) 547-3499',
      address: '349 Etna Street, Cetronia, Missouri, 72007',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Brady Lawson',
      company: 'Geekus',
      email: 'bradylawson@geekus.com',
      phone: '+1 (856) 423-3603',
      address: '446 Highland Place, Ladera, Illinois, 38250',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Walls Chavez',
      company: 'Martgo',
      email: 'wallschavez@martgo.com',
      phone: '+1 (950) 506-2336',
      address: '632 Bowne Street, Bartonsville, Wyoming, 73129',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Montgomery Kirkland',
      company: 'Eclipsent',
      email: 'montgomerykirkland@eclipsent.com',
      phone: '+1 (893) 453-2256',
      address: '588 Desmond Court, Guthrie, Oregon, 15727',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Gayle Carlson',
      company: 'Flotonic',
      email: 'gaylecarlson@flotonic.com',
      phone: '+1 (872) 526-3969',
      address: '466 Beverly Road, Williston, South Carolina, 52101',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Antoinette Stout',
      company: 'Blanet',
      email: 'antoinettestout@blanet.com',
      phone: '+1 (859) 518-2997',
      address: '425 Indiana Place, Smeltertown, American Samoa, 56023',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Violet Martin',
      company: 'Zillan',
      email: 'violetmartin@zillan.com',
      phone: '+1 (955) 538-2766',
      address: '151 Canarsie Road, Cawood, South Dakota, 82720',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Moore Workman',
      company: 'Nixelt',
      email: 'mooreworkman@nixelt.com',
      phone: '+1 (894) 423-2080',
      address: '181 Bliss Terrace, Goldfield, New York, 21304',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Beulah Cleveland',
      company: 'Medifax',
      email: 'beulahcleveland@medifax.com',
      phone: '+1 (922) 490-3897',
      address: '413 Brown Street, Kohatk, Utah, 99106',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Hopkins Walls',
      company: 'Dyno',
      email: 'hopkinswalls@dyno.com',
      phone: '+1 (980) 522-2241',
      address: '987 Ridge Court, Gardiner, Montana, 31400',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Watson Ingram',
      company: 'Quonata',
      email: 'watsoningram@quonata.com',
      phone: '+1 (890) 590-2897',
      address: '216 Myrtle Avenue, Madrid, Louisiana, 53293',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Diana Colon',
      company: 'Aquoavo',
      email: 'dianacolon@aquoavo.com',
      phone: '+1 (926) 485-3312',
      address: '187 Vine Street, Martinsville, California, 27918',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Shawn Wyatt',
      company: 'Accidency',
      email: 'shawnwyatt@accidency.com',
      phone: '+1 (996) 585-3589',
      address: '813 Kings Place, Dunlo, Palau, 71499',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Mercedes Lawrence',
      company: 'Digigen',
      email: 'mercedeslawrence@digigen.com',
      phone: '+1 (865) 544-2440',
      address: '494 Forrest Street, Northchase, Rhode Island, 66473',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Juanita Macdonald',
      company: 'Terrago',
      email: 'juanitamacdonald@terrago.com',
      phone: '+1 (890) 596-2323',
      address: '803 Navy Walk, Coral, Minnesota, 57824',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Terry Reed',
      company: 'Acium',
      email: 'terryreed@acium.com',
      phone: '+1 (851) 502-2602',
      address: '931 Dikeman Street, Faywood, Guam, 29063',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    },
    {
      name: 'Emily Armstrong',
      company: 'Accusage',
      email: 'emilyarmstrong@accusage.com',
      phone: '+1 (939) 484-2731',
      address: '511 Fairview Place, Magnolia, Alabama, 35522',
      photo_url: 'http://placehold.it/32x32',
      password: 'hello'
    }
  ]

  users.forEach(person => db.users.insert(person))
}
