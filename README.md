# Youtube Video Audio Downloader

This repository contains a YouTube video/audio downloader application built using React, TypeScript, Vite, Tailwind CSS for the frontend, and Node.js for the backend.

## Branches

- **main**: Contains both frontend and backend directories. This branch serves as the main development branch.
- **gh-pages**: Hosts the frontend of the application. You can access the live demo [here](https://romaletodiani.github.io/Youtube-video-audio-downloader/).
- **Backend**: Contains only the backend code. Users need to clone this branch and host their backend manually.

## Tech Stack

- Frontend:
  - React ([https://react.dev/](https://react.dev/))
  - TypeScript ([https://www.typescriptlang.org/](https://www.typescriptlang.org/))
  - Tailwind CSS ([https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation))
  - Vite ([https://vitejs.dev/guide/](https://vitejs.dev/guide/))
- Backend:
  - Node.js ([https://nodejs.org/en](https://nodejs.org/en))

**Deployment:**

- **Frontend (GitHub Hosted):**
  - The frontend code is hosted on GitHub Pages.
  - Users can clone the `main` branch for manual hosting.
- **Backend (Manual Hosting):**
  - The backend code is hosted manually by users.
  - Clone the `Backend` branch from the GitHub repository.
  - Ensure that the backend is hosted on `http://localhost:5000` for proper communication with the hosted frontend.
  - If hosting on a different port, you must update the frontend code accordingly.

### Instructions

- For detailed instructions on how to host the backend only or both the frontend and backend of the YouTube Video Audio Downloader application,
- please refer to the [Instructions](./INSTRUCTIONS.md) file.

- Click [here](./INSTRUCTIONS.md) to access the instructions.

**Folder Structure**

```
Frontend/         # Frontend code (React, TypeScript, Tailwind, Vite)
Backend/          # Backend code (Node.js)
    - Downloads   # Downloaded videos and audios will be saved here
```

**Usage:**

1. Access the hosted frontend URL in your web browser.
2. Enter the YouTube video or audio URL you want to download.
3. Initiate the download process. Downloaded files will be saved in the `Downloads` folder within the backend directory.

### Running the Frontend

The frontend is hosted on the **gh-pages** branch and can be accessed [here](https://romaletodiani.github.io/Youtube-video-audio-downloader/).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

**Customization (Optional)**

- You can customize the frontend using React, TypeScript, and Tailwind CSS to tailor the application's look and feel.
- The backend code might require adjustments depending on specific download logic and error handling.

**Disclaimer**

- Downloading copyrighted material without permission is illegal. Use this application responsibly and ethically.
- Download speeds and success rates may vary depending on your internet connection and YouTube's servers.
