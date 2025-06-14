let employee = {
firstName : 'Damien', // proriété : 'valeur' (chaine de charactères)
lastName : 'Dupont'
}; // <---- "{}" Délimite l'objet

console.log(employee);

/* let employee = new Object(); // Object() <----- c'est une fonction qui renvoit un nouveau objet
employee.firstName = 'Damien'
employee.lastName = 'Dupont'

console.log(employee); */ //autre façon de faire

employee.email = 'damien@societe.fr';
console.log(employee);

employee['country'] = 'Belgium';
console.log(employee);

let prop = 'age';
employee[prop] = 44;
console.log(employee);

employee.email = '';
delete employee['email'];
delete employee.age;

console.log(employee);

// On peut utliser des [] ou . pour ajouter ou supprimer des valeurs

let employeeDeux = {
    firstName : 'Robert',
    lastName : 'Duche',
    country: 'France'
}

console.log(employeeDeux.firstName);
console.log(employeeDeux['lastName']); // accès de manière dynamique

let propDeux = 'country';
console.log(employee[propDeux]); // accès de maniere dynamique à partir d'une variable

