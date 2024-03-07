//Fetch API
//fetch(url)
//then(response => json())
//then(data => console.log(data))
//catch(error => console.log(error))




//text dosyası almak
// const story = "http://romanlar.com";
// fetch(story)
// then(response => return response.text());
// then(data => console.log(data));

const adres = 'https://jsonplaceholder.typicode.com/users';

fetch(adres)
    .then(res => return res.json())
    .then(data => console.log(data));