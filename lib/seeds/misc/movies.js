module.exports = (db) => {

  const movies = [{
      title: "Star Wars: Episode IV - A New Hope",
      year: "1977",
      rated: "PG",
      released: "25 May 1977",
      runtime: "121 min",
      genre: "Action, Adventure, Fantasy, Sci-Fi",
      director: "George Lucas",
      actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
      plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
      awards: "Won 6 Oscars. Another 50 wins & 28 nominations.",
      poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      ratings: [{
          source: "Internet Movie Database",
          value: "8.6/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "93%"
        },
        {
          source: "Metacritic",
          value: "90/100"
        }
      ],
      metascore: "90",
      imdbRating: "8.6",
      production: "20th Century Fox",
      website: "http://www.starwars.com/episode-iv/",
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: "1980",
      poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      year: "1983",
      rated: "PG",
      released: "25 May 1983",
      runtime: "131 min",
      genre: "Action, Adventure, Fantasy, Sci-Fi",
      director: "Richard Marquand",
      actors: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
      plot: "After a daring mission to rescue Han Solo from Jabba the Hutt, the rebels dispatch to Endor to destroy a more powerful Death Star. Meanwhile, Luke struggles to help Vader back from the dark side without falling into the Emperor's trap.",
      awards: "Nominated for 4 Oscars. Another 20 wins & 16 nominations.",
      poster: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      ratings: [{
          source: "Internet Movie Database",
          value: "8.3/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "80%"
        },
        {
          source: "Metacritic",
          value: "58/100"
        }
      ],
      metascore: "58",
      imdbRating: "8.3",
      production: "Twentieth Century Fox",
      website: "http://www.starwars.com/episode-vi/",
    },
    {
      title: "Star Wars: The Force Awakens",
      year: "2015",
      rated: "PG-13",
      released: "18 Dec 2015",
      runtime: "136 min",
      genre: "Action, Adventure, Fantasy",
      director: "J.J. Abrams",
      actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
      plot: "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.",
      awards: "Nominated for 5 Oscars. Another 57 wins & 123 nominations.",
      poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
      ratings: [{
          source: "Internet Movie Database",
          value: "8.0/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "93%"
        },
        {
          source: "Metacritic",
          value: "81/100"
        }
      ],
      metascore: "81",
      imdbRating: "8.0",
      production: "Walt Disney Pictures",
      website: "http://starwars.com/",
    },
    {
      title: "Star Wars: Episode I - The Phantom Menace",
      year: "1999",
      rated: "PG",
      released: "19 May 1999",
      runtime: "136 min",
      genre: "Action, Adventure, Fantasy",
      director: "George Lucas",
      actors: "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd",
      plot: "Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.",
      awards: "Nominated for 3 Oscars. Another 26 wins & 65 nominations.",
      poster: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      ratings: [{
          source: "Internet Movie Database",
          value: "6.5/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "55%"
        },
        {
          source: "Metacritic",
          value: "51/100"
        }
      ],
      metascore: "51",
      imdbRating: "6.5",
      production: "20th Century Fox",
      website: "http://www.starwars.com/episode-i/",
    },
    {
      title: "Star Wars: Episode III - Revenge of the Sith",
      year: "2005",
      rated: "PG-13",
      released: "19 May 2005",
      runtime: "140 min",
      genre: "Action, Adventure, Fantasy",
      director: "George Lucas",
      actors: "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid",
      plot: "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
      awards: "Nominated for 1 Oscar. Another 25 wins & 56 nominations.",
      poster: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
      ratings: [{
          source: "Internet Movie Database",
          value: "7.6/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "79%"
        },
        {
          source: "Metacritic",
          value: "68/100"
        }
      ],
      metascore: "68",
      imdbRating: "7.6",
      production: "20th Century Fox",
      website: "http://www.starwars.com/",
    },
    {
      title: "Star Wars: Episode II - Attack of the Clones",
      year: "2002",
      rated: "PG",
      released: "16 May 2002",
      runtime: "142 min",
      genre: "Action, Adventure, Fantasy, Sci-Fi",
      director: "George Lucas",
      actors: "Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee",
      plot: "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-wan Kenobi investigates an assassination attempt on the Senator and discovers a secret clone army crafted for the Jedi.",
      awards: "Nominated for 1 Oscar. Another 16 wins & 58 nominations.",
      poster: "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
      ratings: [{
          source: "Internet Movie Database",
          value: "6.6/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "66%"
        },
        {
          source: "Metacritic",
          value: "54/100"
        }
      ],
      metascore: "54",
      imdbRating: "6.6",
      production: "20th Century Fox",
      website: "http://www.starwars.com/episode-ii/"
    },
    {
      title: "Rogue One: A Star Wars Story",
      year: "2016",
      rated: "PG-13",
      released: "16 Dec 2016",
      runtime: "133 min",
      genre: "Action, Adventure, Sci-Fi",
      director: "Gareth Edwards",
      actors: "Felicity Jones, Diego Luna, Alan Tudyk, Donnie Yen",
      plot: "The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.",
      awards: "Nominated for 2 Oscars. Another 23 wins & 78 nominations.",
      poster: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
      ratings: [{
          source: "Internet Movie Database",
          value: "7.8/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "85%"
        },
        {
          source: "Metacritic",
          value: "65/100"
        }
      ],
      metascore: "65",
      imdbRating: "7.8",
      production: "Walt Disney Pictures",
      website: "http://www.starwars.com/",
    },
    {
      title: "Star Wars: The Last Jedi",
      year: "2017",
      rated: "PG-13",
      released: "15 Dec 2017",
      runtime: "152 min",
      genre: "Action, Adventure, Fantasy",
      director: "Rian Johnson",
      actors: "Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley",
      plot: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
      awards: "Nominated for 4 Oscars. Another 12 wins & 71 nominations.",
      poster: "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
      ratings: [{
          source: "Internet Movie Database",
          value: "7.2/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "91%"
        },
        {
          source: "Metacritic",
          value: "85/100"
        }
      ],
      metascore: "85",
      imdbRating: "7.2",
      production: "Walt Disney Pictures",
      website: "http://www.starwars.com/the-last-jedi/",
    },
    {
      title: "Solo: A Star Wars Story",
      year: "2018",
      rated: "PG-13",
      released: "25 May 2018",
      runtime: "135 min",
      genre: "Action, Adventure, Fantasy",
      director: "Ron Howard",
      actors: "Alden Ehrenreich, Joonas Suotamo, Woody Harrelson, Emilia Clarke",
      plot: "During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.",
      awards: "N/A",
      poster: "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg",
      ratings: [{
          source: "Internet Movie Database",
          value: "7.0/10"
        },
        {
          source: "Rotten Tomatoes",
          value: "70%"
        },
        {
          source: "Metacritic",
          value: "62/100"
        }
      ],
      metascore: "62",
      imdbRating: "7.0",
      production: "Walt Disney Pictures",
      website: "http://www.starwars.com/films/solo",
    }
  ]

  movies.forEach(movie => db.movies.insert(movie))

}