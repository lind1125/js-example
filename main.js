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



let apples;
let money;

const start = () => {
  apples = 0;
  money = 2;
  askForAction(); //invoking function
};

const showStatus = () => {
  alert('You have ' + apples + ' apples and $' + money);
};

const askForAction = () => {
  showStatus();
  const choice = prompt('What do you want to do?', 'buy apple / eat apple / restart');

  if (choice === 'buy apple') {
    buyApple();
  }else if (choice === 'eat apple'){
    eatApple()
  }else if (choice === 'restart'){
    start();
  };
};

const buyApple = () => {
  if (money === 0) {
    alert('You don\'t have enough money!')
    askForAction()
  } else {
  apples++;
  money --;
  askForAction();
  };
};

const eatApple = () => {
  if (apples === 0) {
    alert('You have no apples to eat')
    askForAction()
  } else {
    apples--;
    askForAction();
  };
};

start();