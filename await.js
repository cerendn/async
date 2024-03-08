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