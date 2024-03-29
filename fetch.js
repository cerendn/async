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

// const adres = 'https://jsonplaceholder.typicode.com/users';

// fetch(adres)
//     .then(res => return res.json())
//     .then(data => console.log(data));
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => response.json())
//     .then(function (todos) {
//         todos.forEach((todo) => {
//             console.log(todo.title);
//         });
//     });


fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
//yeni ekleme
const newTodo = {
    userId: 66,
    title: "lorem lorem",
    completed: false,
}
fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: {}
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

//silme
fetch("https://jsonplaceholder.typicode.com/users/2", {
    method: "DELETE",
})
    .then((data) => console.log(data))

//filter
fetch('https://jsonplaceholder.typicode.com/posts?userId=3')
    .then((response) => response.json())
    .then((json) => console.log(json))

//update
 fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: "PUT",
    body: JSON.stringify({
        id:1,
        title:"foo",
        body: "bar",
        userId: ","
    }),
 })
    .then((res) => res.json())
    .then((json) => console.log(json));

    //patch
fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    const pokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon-species/');
    const pokemonType = await fetch('https://pokeapi.co/api/v2/type/');
