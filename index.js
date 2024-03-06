//Await
function doOperation() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            const random = Math.random();
            if(random < 0.7) {
                resolve ("İşlem başarılı!");
            } else {
                reject("İşlem başarısız!");
            }
        },1000);
    });
}

async function main() {
    try {
        console.log("İşlem başlatılıyor...");
        const result = await doOperation() ;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
main();