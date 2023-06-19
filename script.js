let selectCountry = document.querySelector(".countryName");
let search = document.querySelector(".search");
let details = document.querySelector("#details");
search.addEventListener("click", () => {
  let countryUrl = `https://restcountries.com/v3.1/name/${selectCountry.value}?fullText=true`;
  console.log(countryUrl);
  async function fetchData() {
    try {
      const response = await fetch(countryUrl);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        details.innerHTML = ` <div class="country-details col-6">
            <table>
              <tr>
                <td>Country Name:${data[0].name.common}</td>
              </tr>
              <tr>
                <td> <img src=${data[0].flags.png} alt="" /></td>
              </tr>
              <tr>
                <td>Capital city:${data[0].capital[0]}</td>
              </tr>
               <tr>
                <td>Region:${data[0].continents[0]}</td>
              </tr>
              <tr>
              <td>Time Zone:${data[0].timezones}</td>
              </tr>
              <tr>
              <td>Population:${data[0].population}</td>
              </tr>
            </table>
          </div>`;
      } else {
        throw new Error("Error: " + response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  fetchData();
});
