document.getElementById("get-weather-btn").addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("city-input").value;
    const apiKey = "YOUR_API_KEY"; // Replace with OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found!");
            return;
        }

        // Update HTML with weather data
        document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").textContent = `${data.main.temp}°C`;
        document.getElementById("description").textContent = data.weather[0].description;
    } catch (error) {
        console.error("Error fetching weather data: ", error);
        alert("Error fetching weather data. Please try again.");
    }
}




