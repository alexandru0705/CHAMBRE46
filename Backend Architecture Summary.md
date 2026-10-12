tldr Here is a comprehensive summary of everything we've built so far, formatted cleanly so you can copy and paste it right into a new chat to resume work seamlessly.
Project Overview: CHAMBRE46 Backend
	•	Tech Stack: Node.js, Express, MongoDB Atlas, Mongoose, Multer (for image handling), and dotenv.
	•	Architecture: MVC (Model-View-Controller) pattern with strict separation of concerns and zero inline CSS planned for the frontend.
	•	Current Status: Backend is fully structured, tested, and feature-complete for the current phase. Controllers and routes use a standardized naming convention with a ctrl prefix, and future rating/comment logic has been safely commented out to keep the production environment clean for the upcoming frontend build.
Detailed Architecture & File Structure:
1. Models (/backend/models/)
	•	Artwork.js: Schema for visual artworks (includes image handling, title, and metadata).
	•	Project.js: Schema for portfolio projects.
	•	Track.js: Schema for audio tracks (title, genre, hardwareUsed array, audioUrl, durationInSeconds, releaseYear). Includes placeholder fields for comments and averageRating currently commented out.
	•	Video.js: Schema for video media (title, description, videoUrl, durationInSeconds, year, tags). Includes placeholder fields for comments and averageRating currently commented out.
	•	User.js: User authentication schema.
2. Controllers (/backend/controllers/)
	•	ctrlArtwork.js: CRUD operations and Multer image processing for artworks.
	•	ctrlProject.js: CRUD operations for projects.
	•	ctrlTrack.js: CRUD operations for tracks (with comment/rating logic safely wrapped in block comments /* ... */ for future implementation).
	•	ctrlVideo.js: CRUD operations for videos (with comment/rating logic safely wrapped in block comments /* ... */).
	•	ctrlUser.js: User signup, login, and authentication controllers.
3. Routes (/backend/routes/)
	•	artwork.js, project.js, track.js, user.js, video.js: Clean route definitions mapped to their corresponding ctrl prefix controllers.
4. Middlewares (/backend/middlewares/)
	•	auth.js: JWT authentication middleware protecting secured routes.
	•	multer.js: File upload configuration for handling images.
Next Steps for the New Chat
	•	Transition to building the React and Vite frontend.
	•	Set up API service utilities (using Axios or fetch) to communicate with the backend endpoints running on port 5001.
	•	Build views/components for displaying Artworks, Projects, Tracks, and Videos.
