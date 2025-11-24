

/*const url = "https://jsonplaceholder.typicode.com/posts";
const response = fetch(url);

try {
const data = response.then(_response => _response.json());



const _json = data.then(json => {
    json.forEach(element => {
        console.log(element.username);
    });
});
console.log(response);


} catch (error) {
    console.log('Error:', error);
}
*/

// ---------------------------Ulesane 1 -------------------------------------------

  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = fetch(url);
    const post = response.then(_response => _response.json());
    const _json = post.then(json => {
      json.forEach(element => {
        console.log(element.title);
      });
    });
  } catch (error) {
    console.error(error.message);
  }


  // ---------------------------Ulesane 2 -------------------------------------------
// Async/Await
function delay(){
    return new Promise(resolve => console.log('Hello 1.1'));
}

console.log('Hello1');
const _response = async () => {
    await delay();
}
_response()

console.log('Hello2');
console.log('Hello3');