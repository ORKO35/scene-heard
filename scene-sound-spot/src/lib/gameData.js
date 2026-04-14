// Scene & Heard — 25 curated movie scene questions
const gameData = [
  {
    id: 1,
    movie: "Fight Club",
    scene: "The narrator and Marla hold hands while skyscrapers collapse.",
    song: "Where Is My Mind?",
    artist: "Pixies",
    image: "https://orko35.github.io/scene-heard/scene-1-fight-club.jpg"
  },
  {
    id: 2,
    movie: "Coyote Ugly",
    scene: "The girls are dancing on the bar and spraying water.",
    song: "One Way or Another",
    artist: "Blondie",
    image: "https://orko35.github.io/scene-heard/scene-2-coyote-ugly.jpg"
  },
  {
    id: 3,
    movie: "Pulp Fiction",
    scene: "Vincent Vega and Mia Wallace participate in a twist contest.",
    song: "You Never Can Tell",
    artist: "Chuck Berry",
    image: "https://orko35.github.io/scene-heard/scene-3-pulp-fiction.jpg"
  },
  {
    id: 4,
    movie: "The Big Lebowski",
    scene: "The surreal dream sequence where The Dude is 'tripping'.",
    song: "Just Dropped In",
    artist: "Kenny Rogers & The First Edition",
    image: "https://orko35.github.io/scene-heard/scene-4-The-Big-Lebowski-1.jpg"
  },
  {
    id: 5,
    movie: "The Big Lebowski",
    scene: "Opening scene where The Dude is buying milk in his bathrobe.",
    song: "The Man in Me",
    artist: "Bob Dylan",
    image: "https://orko35.github.io/scene-heard/scene-5-The-Big-Lebowski-2.jpeg"
  },
  {
    id: 6,
    movie: "Wayne's World",
    scene: "The group is headbanging inside the car.",
    song: "Bohemian Rhapsody",
    artist: "Queen",
    image: "https://orko35.github.io/scene-heard/scene-6-Wayne's-World.jpg"
  },
  {
    id: 7,
    movie: "Reservoir Dogs",
    scene: "Mr. Blonde dances while torturing a police officer.",
    song: "Stuck in the Middle with You",
    artist: "Stealers Wheel",
    image: "https://orko35.github.io/scene-heard/scene-7-Reservoir-Dogs.jpg"
  },
  {
    id: 8,
    movie: "Dirty Dancing",
    scene: "The final dance where Johnny lifts Baby in the air.",
    song: "(I've Had) The Time of My Life",
    artist: "Bill Medley & Jennifer Warnes",
    image: "https://orko35.github.io/scene-heard/scene-8-Dirty-Dancing.jpg"
  },
  {
    id: 9,
    movie: "The Breakfast Club",
    scene: "Ending scene where Bender raises his fist in the air.",
    song: "Don't You (Forget About Me)",
    artist: "Simple Minds",
    image: "https://orko35.github.io/scene-heard/scene-9-The-Breakfast-Club.jpg"
  },
  {
    id: 10,
    movie: "Ferris Bueller's Day Off",
    scene: "Ferris sings on a parade float in the middle of the city.",
    song: "Twist and Shout",
    artist: "The Beatles",
    image: "https://orko35.github.io/scene-heard/scene-10-Ferris-Bueller's-Day-Off.jpg"
  },
  {
    id: 11,
    movie: "American Psycho",
    scene: "Patrick Bateman explains the album before using an axe.",
    song: "Hip to be Square",
    artist: "Huey Lewis & The News",
    image: "https://orko35.github.io/scene-heard/scene-11-american-psycho.jpg"
  },
  {
    id: 12,
    movie: "Top Gun",
    scene: "Maverick and Goose sing to a woman in a crowded bar.",
    song: "You've Lost That Lovin' Feelin'",
    artist: "The Righteous Brothers",
    image: "https://orko35.github.io/scene-heard/scene-12-Top-Gun.jpg"
  },
  {
    id: 13,
    movie: "Goodfellas",
    scene: "The famous long-take tracking shot entering the Copacabana.",
    song: "Then He Kissed Me",
    artist: "The Crystals",
    image: "https://orko35.github.io/scene-heard/scene-13-Goodfellas.jpg"
  },
  {
    id: 14,
    movie: "Trainspotting",
    scene: "The opening 'Choose Life' monologue while running.",
    song: "Lust for Life",
    artist: "Iggy Pop",
    image: "https://orko35.github.io/scene-heard/scene-14-Trainspotting.jpg"
  },
  {
    id: 15,
    movie: "Joker",
    scene: "Arthur Fleck dances down the stairs in full makeup.",
    song: "Rock and Roll Part 2",
    artist: "Gary Glitter",
    image: "https://orko35.github.io/scene-heard/scene-15-Joker.jpg"
  },
  {
    id: 16,
    movie: "Guardians of the Galaxy",
    scene: "Star-Lord dances on planet Morag while using a rat as a mic.",
    song: "Come and Get Your Love",
    artist: "Redbone",
    image: "https://orko35.github.io/scene-heard/scene-16-Guardians-of-the-Galaxy.jpg"
  },
  {
    id: 17,
    movie: "The Silence of the Lambs",
    scene: "Buffalo Bill dances in front of the mirror.",
    song: "Goodbye Horses",
    artist: "Q Lazzarus",
    image: "https://orko35.github.io/scene-heard/scene-17-The-Silence-of-the-Lambs.jpg"
  },
  {
    id: 18,
    movie: "Shrek",
    scene: "Opening scene showing Shrek's morning routine in the swamp.",
    song: "All Star",
    artist: "Smash Mouth",
    image: "https://orko35.github.io/scene-heard/scene-18-shrek.jpg"
  },
  {
    id: 19,
    movie: "Mean Girls",
    scene: "The girls perform a routine at the Christmas talent show.",
    song: "Jingle Bell Rock",
    artist: "Bobby Helms",
    image: "https://orko35.github.io/scene-heard/scene-19-mean-girls.jpg"
  },
  {
    id: 20,
    movie: "Cruel Intentions",
    scene: "The final scene as Kathryn is exposed and Sebastian is gone.",
    song: "Bittersweet Symphony",
    artist: "The Verve",
    image: "https://orko35.github.io/scene-heard/scene-20-Cruel-Intentions.jpg"
  },
  {
    id: 21,
    movie: "Pretty Woman",
    scene: "Julia Roberts goes on a massive shopping spree.",
    song: "Oh, Pretty Woman",
    artist: "Roy Orbison",
    image: "https://orko35.github.io/scene-heard/scene-21-pretty-woman.jpg"
  },
  {
    id: 22,
    movie: "Titanic",
    scene: "Jack and Rose are standing at the bow of the ship ('I'm flying').",
    song: "My Heart Will Go On",
    artist: "Celine Dion",
    image: "https://orko35.github.io/scene-heard/scene-22-Titanic.jpg"
  },
  {
    id: 23,
    movie: "Rocky",
    scene: "Rocky Balboa runs up the steps of the Philadelphia Museum of Art during his training.",
    song: "Gonna Fly Now",
    artist: "Bill Conti",
    image: "https://orko35.github.io/scene-heard/scene-23-rocky.jpg"
  },
  {
    id: 24,
    movie: "Easy Rider",
    scene: "The iconic shot of the two bikers riding their choppers on the open highway.",
    song: "Born to Be Wild",
    artist: "Steppenwolf",
    image: "https://orko35.github.io/scene-heard/scene-24-Easy-Rider.jpg"
  },
  {
    id: 25,
    movie: "The Lion King",
    scene: "The sun rises over the Pride Lands and Rafiki holds baby Simba up for all to see.",
    song: "Circle of Life",
    artist: "Elton John / Lebo M.",
    image: "https://orko35.github.io/scene-heard/scene-25-The Lion-King.jpg"
  }
];

export default gameData;