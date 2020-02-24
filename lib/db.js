const Table = require('./table')

const db = {
  init() {
    // this.people = new Table()
    // this.meetings = new Table()

    // inbox
    this.messages = new Table()

    // shopping-cart
    this.products = new Table()
    this.items = new Table()

    // user dashboard...thing?
    this.users = new Table()

    // reddit-clone
    this.posts = new Table()
    this.comments = new Table()

    // camera-list
    this.cameras = new Table()

    // bookstore
    this.books = new Table()

    // movies
    this.movies = new Table()

    // todos
    this.todos = new Table()

    // social media
    this.statuses = new Table()
    this.statusComments = new Table()
    this.friendReqs = new Table()
    this.soshMessages = new Table()

    // Galva Bank
    this.accounts = new Table()
    this.transactions = new Table()
    this.companies = new Table()

    // Stealership
    this.cars = new Table()
    this.locations = new Table()
  }
}

db.init()

// require('./seeds/crm')(db)
require('./seeds/react-inbox/inbox')(db)
require('./seeds/shopping-cart/shopping-cart')(db)
require('./seeds/misc/users')(db)
require('./seeds/reddit-clone/posts')(db)
require('./seeds/reddit-clone/comments')(db)
require('./seeds/camera-shop/cameras')(db)
require('./seeds/bookstore/books')(db)
require('./seeds/misc/movies')(db)
require('./seeds/misc/todos')(db)
require('./seeds/sosh/statuses')(db)
require('./seeds/sosh/comments')(db)
require('./seeds/sosh/messages')(db)
require('./seeds/sosh/friend-requests')(db)
require('./seeds/galva-bank/accounts')(db)
require('./seeds/galva-bank/transactions')(db)
require('./seeds/galva-bank/companies')(db)
require('./seeds/stealership/cars')(db)
require('./seeds/stealership/locations')(db)

module.exports = db
