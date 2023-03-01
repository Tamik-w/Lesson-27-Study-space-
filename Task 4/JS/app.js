function MakeUsers(name, age){
    this.name = name;
    this.age = age;
}

let user = new MakeUsers('Mike');

    function showMovie (user){
    try{
        if(isNaN(user.age)){
            throw new Error('Invalid age')
        }
        if(user.age >= 18) {
            alert('You can watch this movie');
        
        } else {
            alert('Sorry, you are too young');
        }
    } catch(error){
        console.error('Error: ', error.message);
        let newAge = prompt('Please enter a valid age:');
        user.age = newAge;
        showMovie(user);
    }
}
showMovie(user);
