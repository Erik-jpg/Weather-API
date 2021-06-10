// fetch('http://api.openweathermap.org/data/2.5/weather?q=Portland&appId=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial')
//   .then(response => response.json())
//   .then(handleData);
//   function handleData(data) {
//     console.log(data);
//     const repoUlEl = document.createElement('ul');
//     data.forEach(handleRepo);
//     function handleRepo(repo){
//         const aEl = document.createElement('a');
//         aEl.setAttribute('href', repo.html_url);
//         aEl.textContent = repo.name;
//         console.log('a element is', aEl);
//         const repoLiEl = document.createElement('li');
//         console.log('li element is',repoLiEl);
//         repoLiEl.appendChild(aEl);
//         repoUlEl.appendChild(repoLiEl);
//     }
//     const body = document.querySelector('body');
//     body.appendChild(repoUlEl);
//   }

function getWeatherByCity(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},840&appid=d91f911bcf2c0f925fb6535547a5ddc9`)
      .then(function (response) {
        return response.json();
    }).then(function(data){
      console.log(`weather in ${city} is: `, data);
      const h1El = document.createElement('h1');
      const h2El = document.createElement('h2');
      h1El.textContent = data.weather[0].description;
      h2El.textContent = convertTemp(data.main.temp);  
     
      document.body.appendChild(h1El);
      h1El.appendChild(h2El);
    });
  }
  const userQuery = prompt('Whats your query?')
  getWeatherByCity(userQuery);
  // getWeatherByCity('Paris');
  function convertTemp(Kelvin) {
     return (Kelvin - 273.15) * 9/5 + 32
  };

