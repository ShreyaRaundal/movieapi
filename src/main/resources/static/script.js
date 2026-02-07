const BACKEND_URL = "/api/movies";
let allMovies = [];

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2500);
}

function showLoader(show) {
    document.getElementById("loader").style.display = show ? "block" : "none";
}

function addMovie() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const genre = document.getElementById("genre").value;

    if (!name) {
        showToast("Movie name is required");
        return;
    }

    fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, genre })
    }).then(() => {
        showToast("Movie added 🎉");
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("genre").value = "";
        getMovies();
    });
}

function getMovies() {
    showLoader(true);

    fetch(BACKEND_URL)
        .then(res => res.json())
        .then(data => {
            allMovies = data;
            populateGenres(data);
            renderMovies();
            showLoader(false);
        });
}

function populateGenres(movies) {
    const select = document.getElementById("genreFilter");
    const genres = [...new Set(movies.map(m => m.genre).filter(Boolean))];

    select.innerHTML = `<option value="">All Genres</option>`;
    genres.forEach(g => {
        const opt = document.createElement("option");
        opt.value = g;
        opt.textContent = g;
        select.appendChild(opt);
    });
}

function renderMovies() {
    const list = document.getElementById("movieList");
    const empty = document.getElementById("empty");
    const search = document.getElementById("search").value.toLowerCase();
    const genre = document.getElementById("genreFilter").value;

    list.innerHTML = "";

    const filtered = allMovies.filter(m =>
        m.name.toLowerCase().includes(search) &&
        (genre === "" || m.genre === genre)
    );

    if (filtered.length === 0) {
        empty.style.display = "block";
        return;
    }

    empty.style.display = "none";

    filtered.forEach(movie => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${movie.id}. ${movie.name} (${movie.genre})</span>
            <button onclick="deleteMovie(${movie.id})">Delete</button>
        `;
        list.appendChild(li);
    });
}

function deleteMovie(id) {
    fetch(`${BACKEND_URL}/${id}`, { method: "DELETE" })
        .then(() => {
            showToast("Movie deleted 🗑️");
            getMovies();
        });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

getMovies();
