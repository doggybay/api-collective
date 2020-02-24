module.exports = db => {
  const accounts = [
    {
      account_number: 1825187,
      user_id: 1
    },
    {
      account_number: 8437701,
      user_id: 1
    },
    {
      account_number: 6002083,
      user_id: 36
    },
    {
      account_number: 1147769,
      user_id: 37
    },
    {
      account_number: 7580393,
      user_id: 9
    },
    {
      account_number: 1581493,
      user_id: 33
    },
    {
      account_number: 6111557,
      user_id: 26
    },
    {
      account_number: 5227709,
      user_id: 12
    },
    {
      account_number: 6752647,
      user_id: 2
    },
    {
      account_number: 1142950,
      user_id: 27
    },
    {
      account_number: 9585526,
      user_id: 12
    },
    {
      account_number: 7809642,
      user_id: 41
    },
    {
      account_number: 2359683,
      user_id: 38
    },
    {
      account_number: 1250806,
      user_id: 39
    },
    {
      account_number: 8033625,
      user_id: 5
    },
    {
      account_number: 9403854,
      user_id: 6
    },
    {
      account_number: 8257498,
      user_id: 28
    },
    {
      account_number: 7706776,
      user_id: 7
    },
    {
      account_number: 7558658,
      user_id: 28
    },
    {
      account_number: 1272087,
      user_id: 22
    },
    {
      account_number: 5308709,
      user_id: 24
    },
    {
      account_number: 4423693,
      user_id: 36
    },
    {
      account_number: 5791072,
      user_id: 36
    },
    {
      account_number: 5451939,
      user_id: 50
    },
    {
      account_number: 8187192,
      user_id: 40
    },
    {
      account_number: 9881810,
      user_id: 27
    },
    {
      account_number: 5368235,
      user_id: 8
    },
    {
      account_number: 6882037,
      user_id: 22
    },
    {
      account_number: 6432116,
      user_id: 10
    },
    {
      account_number: 8589217,
      user_id: 34
    },
    {
      account_number: 7749651,
      user_id: 4
    },
    {
      account_number: 9308337,
      user_id: 15
    },
    {
      account_number: 7031425,
      user_id: 37
    },
    {
      account_number: 2905297,
      user_id: 32
    },
    {
      account_number: 3749685,
      user_id: 28
    },
    {
      account_number: 9628144,
      user_id: 48
    },
    {
      account_number: 5180532,
      user_id: 5
    },
    {
      account_number: 3340991,
      user_id: 13
    },
    {
      account_number: 1568542,
      user_id: 6
    },
    {
      account_number: 7297045,
      user_id: 32
    },
    {
      account_number: 6367525,
      user_id: 29
    },
    {
      account_number: 6456406,
      user_id: 3
    },
    {
      account_number: 7764876,
      user_id: 7
    },
    {
      account_number: 2539352,
      user_id: 39
    },
    {
      account_number: 3740130,
      user_id: 20
    },
    {
      account_number: 3034536,
      user_id: 16
    },
    {
      account_number: 7460953,
      user_id: 44
    },
    {
      account_number: 6097548,
      user_id: 32
    },
    {
      account_number: 9150051,
      user_id: 38
    },
    {
      account_number: 1102397,
      user_id: 22
    }
  ]

  accounts.forEach(account => db.accounts.insert(account))
}
