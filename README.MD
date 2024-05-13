## Description
This repository contains the source code for my personal portfolio website. The website showcases my projects, skills, and professional experience.

## Features
- **About Me**: Introduction and background.
- **Skills**: List of technical and soft skills.
- **Projects**: Showcase of recent projects with descriptions and links.
- **Contact**: Form to contact me directly through the website.

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express
- Docker

## Setup and Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/sazumivicky/sazumi-porto-expressjs.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   npm start
   ```

   This will start the server on `localhost:3000`.

4. **Open the website**
   Navigate to `http://localhost:3000` in your web browser to view the website.

## Docker Usage
To build and run the website using Docker, follow these steps:

1. **Build the Docker image**
   ```bash
   docker build -t sazumi-porto-expressjs .
   ```

2. **Run the Docker container**
   ```bash
   docker run -p 3000:3000 sazumi-porto-expressjs
   ```

   Access the website at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.