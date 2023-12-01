--- Full stack web application built for Bounce Insights challenge ---

- Both Server and Client code is written in Typescript

- Client is built with Vite + SWC; tailwind css is used for styling

- Server uses Express and allows for users registration and authentication

- Server connects to a MongoDB instance hosted on Railway and uses the mongoose package for this

- Authentication is handled with standard hashing algorithms and user objects are stored as a document model in the database

- Application allows for user input to fetch a country by its name and then display common information about that country in a card format; axios is used on the server to allow network requests with node

- When a User authenticates the server will responsd with a SESSION cookie with an expiry of one hour; the cookie will be parsed in order to authenticate any protected routes

- After a user is authenticated, the user object will be stored in a nanostores array and used to dynamcallly render content on the client

- When authenticated any searches are saved in a similar document model in the DB and contain reference to that user; such searches will be dislayed on the account page and can be deleted by the user

- Jest and Cypress are configured for server and client testing respectively; though admittedly, this is something I must study further and improve upon

- Moreover, I tried to implement swagger docs for the api home page. However, I was unable to configure it correctly in time having previously done so for a python and Java REST API

- Client application is hosted at: https://bounce-frontend-vite.onrender.com

- Server API is hosted at: https://bounce-express-server.onrender.com

- Notes:
- As server is hosted on free tier, please allow time for cold starts when first registering or logging in
- I believe this application demonstrates my ability to communicate with external APIs, transform data to the applications needs, work will NOSQL databases in CRUD operations, and my knowledge of the importance of authentication, and how to handle client side context storage
