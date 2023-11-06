#### Book Management RESTful API

This is a Node.js-based RESTful API for managing books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on book records. The application is backed by MongoDB for storing book data.

### Features

- **Create a New Book**: Users can add new books to the system, including information such as title, author, and summary.

- **View All Books**: Users can retrieve a list of all available books.

- **View a Specific Book**: Users can view the details of a specific book by providing its unique ID.

- **Update Book Details**: Users can update the details of a book, including its title, author, and summary.

- **Delete a Book**: Users can delete a book from the database.

### Deployment

This API is deployed on [Render](https://render.com/).

You can access the deployed API at the following URL: [API on Render](https://book-management-api-wb4i.onrender.com)


### Deploying Your API to Render

We've made it easy to deploy your Book Management API on Render. Follow these simple steps to get your API up and running on the cloud:

1. **Log in to Render:** If you don't have an account, you can create one at [Render](https://render.com/).

2. **Select "Web Service":** After logging in, click the "New" dropdown in the Render Dashboard, then choose "Web Service."

3. **Build and Deploy from a Git Repository:** Select the option to "Build and deploy from a Git repository."

4. **Connect Your Repository:** Choose your preferred source code repository provider, such as GitHub or GitLab. If you haven't connected your account yet, you'll be prompted to do so.

5. **Configuration:**
   - **Name:** Give your Web Service a name.
   - **Runtime:** Select the appropriate runtime for your application (e.g., Node.js, Python, or Docker if you are using a container).
   - **Region:** Choose the geographic region where you want to deploy your API.
   - **Branch:** Specify the Git branch you want to build and deploy from.
   - **Build Command:** Provide the command to build your Web Service. For a Node.js application, this is typically `npm install` or `npm ci`.
   - **Start Command:** Specify the command to start your Web Service. In Node.js, it might be `npm start`.
   - **Plan:** Select the amount of RAM and CPUs your Web Service requires. Choose from the available instance types.

6. **Advanced Settings:**
   - You can specify environment variables, secrets, configure persistent disk, set a health check path, and choose whether or not to auto-deploy on every Git push in the advanced settings. This allows you to customize your deployment as needed.

7. **Create Web Service:** Once you've filled out the required information and adjusted any advanced settings, click the "Create Web Service" button.

8. **Deployment:** Render will automatically build and deploy your API. Once the build is complete, your service will start, and it will be listening on a port.

9. **Access Your API:** You can access your deployed API by visiting the URL provided by Render. Your API will be live and accessible to users.


### Local Setup

To set up and run the application locally, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/yourusername/book-management-api.git
   ```

2. Change your working directory to the project folder:

   ```shell
   cd book-management-api
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

4. Create a `.env` file in the root of your project and define the following environment variables:

   ```plaintext
   DATABASE_URL=your-mongodb-connection-url
   PORT=3002
   ```

   Replace `your-mongodb-connection-url` with the URL to your MongoDB instance.

5. Start the application:

   ```shell
   npm start
   ```

   The API should now be running at `http://localhost:3002`.

### API Endpoints

- `POST /book`: Create a new book.
  - Request Body: `{ "title": "Book Title", "author": "Author Name", "summary": "Book Summary" }`

- `GET /books`: Retrieve a list of all books.

- `GET /book/:id`: Retrieve details of a specific book by its ID.

- `PUT /book/:id`: Update book details.
  - Request Body: `{ "title": "Updated Title", "author": "Updated Author", "summary": "Updated Summary" }`

- `DELETE /book/:id`: Delete a book by its ID.

### Additional Information

This API uses Mongoose to interact with MongoDB. The provided codebase includes necessary routes for book management. Feel free to modify and extend it to meet your specific requirements.

### Video Demonstration

A video demonstration of this API, covering all CRUD operations and edge cases, can be found at [Video Demonstration](https://www.youtube.com/watch?v=h8YV9CqCVw8).

