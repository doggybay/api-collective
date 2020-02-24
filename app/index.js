const express = require('express')
const router = express.Router()
const linker = require('../lib/linker')

router.get('/', (req, res, next) => {
  res.json({
    'Patch Notes': linker(req, '/api/patch-notes'),
    Projects: {
      Bookstore: {
        books: {
          href: linker(req, '/api/books')
        }
      },
      'Camera Shop': {
        cameras: {
          href: linker(req, '/api/cameras')
        }
      },
      'Galva Bank': {
        accounts: {
          href: linker(req, '/api/galva-bank/accounts')
        },
        transactions: {
          href: linker(req, '/api/galva-bank/transactions')
        },
        companies: {
          href: linker(req, '/api/galva-bank/companies')
        },
        users: {
          href: linker(req, '/api/users')
        }
      },
      'React Inbox': {
        messages: {
          href: linker(req, '/api/messages')
        }
      },
      'Reddit Clone': {
        comments: {
          href: linker(req, '/api/comments')
        },
        posts: {
          href: linker(req, '/api/posts')
        }
      },
      'Shopping Cart': {
        products: {
          href: linker(req, '/api/products')
        },
        items: {
          href: linker(req, '/api/items')
        }
      },
      'Social Media Project': {
        statuses: {
          href: linker(req, '/api/sosh/statuses')
        },
        comments: {
          href: linker(req, '/api/sosh/comments')
        },
        users: {
          href: linker(req, '/api/users')
        },
        friendRequests: {
          href: linker(req, '/api/sosh/friend-requests')
        },
        messages: {
          href: linker(req, '/api/sosh/messages')
        }
      },
      Misc: {
        todos: {
          href: linker(req, '/api/todos')
        },
        movies: {
          href: linker(req, '/api/movies')
        }
      }
    }
  })
})

router.get('/patch-notes', (req, res) => {
  res.render('patch-notes')
})

module.exports = router
