const apiKey = 'gvg9eQWgf5yglfTcB8z21EHeK6hPYpvHqUo2nHQ8'
const url = 'https://api.nasa.gov/planetary/apod?'

let container = document.querySelector('.container');

let imageContainer = document.querySelector('.image-container');

let button = document.getElementById('fetch-image');

button.addEventListener('click', () => {
  let imageContainer = document.querySelector('.image-container');
  imageContainer.remove();

  let newImageContainer = document.createElement('div');
  newImageContainer.classList.add('image-container');

  container.append(newImageContainer);

  let dateInput = document.querySelector('.details-input input');
  let date = dateInput.value;
  
  let request = new XMLHttpRequest();
  request.open('GET', url+"date=" + date + "&api_key=" + apiKey, true);
  request.send();
  request.onload = function(){
    if(request.status === 200){
    //console.log("workn");
    let data = JSON.parse(request.responseText);
   //document.write(data)
    let imageUrl = data.hdurl;
    let image = document.createElement('img');
    image.src = imageUrl;
    newImageContainer.append(image);

  }else{
    window.alert('Please enter in the correct format (yyyy-mm-dd)');
  }
  }
})