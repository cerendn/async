console.log(1);
console.log(2);
setTimeout(() => console.log(3),1000) ;
console.log(4);
console.log(5);




// const request = new XMLHttpRequest(); //readyState: 0

// request.addEventListener(
//     "readystatechange",
//     () => {
//         if(request.readyState === 4 && request.status === 200){
//             console.log(request.responseText);
//         }
//         else{
//             console.warn(`An error occurred: ${request.status} - ${request.statusText}`);
//         }
//     }
// );

// //posts
// //users
// //comments
// //todos
 
// request.open("GET", "https://jsonplaceholder.typicode.com/users/");//readyState: 1
// request.send();//readyState: 2

const jspURI = "https://jsonplaceholder.typicode.com";

const getRequest = (endpoint,callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener(
        "readystatechange", () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                callback(null,data);
            }
            else {
                callback(`An error occurred: ${request.status} - ${request.statusText}`, null)
            }
        }
    );
    request.open("GET",endpoint);
    request.send();
}
getRequest(
    `${jspURI}/users/2`,
    (err,data) => {
        if(err) {
            console.error(err);
        }
        else{
            console.table(data);
        }
    }
);

const postURL = "https://jsonplaceholder.typicode.com/";

const getComments = (point,callbackFunc) => {
    const comments = new XMLHttpRequest();
    comments.addEventListener(
        "readystatechange",() => {
            const result = JSON.parse(comments.responseText);
            callbackFunc(null,result);
        } 
    );
    comments.open("GET",point,false);
    comments.send();
}
getComments(
    `${postURL}\comments`,
    (error,res) => {
        if(res) {
            console.table(result);
        } 
        else{
            console.error(error);
        }
    }
);

console.log("Hello,");

const asyncExample = () => {
    setTimeout(() => {
        console.log("*?");
    },1000) ;
};
asyncExample();
console.log("World.");

const xhr = new XMLHttpRequest();
xhr.open("GET",'https://jsonplaceholder.typicode.com/posts',true);
xhr.send();
xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
        console.log(xhr.responseText);
    }
};
