// Fetch country data from the REST Countries API
fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => displayCountryFlags(data))
    .catch(error => console.error("Error fetching data:", error));

// Display country flags in the console
function displayCountryFlags(countriesData) {
    countriesData.forEach(country => {
        console.log(`Country: ${country.name} | Flag: ${country.flag}`);
    });
}
