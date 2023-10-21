export const projects = [
  {
    title: "OnTrack",
    subtitle: "Rails and JavaScript",
    description:
      "An edtech app that makes learning more engaging through personalized assignments and an interactive study buddy. OnTrack creates interactive projects that align with the learning goals and interests of each user. Designed for smartphone, deployed as a progressive web app. Powered by ChatGPT and the Open AI API. Worked as the team lead with a group of four developers to create OnTrack.",
    stack: [
      { name: 'Ruby on Rails', logo: './rubyonrails.svg'},
      { name: 'Stimulus JS', logo: './stimulus.svg'},
      { name: 'CSS', logo: './css3.svg'},
      { name: 'HTML', logo: './html5.svg'},
      { name: 'PostgreSQL', logo: './postgresql.svg'},
      { name: 'Heroku', logo: './heroku.svg'},
    ],
    image: "./ontrack.gif",
    link: "https://www.ontrack.tokyo",
  },
  {
    title: "Haiku Weather",
    subtitle: "React and Rails",
    description:
      "A weather app providing haikus based on location and weather. Designed using RESTful API principles with a React frontend that fetches from a Rails backend with exposed API endpoints. Created this app as a solo-project to gain experience in both developing APIs and using React JS.",
    image: "./weather-haiku.gif",
    stack: [
      { name: 'React JS', logo: './react.svg'},
      { name: 'Ruby on Rails', logo: './rubyonrails.svg'},
      { name: 'CSS', logo: './css3.svg'},
      { name: 'HTML', logo: './html5.svg'},
      { name: 'Heroku', logo: './heroku.svg'},
      { name: 'Netlify', logo: './netlify.svg'}
    ],
    link: "https://weather-haiku.xyz/",
  },
  {
    title: "Okaasan Food",
    subtitle: "Rails",
    description:
      "A marketplace, food delivery service app conecting users with homemade meals. Incorporates devise and pundit gems from Ruby for authentication and authorization. Worked as the team lead with a group of four developers to create Okaasan Food.",
    image: "./okaasan-food.gif",
    stack: [
      { name: 'Ruby on Rails', logo: './rubyonrails.svg'},
      { name: 'Stimulus JS', logo: './stimulus.svg'},
      { name: 'CSS', logo: './css3.svg'},
      { name: 'HTML', logo: './html5.svg'},
      { name: 'PostgreSQL', logo: './postgresql.svg'},
      { name: 'Heroku', logo: './heroku.svg'},
    ],
    link: "https://okasan-food-karasugummi-11b736e4f407.herokuapp.com/",
  },
  {
    title: "Movie Watch List",
    subtitle: "Rails and JavaScript",
    description:
      "A simple library for users to organize their personal list of movies. Utilized Vanilla JavaScript for basic features. Created this app as a solo project to gain experience in full stack development and production.",
    image: "./watchlist.gif",
    stack: [
      { name: 'Ruby on Rails', logo: './rubyonrails.svg'},
      { name: 'Vanilla JS', logo: './javascript.svg'},
      { name: 'CSS', logo: './css3.svg'},
      { name: 'HTML', logo: './html5.svg'},
      { name: 'PostgreSQL', logo: './postgresql.svg'},
      { name: 'Heroku', logo: './heroku.svg'},
    ],
    link: "https://kevin-watchlist-001-ccc2c6f4cc36.herokuapp.com/",
  },
];

// export const testimonials = [
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     name: "Jesse Hicks",
//     company: "Zoozle",
//   },
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
//     image: "https://randomuser.me/api/portraits/men/94.jpg",
//     name: "Ruben Alvarez",
//     company: "Dooble.io",
//   },
// ];

export const skills = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Ruby on Rails",
  "Postgre SQL",
];

export const locations = [
  {
    name: "Gonzo",
    description: "Pizza",
    address: "〒141-0021 Tokyo, Shinagawa City, Kamiosaki, 3 Chome−2−9, Aqua Meguro, 1F",
    coordinates: { lng: 139.7174347, lat: 35.633422 },
    link: "https://www.google.com/search?q=gonzo+meguro"
  },

  {
    name: "T.Y. Harbor",
    description: "Craft beer by the canal",
    address: "〒140-0002 Tokyo, Shinagawa City, 2 Chome-1-3 Higashishinagawa",
    coordinates: { lng: 139.7473419, lat: 35.6229831 },
    link: "https://www.google.com/search?q=t.y.harbor"
  },

  {
    name: "SHANTI",
    description: "Good vibes and curry",
    address: "〒214-0021 Kanagawa, Kawasaki, Tama Ward, Shukugawara, 1 Chome−1−2 カスタムアパートメント 1F",
    coordinates: { lng: 139.5721427, lat: 35.6213299 },
    link: "https://www.google.com/search?q=shanti+noborito"
  },

  {
    name: "Rigoletto Spice Market",
    description: "Ceviche",
    address: "〒158-0094 Tokyo, Setagaya City, 2 Chome-21-1 Futakotamaga Rise Station Market 1F",
    coordinates: { lng: 139.6281756, lat: 35.6126072 },
    link: "https://www.google.com/search?q=rigoletto+futakotamagawa"
  },
]

export const highlights = [

  {
    name: "Transitioned from Supervisor to Programming Specialist",
    period: "Oct-2023"
  },
  {
    name: "Completed Web Dev bootcamp at Le Wagon Tokyo",
    period: "Mar-2023 - Sep-2023"
  },

  {
    name: "Graduated from MBA program",
    period: "May-2022"
  },

  {
    name: "Started MBA program (University of Arizona)",
    period: "Jan-2020"
  },

  {
    name: "Promoted to Supervisor (TGG)",
    period: "Apr-2020"
  },

  {
    name: "Joined TGG as Programming Specialist",
    period: "Apr-2018"
  }
]
