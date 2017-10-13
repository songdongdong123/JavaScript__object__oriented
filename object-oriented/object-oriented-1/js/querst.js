// var x  = 1
// function ScopeTest(){
//     console.log( x )
// }
// ScopeTest()

var x
 function ScopeTest(){
    var x
    console.log( x )  
    x = 'hello world';
    console.log( x )  
 }
x = 1
 ScopeTest() // => 1

// var name = 'laruence'   
// function echo()
//  {         
//   alert(name);   
//  }      
// function env()
//  {
//     var name = 'eve'     
//     echo();   
// }      
// env()
