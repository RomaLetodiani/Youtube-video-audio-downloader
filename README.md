### Instructions for Manually Hosting Backend Only

If you want to host only the backend of the YouTube Video Audio Downloader application and use the hosted frontend on GitHub Pages, follow these steps:

1. **Clone the Backend Branch:**
   - Clone the `Backend` branch of the GitHub repository:
     ```
     git clone -b Backend <repository_url>
     ```
2. **Navigate to the Backend Directory:**
   - Move into the directory containing the backend code:
     ```
     cd Youtube-Video-Audio-Downloader
     ```
3. **Install Dependencies:**
   - Install the required dependencies for the backend:
     ```
     npm install
     ```
4. **Start the Backend Server:**
   - Launch the backend server:
     ```
     npm start
     ```
5. **Ensure Backend Accessibility:**
   - Make sure the backend server is accessible at `http://localhost:5000`.
   - This port number should match the one used in the frontend code for API communication.
