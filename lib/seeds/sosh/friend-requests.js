module.exports = db => {
  const friendReqs = [
    {
      requestorId: 14,
      requesteeId: 39,
      accepted: false
    },
    {
      requestorId: 38,
      requesteeId: 12,
      accepted: false
    },
    {
      requestorId: 3,
      requesteeId: 9,
      accepted: false
    },
    {
      requestorId: 6,
      requesteeId: 38,
      accepted: false
    },
    {
      requestorId: 16,
      requesteeId: 26,
      accepted: true
    },
    {
      requestorId: 42,
      requesteeId: 45,
      accepted: false
    },
    {
      requestorId: 20,
      requesteeId: 9,
      accepted: true
    },
    {
      requestorId: 13,
      requesteeId: 46,
      accepted: true
    },
    {
      requestorId: 28,
      requesteeId: 18,
      accepted: true
    },
    {
      requestorId: 32,
      requesteeId: 7,
      accepted: true
    },
    {
      requestorId: 45,
      requesteeId: 22,
      accepted: true
    },
    {
      requestorId: 50,
      requesteeId: 45,
      accepted: true
    },
    {
      requestorId: 46,
      requesteeId: 17,
      accepted: true
    },
    {
      requestorId: 40,
      requesteeId: 49,
      accepted: false
    },
    {
      requestorId: 16,
      requesteeId: 14,
      accepted: true
    },
    {
      requestorId: 41,
      requesteeId: 18,
      accepted: false
    },
    {
      requestorId: 4,
      requesteeId: 3,
      accepted: false
    },
    {
      requestorId: 36,
      requesteeId: 44,
      accepted: true
    },
    {
      requestorId: 24,
      requesteeId: 11,
      accepted: true
    },
    {
      requestorId: 46,
      requesteeId: 33,
      accepted: true
    },
    {
      requestorId: 16,
      requesteeId: 2,
      accepted: true
    },
    {
      requestorId: 9,
      requesteeId: 36,
      accepted: false
    },
    {
      requestorId: 5,
      requesteeId: 36,
      accepted: true
    },
    {
      requestorId: 23,
      requesteeId: 23,
      accepted: true
    },
    {
      requestorId: 5,
      requesteeId: 45,
      accepted: true
    },
    {
      requestorId: 22,
      requesteeId: 32,
      accepted: true
    },
    {
      requestorId: 23,
      requesteeId: 35,
      accepted: true
    },
    {
      requestorId: 8,
      requesteeId: 1,
      accepted: false
    },
    {
      requestorId: 16,
      requesteeId: 43,
      accepted: false
    },
    {
      requestorId: 7,
      requesteeId: 42,
      accepted: true
    },
    {
      requestorId: 22,
      requesteeId: 25,
      accepted: false
    },
    {
      requestorId: 14,
      requesteeId: 11,
      accepted: false
    },
    {
      requestorId: 26,
      requesteeId: 25,
      accepted: false
    },
    {
      requestorId: 39,
      requesteeId: 27,
      accepted: false
    },
    {
      requestorId: 11,
      requesteeId: 23,
      accepted: true
    },
    {
      requestorId: 46,
      requesteeId: 47,
      accepted: true
    },
    {
      requestorId: 21,
      requesteeId: 5,
      accepted: false
    },
    {
      requestorId: 23,
      requesteeId: 50,
      accepted: false
    },
    {
      requestorId: 26,
      requesteeId: 12,
      accepted: true
    },
    {
      requestorId: 34,
      requesteeId: 27,
      accepted: true
    },
    {
      requestorId: 49,
      requesteeId: 15,
      accepted: false
    },
    {
      requestorId: 23,
      requesteeId: 49,
      accepted: true
    },
    {
      requestorId: 31,
      requesteeId: 21,
      accepted: true
    },
    {
      requestorId: 32,
      requesteeId: 45,
      accepted: true
    },
    {
      requestorId: 10,
      requesteeId: 14,
      accepted: true
    },
    {
      requestorId: 34,
      requesteeId: 33,
      accepted: true
    },
    {
      requestorId: 22,
      requesteeId: 7,
      accepted: false
    },
    {
      requestorId: 43,
      requesteeId: 45,
      accepted: true
    },
    {
      requestorId: 41,
      requesteeId: 43,
      accepted: true
    },
    {
      requestorId: 25,
      requesteeId: 20,
      accepted: false
    }
  ]

  friendReqs.forEach(friendReq => db.friendReqs.insert(friendReq))
}
