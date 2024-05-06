# Sazumi Viki Portfolio

Welcome to the repository for my personal portfolio website. This site showcases my skills, projects, and provides information about my professional background and interests.

## Features

- **Home Page**: Introduces me and my professional focus.
- **About Section**: Details about my background and skills.
- **Projects Section**: Highlights of my recent projects.
- **Skills Section**: Overview of my technical skills.
- **Photo Gallery**: Collection of my favorite photos.
- **Contact Information**: How to reach me.

## Technologies Used

- **HTML**: For structuring the web content.
- **CSS**: For styling the web content.
- **JavaScript**: For interactive elements on the website.
- **Node.js**: For the backend server.
- **Express**: For serving static files and handling routes.
- **Docker**: For containerizing the application.

## Setup

To run this project locally, you'll need Node.js and npm installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/sazumivicky/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   npm start
   ```

   This will start the server on `http://localhost:3000`.

4. Open your browser and navigate to `http://localhost:3000`.

## Docker Usage

To build and run the application using Docker, follow these steps:

1. Build the Docker image:
   ```bash
   docker build -t my-portfolio .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 my-portfolio
   ```

   Access the application at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details
