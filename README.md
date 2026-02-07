

````md
# Movie Management REST API

## Overview
This is a simple Java Spring Boot backend application that provides a RESTful API
for managing a collection of movies.  
The application uses an **in-memory data store (ArrayList)** as required.

## Tech Stack
- Java 17
- Spring Boot
- REST API
- In-memory storage using ArrayList

## How to Run the Application

### Prerequisites
- Java 17 installed
- Maven installed

### Steps to Run
1. Clone the project or download the source code
2. Open a terminal in the project root directory
3. Run the application using:
   ```bash
   mvn spring-boot:run
````

4. The application will start at:

   ```
   http://localhost:8080
   ```

## API Endpoints

### 1. Add a Movie

**POST** `/api/movies`

**Request Body (JSON):**

```json
{
  "name": "Interstellar",
  "description": "Sci-fi movie",
  "genre": "Sci-Fi"
}
```

**Response:**

```json
{
  "id": 1,
  "name": "Interstellar",
  "description": "Sci-fi movie",
  "genre": "Sci-Fi"
}
```

---

### 2. Get Movie by ID

**GET** `/api/movies/{id}`

**Example:**

```
GET /api/movies/1
```

**Response:**

```json
{
  "id": 1,
  "name": "Interstellar",
  "description": "Sci-fi movie",
  "genre": "Sci-Fi"
}
```

---

### 3. Get All Movies (Optional Enhancement)

**GET** `/api/movies`

**Response:**

```json
[
  {
    "id": 1,
    "name": "Interstellar",
    "description": "Sci-fi movie",
    "genre": "Sci-Fi"
  },
  {
    "id": 2,
    "name": "Inception",
    "description": "Mind bending thriller",
    "genre": "Sci-Fi"
  }
]
```

---

## Input Validation

* Movie name is mandatory.
* If the name is missing or empty, the API returns `400 Bad Request`.

## Important Notes

* The application uses **in-memory storage (ArrayList)**.
* Data is not persisted after application restart.
* Movie IDs are auto-generated during runtime.

## Future Enhancements

* Persist data using a database
* Add update and delete APIs
* Add pagination and sorting

```

