
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    getPG(movies) {
      return movies.filter((m) => m.rating === "PG");
    }
  }
  let movie1 = new Movie("Casino Royale", "Eon Producitons", "PG-13");
  console.log(movie1);
  let m = [];
  /*
  creating an array of movies

  */
  m[0] = new Movie("Avatar", "AAA Producitons", "PG");
  m[1] = new Movie("Titanic", "ttt Producitons", "R");
  m[2] = new Movie("Bahubali", "AABBA Producitons", "PG");
  m[3] = new Movie("PS", "Madras Producitons", "PG");
  m[4] = new Movie("Raja", "RRR Producitons", "PGU");
  m[5] = new Movie("Ayalaan", "SK Producitons", "PG");

  console.log(m);

  movie1
    .getPG(m)
    .forEach((element, i) =>
      console.log("Movie " + (i + 1) + ":" + element.title)
    );