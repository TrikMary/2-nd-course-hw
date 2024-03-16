const newspaper = {
	sports: {
        title : 'ARod Hits Home Run',
        writers : ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige']
    }, 
	business: {
        title : 'GE Stock Dips Again',
	    writers : ['Adam Smith', 'Albert Humphrey', 'Charles Handy']
    },
    mov: {
        title: 'Superman Is A Flop',
	    writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris']
    }
}
console.log(newspaper.sports.title); // ARod Hits Home Run
console.log(newspaper.business.writers[0]); // Adam Smith
console.log(newspaper['mov']['title']);

// let arrSum = [3,4,5,6];
// const sum = ([2],[3],...rest) => {
//     let result = c + b;
//     console.log(result);
//     console.log(rest);
// }
// sum(...arrSum);