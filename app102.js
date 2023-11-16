//1.Nested Function 
 //1.1 Outer function
 function greet(){
    const name ='Frank'
    //1.2 Innerr function
    function displayname(){
        // console.log("Hi"+" "+name)
        return "Hi" + " " + name;
    }
    //Calling Inner function
    // displayname()
    return displayname()
 }
 //Calling Outer function
 const display = greet()
 console.log(display)
 document.getElementById("demo").innerHTML = display;