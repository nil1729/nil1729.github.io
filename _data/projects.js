const projects = [
  {
    id: 12,
    title: 'Remote Code Execution',
    project_type: 'Backend System Design',
    date: 'Jul 2023',
    link_type: 'Github Repository',
    link_url: 'https://github.com/nil1729/code-execution-backend',
    description:
      'Built a remote code execution backend system using NodeJS, ExpressJS, Docker and Redis. This system is capable of executing code in multiple languages. This system is build to be scalable and can handle multiple requests at a time.',
  },
  {
    id: 12,
    title: 'Music DL',
    project_type: 'Backend System Design',
    date: 'Apr 2023',
    link_type: 'Github Repository',
    link_url: 'https://github.com/nil1729/music-dl-server',
    description:
      'Built a Spotify downloader backend system with Spotify API and reverse search using Youtube API. This system is built as a microservice architecture using NodeJS, Docker & RabbitMQ. This system includes ip tracing and caching.',
  },
  {
    id: 14,
    title: 'Trino Security with HTTPS',
    project_type: 'Data Engineering',
    date: 'Jan 2024',
    link_type: 'Github Repository',
    link_url: 'https://github.com/nil1729/trino-security-noob',
    description:
      'Learned about Trino Security and various authentication methods. Integrated Trino with a Reverse Proxy for TLS termination and tested the security features of Trino with PASSWORD authentication method in Docker.',
  },
  {
    id: 14,
    title: 'Ranger with Trino',
    project_type: 'Data Engineering',
    date: 'Jan 2024',
    link_type: 'Github Repository',
    link_url: 'https://github.com/nil1729/trino-ranger-noob',
    description:
      'Learned about Trino Security and Apache Ranger. Integrated Trino with Apache Ranger and tested the security features of Trino with Ranger in Docker. This project also include deploying ELK for access audit logging.',
  },
  {
    id: 15,
    title: 'Multiplayer Game',
    project_type: 'Web Application',
    date: 'Aug 2023',
    link_type: 'Github Repository',
    link_url: 'https://github.com/nil1729/in-memory-socket-server',
    description:
      'Built a Tic Tac Toe multiplayer game using NodeJS, ExpressJS and Socket.io. This project uses in-memory database to store the game state and uses socket.io to communicate between the server and the clients. Further enhancements made by extending the game with Persistent model using Redis',
  },
  {
    id: 10,
    title: 'Timetable Visualizer',
    project_type: 'Web Application',
    date: 'Aug 2021',
    link_type: 'Github Repository',
    link_url: 'https://github.com/nil1729/timetable-visualizer',
    description:
      'Developed a tool for BITS Pilani students to create and manage university time table online with some unique feature like visualizing the timetable and exporting the timetable in PNG format and also sharing the timetable with the peers.',
  },
  {
    id: 11,
    title: 'Food Order App',
    project_type: 'Web Application',
    date: 'Oct 2020',
    link_type: 'Github Repository',
    link_url: 'https://github.com/nil1729/food-order-app/',
    description:
      'Built a food shopping web app for both admin (shop owner) and users (consumers) as a starter project using VueJS. The web app is integrated with Firebase Authentication, NodeJS and MongoDB. This site enables admins to upload new foods including pictures, modify or delete. Users have to sign up and can add foods to their cart and shop',
  },
  {
    id: 13,
    title: 'Poll Application',
    project_type: 'Web App',
    date: 'Jun 2020',
    link_type: 'Github Repository',
    link_url: 'https://github.com/nil1729/poll-app/',
    description:
      "Built a Survey creator and poll web app as a small project using NodeJS and MongoDB as Database. This site enables users to create, modify or delete a survey consisting of one or many questions. Users have to sign up and can add respond to others' surveys and show the visualization of the responses for their own surveys",
  },
];

export default projects;
