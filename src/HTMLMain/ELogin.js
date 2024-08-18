let today = new Date();
let hours = today.getHours();

let greeting;

if (hours > 18) {
    greeting = 'Good evening!';
} else if (hours > 12) {
    greeting = 'Good afternoon!'
} else if (hours > 0) {
    greeting = 'Good morning!'
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>')