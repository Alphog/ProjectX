const input = document.getElementById('input-field');
const button = document.getElementById('search-btn');
const image = document.querySelector('.image1');
const temperature =document.getElementById('temperature');
const city =document.getElementById('city-name');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('speed');
const rest =document.querySelector('.rest');

const apiUrl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
button.addEventListener('click',() =>{
    fetchData(input.value);
}
);


async function fetchData(ville){
  let response = await fetch(apiUrl+ville +`&appid=${apiKey}`);
  let data = await response.json();


  speed.innerText =`${data.wind.speed} Km/h`;
  humidity.innerText = `${data.main.humidity}%`;
  city.innerText = data.name;
  temperature.innerText = `${Math.round(data.main.temp)}℃`;
  if(data.weather[0].main =='Rain'){
    image.src='images/rain.png';
  }
  else if(data.weather[0].main == 'Clouds'){
    image.src='images/clouds.png';
  }
    else if(data.weather[0].main == 'Drizle'){
        image.src='images/drizzle.png';
    }
    else if(data.weather[0].main =='Mist'){
        image.src='images/mist.png';
    }
        else if(data.weather[0].main='Clear'){
            image.src ='images/clear.png';
        }
        else if(data.weather[0].main =='Snow'){
            image.src ='images/snow.png';
        }
rest.style.display='block';
}
