// alert("HELLOOOOOOO  World!")

// const yourAnswer = prompt('Do you like apples?', 'Yes/No')

// if (yourAnswer === 'Yes') {
//   console.log('Great!')
// } else if (yourAnswer === 'No') {
//   console.log('HOW CAN YOU NOT LIKE APPLES!')
// } else {
//   console.log('Does not compute.')
// }

// const greet = () => {
//   alert('Hi!')
// }

// const sayBye = () => {
//   alert('Bye!')
// }

// const answer = prompt('Are you arriving or leaving?', 'Arriving or Leaving')

// if (answer === 'Arriving') {
//   greet()
// } else if (answer === 'Leaving') {
//   sayBye()
// } else {
//   alert('Answer the question!')
// }

// let action = null;

// while(action !== 'stop') {
//   action = prompt('What do you want to do?', 'Your action')
// }


// const func1 = () => {
//   console.log('hello')
// }
// const func2 = () => {
//   console.log('oh hai')
//   func1()
// }

// func2()

// const func1 = () => {
//   console.log(1)
//   func2()
//   func3()
//   console.log('Finished!')
// }

// const func2 = () => {
//   console.log(2)
//   func4()
//   func6()
// }

// const func3 = () => {
//   console.log(3)
//   func5()
// }

// const func4 = () => {
//   console.log(4)
// }

// const func5 = () => {
//   console.log(5)
// }

// const func6 = () => {
//   console.log(6)
// }

// func1()



// let apples;
// let money;

// const start = () => {
//   apples = 0;
//   money = 2;
//   askForAction(); //invoking function
// };

// const showStatus = () => {
//   alert('You have ' + apples + ' apples and $' + money);
// };

// const askForAction = () => {
//   showStatus();
//   const choice = prompt('What do you want to do?', 'buy apple / eat apple / restart');

//   if (choice === 'buy apple') {
//     buyApple();
//   }else if (choice === 'eat apple'){
//     eatApple()
//   }else if (choice === 'restart'){
//     start();
//   };
// };

// const buyApple = () => {
//   if (money === 0) {
//     alert('You don\'t have enough money!')
//     askForAction()
//   } else {
//   apples++;
//   money --;
//   askForAction();
//   };
// };

// const eatApple = () => {
//   if (apples === 0) {
//     alert('You have no apples to eat')
//     askForAction()
//   } else {
//     apples--;
//     askForAction();
//   };
// };

// start();

// let myDiv = document.getElementById('hello');

// // console.log(myDiv)

// let theSquares = document.getElementsByClassName('square')

// // console.log(theSquares[0])
// // console.log(theSquares[1])

// let theDivs = document.getElementsByTagName('div') // too broad most of the time

// // console.log(theDivs[0]) 
// // console.log(theDivs[1]) 

// let myDiv2 = document.querySelector('#gb')

// // console.log(myDiv2)

// let mySquares2 = document.querySelectorAll('.square')
// console.log(mySquares2[0])

// // use the selector to change styles
// myDiv.style.backgroundColor = 'green'
// myDiv2.style.height = '300px'

// // Changing content

// myDiv.innerText = 'BUTTS, BABY!'
// myDiv2.innerHTML = '<h2>THIS IS AWESOME!</h2>'

// let myH2 = document.getElementsByTagName('h2')

// console.log(myH2[0])

// creating an element
let a = document.createElement('a');
a.href = 'http://hackertyper.com'
a.textContent = 'Hack the planet!'

// adds link to the bottom of the page
document.body.appendChild(a)

let list = document.getElementById("my-favorite-movies")

// creeate
// let newMovie = document.createElement('li')

//modify
// newMovie.textContent = 'Pirates of Silicon Valley'

// attach
// list.appendChild(newMovie)

// syntax to add beginning or in the middle of an existing element

// let insertedNode = parentNode.insertBefore(newNode, referenceNode)


let newMovie = document.createElement('li');
newMovie.innerText = 'Dr. Strangelove';

// get reference to the second element inside the list
let second = list.children[1];
console.log(second)

list.insertBefore(newMovie, second)

// remove an element
list.removeChild(second);
// second here is referring to the original value, even though technically it is no longer the second elementin the list