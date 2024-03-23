function getData(data) {
    return new Promise((resolve, reject) => {
        console.log("Datalar alınmaya calısıyor...");
      if(data) {
        resolve ('Datalar alındı')
      } else{
        reject('Datalar alınamadı')
      }
    })
}

function cleanData (receivedData) {
    return new Promise((resolve, reject) => {
        console.log("Datalar düzenleniyor...");
        if(receivedData) {
            resolve('Datalar düzenlendi');
        } else{
            reject('Datalar düzenlenemedi')
        }
    })
}
getData(true)
    .then(result => {
        console.log(result);
        return cleanData(true)
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.error(error);
    })


// //async-await
// const jspURI = "https://jsonplaceholder.typicode.com";

//  //const response = fetch(`${jspURI}/comments/1`);
//  console.log(response); //Promise pending
//  //const response = await fetch(`${jspURI}/comments/1`); //error
 
//  const getCommentsWithAwait = async () => {
//     console.log("inner await 1");
//     console.log("inner await 2");
//     const response = await fetch(`${jspURI}/comments/1`);
//     const data = await response.json();
//     console.log("await answer: ", data);
//     console.log("inner await 3");
//     console.log("inner await 4");
// }
// const getCommentsWithThen = async () => {
//     console.log("inner then 1");
//     console.log("inner then 2");
//     fetch(`${jspURI}/comments/1`)
//         .then(response => response.json())
//         .then(data => console.log("then answer: ", data));
//     console.log("inner then 3");
//     console.log("inner then 4");

// }

// console.log("outer 1");
// console.log("outer 2");
// getCommentsWithAwait();
// getCommentsWithThen();
// console.log("outer 3");
// console.log("outer 4");

const pokemonData = await pokemonResponse.json();