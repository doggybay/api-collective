module.exports = db => {
  const locations = [
    {
      name: 'Digiprint Motors',
      phone: '+1 (800) 414-2999',
      address: '201 Bryant Street, Hannasville, North Dakota, 4582'
    },
    {
      name: 'Exosis Motors',
      phone: '+1 (808) 504-2036',
      address: '167 Greene Avenue, Nicut, Virginia, 209'
    },
    {
      name: 'Conjurica Motors',
      phone: '+1 (966) 465-3988',
      address: '717 Ovington Avenue, Moraida, South Carolina, 1701'
    },
    {
      name: 'Pulze Motors',
      phone: '+1 (964) 402-3234',
      address: '422 McKibbin Street, Coloma, Palau, 1836'
    },
    {
      name: 'Kidstock Motors',
      phone: '+1 (875) 443-2755',
      address: '932 Times Placez, Sheatown, Alabama, 455'
    },
    {
      name: 'Zilladyne Motors',
      phone: '+1 (835) 498-2519',
      address: '678 Meadow Street, Tilleda, South Dakota, 599'
    },
    {
      name: 'Geofarm Motors',
      phone: '+1 (824) 430-2269',
      address: '391 Portland Avenue, Vallonia, Oklahoma, 4149'
    }
  ]

  locations.forEach(location => db.locations.insert(location))
}
