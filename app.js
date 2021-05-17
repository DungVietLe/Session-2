/*Bai 1 
// let inputNumber = 7;
// for ( let i = 0 ; i < inputNumber ; i++) {
//     console.log(i);
// }

///////////////////////////////////////////////////

// let getNumber = Number(prompt('enter a number :'));

// for ( let i = 0 ; i < getNumber; i++) {
//     console.log(i);
// }

/////////////////////////////////////////////////////

// let getNumber = Number(prompt('enter:'));

// for ( let i = 3 ; i < getNumber ; i++ ) {
//     console.log(i);
// };

//////////////////////////////////////////////////////

// let getC = Number(prompt('enter C :'));
// let getN = Number(prompt('enter N :'));

// for (let i = getC ; i < getN ; i++) {
//     console.log(i);
// };

//////////////////////////////////////////////////////

// let getC = Number(prompt('Enter :'));

// let getN = Number(prompt('Enter :'));


// for (let i = getC ; i < getN ; i+=3 ) {
//     console.log(i);
// };

///////////////////////////////////////////////////////

//  let getC = Number(prompt('Enter :'));
//  let getN = Number(prompt('Enter :'));

//  let getS = Number(prompt('Enter :'));


//  for ( let i = getC ; i < getN ; i+=getS) {
//             console.log(i);
//  };


* */

/*Bai 2 


// let getNumber = Number(prompt('enter a number :'));
// let giaithua = 1 ;
// for ( let i = 1 ; i <= getNumber ; i++){
//     giaithua = giaithua * i;
//     alert('giai thua bang ' + giaithua);
// };
  


* */




/*Bai 3


// let getAge = Number(prompt('How old are u : '));

// if (getAge < 14 ) {
//     alert('you are not old enought to view this content');
// }else {
//  alert('Enjoy!')
// }





* */

/**Bai 4
 // let getNumber = Number(prompt('enter a number '));
 
 
 // let value = 9;
 
 // for ( let i = 0 ; i <= 9 ; i++ ) {
 //     if (getNumber <=5) {
 //         alert('lower half of 9');
 //         break;
 //     }else {
 //         alert('higher half of 9');
 //         break;
 //     }
 // };
 
  
 */


/**bai 5
 * 
 let getX = Number(prompt('press X :'));
 let getN = Number(prompt('press N :'));

 for ( let i = getX ; i < getN ; i++){
     if ( getX < getN/2) {
         alert(`${getX} is in lower half of ${getN}`);
         break;
     }else {
        alert(`${getX} is in higher half of ${getN}`);
        break;
     }
 };
 * 
 */


/** BAI 6
 *  let getNumber = Number(prompt('Nhap so vao : ')) ; 


 let isLoop = true;

 while ( isLoop) {
    if( getNumber % 2 == 1  ) {
        alert('day la so le ');
        break;
    }else if ( getNumber % 2 == 0 ) {
        alert('day la so chan ');
        break;
    };
 };
 */

/**BAI 7 
 * 
 //  for( let i = 0 ; i < 3 ; i++) {
 
 // console.log('L');
 // }
 // for( let j = 0 ;j < 3 ; j++){
 //     console.log('H');
 // }
 // let number = Number(prompt('enter:'));
 
 
 // let total = number;
 
 // for(let i = 0 ; i < total ; i++) {
 //     if (i % 2 ==0 ) {
 //         console.log('0');
 //     }else {
 //         console.log('1');
 //     }
 // }
 // let getNumber = Number(prompt('enter a number :'));
 
 
 
 // for (let i = 0; i < getNumber; i++) {
 //  if (i  % 2 == 0) {
 //      console.log('L');
 //  }
 // };
 
 // for (let i = 0; i < getNumber; i++) {
 //     if (i  % 2 != 0) {
 //         console.log('H');
 //     }
 //    };
 * 
*/






/**BAI 8
 * 
 let getKg = Number(prompt('enter a kg:'));
 let getCM = Number(prompt('enter a met'));
 let getM = getCM / 100;
 
 let getBmi = getKg / (getM * getM);
 getBmi = getBmi.toFixed(1);
 if (getBmi < 16) {
     alert(`Your BMI ${getBmi}`);
     alert('Severely underweight');
 } else if (getBmi >= 16 && getBmi <= 18.5) {
     alert(`Your BMI ${getBmi}`);
     alert('Underweight');
 } else if (getBmi >= 18.5 && getBmi <= 25) {
     alert(`Your BMI ${getBmi}`);
     alert('Normal');
 } else if (getBmi >= 25 && getBmi <= 30) {
     alert(`Your BMI ${getBmi}`);
     alert('Overweight');
 } else if (getBmi > 30) {
     alert(`Your BMI ${getBmi}`);
     alert('Obese');
 }
 * 
 */



