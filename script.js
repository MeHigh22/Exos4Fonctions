// const greet = () => "Bonjour";


// console.log(greet());


// const calcul = function(nbr1,nbr2){
//     return console.log(nbr1+nbr2)
// }

// calcul(5,5);

// const prenom = function(prenom){
//     return console.log(`Bonjour ${prenom}`);
// }

// prenom("Mihai");

// const parametres = function(string,number,booleen){
//     console.log(typeof string);
//     console.log(typeof number)
//     return console.log(typeof booleen);


// }

// parametres("Merde", 42, true)


// const MIN = 1;
// const MAX = 20;
// let random = Math.floor(Math.random() * (MAX - MIN +1) + MIN);
// number = 0;
// chances = 0;

// const hasard = function(){

// do {
//     let input = prompt(`Entre un nombre entre ${MIN} et ${MAX}`);
//     var difference = input - random;
//     difference = Math.abs(difference);
//     number = parseInt(input);
//     chances++;
//     if (number == random){
//         return alert(`Bravo ! Après ${chances} essai(s)`)
//     } else if(chances == 5){
//         alert("Game Over");
//         break;
//     }
//     if (difference <= 5 && difference >= 3){
//         alert("Tiède");
//     } else if(difference == 2){
//         alert("Chaud")
//     }else if (difference ==1){
//         alert("Brûlant");
//     }
// } while(number != random);
// }


// hasard();

// let tableau = ["aroufgangsta", "carré", 42, 56, true, false ];

// const filtre = function(){
//     tableau.forEach(element => {
//     if(typeof element == "string"){
//         element = element.charAt(0).toUpperCase() + element.slice(1);
//         return console.log(element);
//     }   else if(typeof element == "number"){
//         return console.log(element**2);
//     }   else if(typeof element == "boolean"){
//         element = !element
//         return console.log(element);
//     }
// });
// }

// filtre();

// let moinMoyenne = [];
// let moyenne = [];
// let plusMoyenne = [];



// const jetejuge = function(prenom, salaire){
//         if(salaire < 1600){
//         return moinMoyenne.push(prenom);
//         }
//         else if(salaire <= 1800 && salaire >= 1600){
//             return moyenne.push(prenom);
//         }
//         else if(salaire >= 1800){
//             return plusMoyenne.push(prenom);
//         }
// }



// jetejuge("Mihai", 1500);
// jetejuge("Sacem", 2000);
// jetejuge("Felix", 1600)

// console.log(moinMoyenne);
// console.log(moyenne);
// console.log(plusMoyenne);


// let concert = [];


// const cine = function(prenom, age){
//     age = parseInt(prompt("Quel âge avez-vous?"))
//     if (age >= 18 && concert.length <=7){
//         return concert.push(prenom);
//     } else if (age < 18){
//         return console.log("Vous êtes trop jeunes mais si vous téléchargez le film je ne dirai rien ;)");
//     }
// }

// cine("Mihai")
// cine("Mozilla")

// console.log(concert);