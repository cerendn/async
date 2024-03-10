// const promise1 = new Promise((resolve, reject) => {
//    resolve("Veri Alımı Başarılı");
//    reject("Veri Alımı Başarısız");
// });
// console.log(promise1);

// promise1
//    .then(value => {
//       console.log(value);
//    }) //then ile resolve veri yakalandı
//    .catch(error => {
//       console.log(error);
//    }); //hata catch metodu ile yakalandı

// const candles = [
//    { name: "Magic", esans: "Paculi" },
//    { name: "Flower", esans: "Çiçeksi" },
//    { name: "Coffee", esans: "Kahve" },
// ];

// const listCandles = () => {
//    candles.map((candle) => {
//       console.log(candle.name);
//    })
// };

// const addCandle = (newCandle) => {
//    const promise1 = new Promise((resolve, reject) => {
//       candles.push(newCandle);
//    });
//    return promise1;
// };

// addCandle({ name: "Rose", esans: "Gül" })
//    .then(() => {
//       console.log("new candle");
//       listCandles();
//    })
//    .catch((error) => {
//       console.error(error);
//    });

// listCandles();

const getRequestwithPromise = (endpoint) => {
   return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener(
         "readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
               const data = JSON.parse(request.responseText);
               resolve(data);

            }
            else if (request.readyState === 4) {
               reject(`An error occurred: ${request.status} - ${request.statusText}`)

            }
         }
      )
      request.open("GET", endpoint);
      request.send();
   });
}


getRequestwithPromise(
   "https://jsonplaceholder.typicode.com/users/3"
) .then((resolve => {
   console.log(resolve);
} )  )
   .catch((reject => {
      console.warn(reject);
   }))
   .finally(() => console.log("Final"))
