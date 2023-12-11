// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


// console.log(axios());

function getTodos() {
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos',
        params: {
            _limit: 5
        }
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))

}


const getBtn = document.getElementById("get")

// console.log(getBtn);
getBtn.addEventListener("click", function () {

    getTodos()
})





//recursion using a controlled approach
   let counter = 0


// function sayMyName(){
//     counter++

//     console.log("Latifah");

// if(counter == 50){
//     return false
// } else {
//     sayMyName()

// }
// }

// sayMyName()











/**
 * Make a todo list 
 * the data should be saved in an array
 * 
 * the list can create, read, update and delete
 */


/**
 * Revise the JS concepts
 */