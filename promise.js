const promise1 = new Promise((resolve, reject) => {
   resolve("Veri Alımı Başarılı") ;
   reject("Veri Alımı Başarısız");
});
console.log(promise1);

promise1
   .then(value => {
      console.log(value);
   }) //then ile resolve veri yakalandı
   .catch(error => {
      console.log(error);
   }); //hata catch metodu ile yakalandı

const candles = [
   { name : "Magic" , esans : "Paculi"},
   { name : "Flower" , esans : "Çiçeksi"},
   { name : "Coffee" , esans : "Kahve"},
];

const listCandles = () => {
   candles.map((candle) => {
       console.log(candle.name);
   })
};

const addCandle = (newCandle) => {
   const promise1 = new Promise((resolve, reject) => {
      candles.push(newCandle);
   });
   return promise1;
};

addCandle({name : "Rose", esans :"Gül"})
   .then(() => {
      console.log("new candle");
      listCandles();
   })
   .catch((error) => {
      console.error(error);
   });

listCandles();
