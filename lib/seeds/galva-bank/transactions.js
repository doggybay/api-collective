module.exports = db => {
  const transactions = [
    {
      id: 1,
      location: 'Buzzworks',
      amount: 95,
      account_id: 6,
      occuredOn: '2019-02-11T11:57:23+07:00'
    },
    {
      id: 2,
      location: 'Edecine',
      amount: 94,
      account_id: 4,
      occuredOn: '2019-04-24T05:30:07+07:00'
    },
    {
      id: 3,
      location: 'Pathways',
      amount: 60,
      account_id: 6,
      occuredOn: '2019-07-20T11:06:35+07:00'
    },
    {
      id: 4,
      location: 'Extremo',
      amount: 112,
      account_id: 6,
      occuredOn: '2019-01-14T08:17:12+07:00'
    },
    {
      id: 5,
      location: 'Snips',
      amount: 152,
      account_id: 2,
      occuredOn: '2019-08-06T09:29:43+07:00'
    },
    {
      id: 6,
      location: 'Keeg',
      amount: 29,
      account_id: 3,
      occuredOn: '2019-04-22T05:48:42+07:00'
    },
    {
      id: 7,
      location: 'Homelux',
      amount: 40,
      account_id: 7,
      occuredOn: '2019-03-06T05:37:18+07:00'
    },
    {
      id: 8,
      location: 'Geekola',
      amount: 112,
      account_id: 3,
      occuredOn: '2019-03-22T04:59:47+07:00'
    },
    {
      id: 9,
      location: 'Cormoran',
      amount: 48,
      account_id: 2,
      occuredOn: '2019-03-11T03:13:32+07:00'
    },
    {
      id: 10,
      location: 'Furnigeer',
      amount: 177,
      account_id: 3,
      occuredOn: '2019-05-10T04:50:02+07:00'
    },
    {
      id: 11,
      location: 'Zillan',
      amount: 127,
      account_id: 1,
      occuredOn: '2019-02-27T09:27:13+07:00'
    },
    {
      id: 12,
      location: 'Cubicide',
      amount: 62,
      account_id: 5,
      occuredOn: '2019-02-24T11:29:30+07:00'
    },
    {
      id: 13,
      location: 'Zidant',
      amount: 97,
      account_id: 6,
      occuredOn: '2019-03-28T08:16:49+07:00'
    },
    {
      id: 14,
      location: 'Amtap',
      amount: 152,
      account_id: 7,
      occuredOn: '2019-05-26T08:50:17+07:00'
    },
    {
      id: 15,
      location: 'Zanilla',
      amount: 69,
      account_id: 4,
      occuredOn: '2019-06-03T01:00:02+07:00'
    },
    {
      id: 16,
      location: 'Netbook',
      amount: 91,
      account_id: 7,
      occuredOn: '2019-04-13T03:31:24+07:00'
    },
    {
      id: 17,
      location: 'Tellifly',
      amount: 136,
      account_id: 5,
      occuredOn: '2019-04-16T03:17:12+07:00'
    },
    {
      id: 18,
      location: 'Recrisys',
      amount: 117,
      account_id: 3,
      occuredOn: '2019-05-15T07:45:56+07:00'
    },
    {
      id: 19,
      location: 'Isopop',
      amount: 152,
      account_id: 5,
      occuredOn: '2019-03-30T04:25:38+07:00'
    },
    {
      id: 20,
      location: 'Premiant',
      amount: 99,
      account_id: 7,
      occuredOn: '2019-06-02T06:15:17+07:00'
    },
    {
      id: 21,
      location: 'Mantrix',
      amount: 169,
      account_id: 5,
      occuredOn: '2019-03-12T05:22:23+07:00'
    },
    {
      id: 22,
      location: 'Zensus',
      amount: 36,
      account_id: 6,
      occuredOn: '2019-03-20T09:50:16+07:00'
    },
    {
      id: 23,
      location: 'Eventex',
      amount: 135,
      account_id: 4,
      occuredOn: '2019-03-29T07:41:40+07:00'
    },
    {
      id: 24,
      location: 'Pyramax',
      amount: 108,
      account_id: 2,
      occuredOn: '2019-06-13T05:40:37+07:00'
    },
    {
      id: 25,
      location: 'Indexia',
      amount: 166,
      account_id: 2,
      occuredOn: '2019-06-05T12:57:43+07:00'
    },
    {
      id: 26,
      location: 'Quantalia',
      amount: 37,
      account_id: 1,
      occuredOn: '2019-07-05T04:25:00+07:00'
    },
    {
      id: 27,
      location: 'Opportech',
      amount: 6,
      account_id: 7,
      occuredOn: '2019-01-02T05:44:11+07:00'
    },
    {
      id: 28,
      location: 'Evidends',
      amount: 134,
      account_id: 1,
      occuredOn: '2019-01-13T02:50:46+07:00'
    },
    {
      id: 29,
      location: 'Gynko',
      amount: 99,
      account_id: 4,
      occuredOn: '2019-01-25T03:46:49+07:00'
    },
    {
      id: 30,
      location: 'Radiantix',
      amount: 137,
      account_id: 3,
      occuredOn: '2019-06-21T07:33:25+07:00'
    },
    {
      id: 31,
      location: 'Digirang',
      amount: 17,
      account_id: 4,
      occuredOn: '2019-07-25T03:26:52+07:00'
    },
    {
      id: 32,
      location: 'Phuel',
      amount: 184,
      account_id: 1,
      occuredOn: '2019-07-25T08:55:01+07:00'
    },
    {
      id: 33,
      location: 'Xurban',
      amount: 37,
      account_id: 6,
      occuredOn: '2019-03-26T12:04:24+07:00'
    },
    {
      id: 34,
      location: 'Zenolux',
      amount: 52,
      account_id: 1,
      occuredOn: '2019-08-15T07:39:47+07:00'
    },
    {
      id: 35,
      location: 'Caxt',
      amount: 182,
      account_id: 5,
      occuredOn: '2019-07-03T10:53:00+07:00'
    },
    {
      id: 36,
      location: 'Enervate',
      amount: 103,
      account_id: 4,
      occuredOn: '2019-03-29T05:08:21+07:00'
    },
    {
      id: 37,
      location: 'Balooba',
      amount: 6,
      account_id: 3,
      occuredOn: '2019-03-10T06:14:38+07:00'
    },
    {
      id: 38,
      location: 'Kyaguru',
      amount: 122,
      account_id: 7,
      occuredOn: '2019-06-06T08:19:47+07:00'
    },
    {
      id: 39,
      location: 'Datacator',
      amount: 178,
      account_id: 7,
      occuredOn: '2019-07-13T11:18:54+07:00'
    },
    {
      id: 40,
      location: 'Podunk',
      amount: 79,
      account_id: 1,
      occuredOn: '2019-01-25T06:55:23+07:00'
    },
    {
      id: 41,
      location: 'Squish',
      amount: 115,
      account_id: 1,
      occuredOn: '2019-02-28T09:48:40+07:00'
    },
    {
      id: 42,
      location: 'Arctiq',
      amount: 45,
      account_id: 6,
      occuredOn: '2019-06-03T07:46:07+07:00'
    },
    {
      id: 43,
      location: 'Comtrak',
      amount: 78,
      account_id: 6,
      occuredOn: '2019-08-13T04:57:59+07:00'
    },
    {
      id: 44,
      location: 'Orboid',
      amount: 106,
      account_id: 1,
      occuredOn: '2019-08-02T03:15:59+07:00'
    },
    {
      id: 45,
      location: 'Signity',
      amount: 56,
      account_id: 7,
      occuredOn: '2019-05-15T10:05:51+07:00'
    },
    {
      id: 46,
      location: 'Diginetic',
      amount: 116,
      account_id: 7,
      occuredOn: '2019-03-22T09:22:08+07:00'
    },
    {
      id: 47,
      location: 'Verbus',
      amount: 121,
      account_id: 2,
      occuredOn: '2019-08-06T10:56:14+07:00'
    },
    {
      id: 48,
      location: 'Geekology',
      amount: 88,
      account_id: 2,
      occuredOn: '2019-01-06T10:30:08+07:00'
    },
    {
      id: 49,
      location: 'Fossiel',
      amount: 36,
      account_id: 4,
      occuredOn: '2019-03-25T08:48:16+07:00'
    },
    {
      id: 50,
      location: 'Aquazure',
      amount: 32,
      account_id: 5,
      occuredOn: '2019-07-04T01:28:57+07:00'
    },
    {
      id: 51,
      location: 'Lovepad',
      amount: 27,
      account_id: 5,
      occuredOn: '2019-03-14T08:35:46+07:00'
    },
    {
      id: 52,
      location: 'Exoplode',
      amount: 197,
      account_id: 7,
      occuredOn: '2019-01-26T10:02:36+07:00'
    },
    {
      id: 53,
      location: 'Utarian',
      amount: 156,
      account_id: 2,
      occuredOn: '2019-08-07T04:13:10+07:00'
    },
    {
      id: 54,
      location: 'Anixang',
      amount: 174,
      account_id: 1,
      occuredOn: '2019-04-27T11:41:53+07:00'
    },
    {
      id: 55,
      location: 'Proxsoft',
      amount: 162,
      account_id: 2,
      occuredOn: '2019-08-10T05:43:45+07:00'
    },
    {
      id: 56,
      location: 'Netplax',
      amount: 198,
      account_id: 4,
      occuredOn: '2019-03-04T08:08:08+07:00'
    },
    {
      id: 57,
      location: 'Typhonica',
      amount: 84,
      account_id: 5,
      occuredOn: '2019-05-15T03:02:52+07:00'
    },
    {
      id: 58,
      location: 'Norsul',
      amount: 145,
      account_id: 1,
      occuredOn: '2019-08-11T10:41:09+07:00'
    },
    {
      id: 59,
      location: 'Medesign',
      amount: 169,
      account_id: 3,
      occuredOn: '2019-06-07T12:52:31+07:00'
    },
    {
      id: 60,
      location: 'Comverges',
      amount: 55,
      account_id: 2,
      occuredOn: '2019-04-14T04:17:24+07:00'
    },
    {
      id: 61,
      location: 'Gazak',
      amount: 14,
      account_id: 7,
      occuredOn: '2019-01-27T01:06:04+07:00'
    },
    {
      id: 62,
      location: 'Cogentry',
      amount: 117,
      account_id: 4,
      occuredOn: '2019-06-29T01:12:54+07:00'
    },
    {
      id: 63,
      location: 'Lunchpad',
      amount: 167,
      account_id: 6,
      occuredOn: '2019-04-19T11:46:10+07:00'
    },
    {
      id: 64,
      location: 'Skybold',
      amount: 31,
      account_id: 5,
      occuredOn: '2019-05-02T02:08:56+07:00'
    },
    {
      id: 65,
      location: 'Splinx',
      amount: 162,
      account_id: 6,
      occuredOn: '2019-05-12T01:55:14+07:00'
    },
    {
      id: 66,
      location: 'Grok',
      amount: 173,
      account_id: 6,
      occuredOn: '2019-01-10T04:11:25+07:00'
    },
    {
      id: 67,
      location: 'Uxmox',
      amount: 162,
      account_id: 7,
      occuredOn: '2019-01-13T08:57:32+07:00'
    },
    {
      id: 68,
      location: 'Comtours',
      amount: 87,
      account_id: 5,
      occuredOn: '2019-05-10T09:23:25+07:00'
    },
    {
      id: 69,
      location: 'Gink',
      amount: 175,
      account_id: 7,
      occuredOn: '2019-07-31T02:19:43+07:00'
    },
    {
      id: 70,
      location: 'Veraq',
      amount: 156,
      account_id: 5,
      occuredOn: '2019-05-30T11:23:50+07:00'
    },
    {
      id: 71,
      location: 'Xiix',
      amount: 146,
      account_id: 3,
      occuredOn: '2019-02-28T03:44:18+07:00'
    },
    {
      id: 72,
      location: 'Jamnation',
      amount: 116,
      account_id: 2,
      occuredOn: '2019-04-01T11:32:56+07:00'
    },
    {
      id: 73,
      location: 'Gology',
      amount: 94,
      account_id: 1,
      occuredOn: '2019-01-19T05:22:13+07:00'
    },
    {
      id: 74,
      location: 'Acumentor',
      amount: 56,
      account_id: 2,
      occuredOn: '2019-07-04T03:22:59+07:00'
    },
    {
      id: 75,
      location: 'Earthpure',
      amount: 119,
      account_id: 2,
      occuredOn: '2019-08-08T08:17:00+07:00'
    },
    {
      id: 76,
      location: 'Oronoko',
      amount: 104,
      account_id: 4,
      occuredOn: '2019-08-14T06:14:25+07:00'
    },
    {
      id: 77,
      location: 'Qiao',
      amount: 130,
      account_id: 2,
      occuredOn: '2019-04-08T07:23:34+07:00'
    },
    {
      id: 78,
      location: 'Avenetro',
      amount: 115,
      account_id: 4,
      occuredOn: '2019-05-18T01:36:03+07:00'
    },
    {
      id: 79,
      location: 'Beadzza',
      amount: 183,
      account_id: 1,
      occuredOn: '2019-02-25T01:16:42+07:00'
    },
    {
      id: 80,
      location: 'Aeora',
      amount: 166,
      account_id: 5,
      occuredOn: '2019-03-31T08:29:24+07:00'
    },
    {
      id: 81,
      location: 'Omnigog',
      amount: 106,
      account_id: 6,
      occuredOn: '2019-07-29T11:00:18+07:00'
    },
    {
      id: 82,
      location: 'Bovis',
      amount: 41,
      account_id: 3,
      occuredOn: '2019-04-08T01:22:22+07:00'
    },
    {
      id: 83,
      location: 'Mondicil',
      amount: 37,
      account_id: 7,
      occuredOn: '2019-03-08T04:42:38+07:00'
    },
    {
      id: 84,
      location: 'Quilch',
      amount: 180,
      account_id: 6,
      occuredOn: '2019-01-08T11:57:48+07:00'
    },
    {
      id: 85,
      location: 'Zidox',
      amount: 118,
      account_id: 3,
      occuredOn: '2019-07-27T11:14:53+07:00'
    },
    {
      id: 86,
      location: 'Autograte',
      amount: 176,
      account_id: 2,
      occuredOn: '2019-03-15T05:22:26+07:00'
    },
    {
      id: 87,
      location: 'Envire',
      amount: 21,
      account_id: 3,
      occuredOn: '2019-06-30T08:10:31+07:00'
    },
    {
      id: 88,
      location: 'Zillanet',
      amount: 109,
      account_id: 3,
      occuredOn: '2019-06-08T02:59:49+07:00'
    },
    {
      id: 89,
      location: 'Maxemia',
      amount: 130,
      account_id: 1,
      occuredOn: '2019-04-22T11:59:49+07:00'
    },
    {
      id: 90,
      location: 'Interfind',
      amount: 141,
      account_id: 6,
      occuredOn: '2019-06-28T05:13:06+07:00'
    },
    {
      id: 91,
      location: 'Entroflex',
      amount: 158,
      account_id: 5,
      occuredOn: '2019-06-01T01:57:39+07:00'
    },
    {
      id: 92,
      location: 'Cowtown',
      amount: 50,
      account_id: 2,
      occuredOn: '2019-02-22T08:03:34+07:00'
    },
    {
      id: 93,
      location: 'Bedder',
      amount: 134,
      account_id: 3,
      occuredOn: '2019-02-10T10:52:48+07:00'
    },
    {
      id: 94,
      location: 'Deviltoe',
      amount: 58,
      account_id: 6,
      occuredOn: '2019-01-22T05:26:13+07:00'
    },
    {
      id: 95,
      location: 'Sonique',
      amount: 86,
      account_id: 3,
      occuredOn: '2019-07-14T03:05:15+07:00'
    },
    {
      id: 96,
      location: 'Immunics',
      amount: 33,
      account_id: 1,
      occuredOn: '2019-07-24T11:45:59+07:00'
    },
    {
      id: 97,
      location: 'Repetwire',
      amount: 143,
      account_id: 1,
      occuredOn: '2019-08-10T12:39:53+07:00'
    },
    {
      id: 98,
      location: 'Naxdis',
      amount: 194,
      account_id: 7,
      occuredOn: '2019-05-22T11:09:52+07:00'
    },
    {
      id: 99,
      location: 'Zilodyne',
      amount: 50,
      account_id: 2,
      occuredOn: '2019-08-10T10:36:51+07:00'
    },
    {
      id: 100,
      location: 'Enaut',
      amount: 143,
      account_id: 1,
      occuredOn: '2019-06-04T09:13:15+07:00'
    }
  ]

  transactions.forEach(transaction => db.transactions.insert(transaction))
}
