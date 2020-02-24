module.exports = db => {
  const companies = [
    {
      id: 1,
      name: 'Mantro'
    },
    {
      id: 2,
      name: 'Ronbert'
    },
    {
      id: 3,
      name: 'Myopium'
    },
    {
      id: 4,
      name: 'Turnabout'
    },
    {
      id: 5,
      name: 'Accel'
    },
    {
      id: 6,
      name: 'Candecor'
    },
    {
      id: 7,
      name: 'Eargo'
    },
    {
      id: 8,
      name: 'Waterbaby'
    },
    {
      id: 9,
      name: 'Musanpoly'
    },
    {
      id: 10,
      name: 'Sentia'
    },
    {
      id: 11,
      name: 'Eclipsent'
    },
    {
      id: 12,
      name: 'Cognicode'
    },
    {
      id: 13,
      name: 'Duflex'
    },
    {
      id: 14,
      name: 'Qaboos'
    },
    {
      id: 15,
      name: 'Joviold'
    },
    {
      id: 16,
      name: 'Voipa'
    },
    {
      id: 17,
      name: 'Sequitur'
    },
    {
      id: 18,
      name: 'Zillan'
    },
    {
      id: 19,
      name: 'Egypto'
    },
    {
      id: 20,
      name: 'Aeora'
    },
    {
      id: 21,
      name: 'Quadeebo'
    },
    {
      id: 22,
      name: 'Stelaecor'
    },
    {
      id: 23,
      name: 'Isosure'
    },
    {
      id: 24,
      name: 'Geeketron'
    },
    {
      id: 25,
      name: 'Sensate'
    }
  ]
  companies.forEach(company => db.companies.insert(company))
}
