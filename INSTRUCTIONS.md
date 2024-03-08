### Instructions for Manually Hosting Both Frontend and Backend

If you prefer to manually host both the frontend and backend of the YouTube Video Audio Downloader application, follow these steps:

1. **Clone the Main Branch:**
   - Clone the `main` branch of the GitHub repository:
     ```
     git clone https://github.com/RomaLetodiani/Youtube-video-audio-downloader.git
     ```
2. **Navigate to the Project Directory:**
   - Move into the directory containing the project code:
     ```
     cd Youtube-video-audio-downloader
     ```
3. **Install Dependencies (Frontend):**
   - Install the required dependencies for the frontend:
     ```
     cd frontend
     npm install
     ```
4. **Host the Frontend:**
   - Host the frontend code using vite:
     ```
     npm run dev
     ```
5. **Navigate to the Backend Directory:**
   - Navigate to the directory containing the backend code:
     ```
     cd Backend
     ```
6. **Install Dependencies (Backend):**
   - Install the required dependencies for the backend:
     ```
     npm install
     ```
7. **Start the Backend Server:**
   - Launch the backend server:
     ```
     npm start
     ```
8. **Update Frontend API Calls (Optional):**

   - If you hosted the backend on a different port or domain, update the API calls in the frontend code accordingly.
   - Modify the URLs in the frontend code to point to the correct backend endpoint.

9. **Ensure Backend Accessibility:**
   - Make sure the backend server is accessible at the configured URL (e.g., `http://localhost:5000`).
   - Update the frontend code if necessary to communicate with the correct backend endpoint.

### Instructions for Manually Hosting Backend Only

If you want to host only the backend of the YouTube Video Audio Downloader application and use the hosted frontend on GitHub Pages, follow these steps:

1. **Clone the Backend Branch:**
   - Clone the `Backend` branch of the GitHub repository:
     ```
     git clone -b Backend https://github.com/RomaLetodiani/Youtube-video-audio-downloader.git
     ```
2. **Navigate to the Backend Directory:**
   - Move into the directory containing the backend code:
     ```
     cd Youtube-video-audio-downloader
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

By following these instructions, you can manually host either the backend only or both the frontend and backend of the YouTube Video Audio Downloader application. Adjustments may be needed based on your hosting environment and configuration preferences.
