# YouTube Transcript Fetcher

This is a simple web application that allows users to fetch and display transcripts from YouTube videos.

## Features

- Input a YouTube video URL
- Fetch the transcript of the video
- Display the full transcript text

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- youtube-transcript (for fetching YouTube transcripts)

## Setup and Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd youtube-transcript-fetcher
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

5. Open your web browser and visit `http://localhost:3000`

## Usage

1. Enter a valid YouTube video URL in the input field.
2. Click the "Fetch Transcript" button.
3. The transcript will be displayed on the page.

## Demo

Here's a quick demonstration of how the YouTube Transcript Fetcher works:

![Demo Video](assets/demo.mov)

## Project Structure

- `app.js`: Main application file containing the server logic
- `views/input.ejs`: EJS template for the input form
- `package.json`: Project dependencies and scripts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
