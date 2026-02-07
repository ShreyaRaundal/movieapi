🎬 Movie Management REST API

A simple Java Spring Boot backend application with a basic frontend UI to manage movies.
This project demonstrates REST API development, input validation, in-memory data storage, and cloud deployment.

🚀 Live Demo

🔗 Application URL:
https://movieapi-1qvu.onrender.com

⚠️ Note: This is hosted on Render (Free tier).
The service may take 30–50 seconds to wake up on first request.

🛠 Tech Stack

Backend

Java 21

Spring Boot

RESTful APIs

In-memory storage (ArrayList)

Frontend

HTML

CSS

JavaScript (Fetch API)

Deployment

Docker

Render

GitHub

📁 Project Structure
movieapi/
│
├── src/main/java/com/shreya/movieapi
│   ├── controller
│   │   └── MovieController.java
│   ├── entity
│   │   └── Movie.java
│   ├── repository
│   │   └── MovieRepository.java
│   └── MovieapiApplication.java
│
├── src/main/resources
│   ├── static
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── application.properties
│
├── Dockerfile
├── pom.xml
└── README.md

📌 Features Implemented

Add a new movie

Get movie by ID

Delete movie by ID

Input validation (movie name required)

Simple frontend UI

CORS enabled

Dockerized application

Cloud deployment

📡 API Endpoints
➕ Add Movie

POST /api/movies

Request Body:

{
  "name": "Inception",
  "description": "Mind bending thriller",
  "genre": "Sci-Fi"
}


Response:

{
  "id": 1,
  "name": "Inception",
  "description": "Mind bending thriller",
  "genre": "Sci-Fi"
}

🔍 Get Movie by ID

GET /api/movies/{id}

Example:

GET /api/movies/1

❌ Delete Movie

DELETE /api/movies/{id}

🧪 Testing the APIs

You can test the APIs using:

Postman

Browser (GET requests)

Frontend UI

▶️ How to Run Locally
Prerequisites

Java 17+

Maven

Steps
git clone https://github.com/ShreyaRaundal/movieapi.git
cd movieapi
mvn spring-boot:run


Open in browser:

http://localhost:8080

🐳 Docker Support

To build and run using Docker:

docker build -t movieapi .
docker run -p 8080:8080 movieapi

📝 Notes

Data is stored in memory using ArrayList

Restarting the app clears stored data

Designed as a sample task for evaluation

👩‍💻 Author

Shreya Raundal
GitHub: https://github.com/ShreyaRaundal



Add screenshots


<img width="1124" height="573" alt="image" src="https://github.com/user-attachments/assets/3b36b7f0-410f-47a5-9923-6d585e2dcec6" />
<img width="1176" height="559" alt="image" src="https://github.com/user-attachments/assets/4e1736b8-057e-42c5-b5f9-03f5529b0d99" />
<img width="1130" height="581" alt="image" src="https://github.com/user-attachments/assets/64bdf3b8-99e8-4937-ae1c-54f67ed5de35" />
<img width="1122" height="589" alt="image" src="https://github.com/user-attachments/assets/545164ad-507b-41bb-8ac5-ec33db32b1bd" />




