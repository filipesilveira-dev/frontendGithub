(function() {
    console.log("Esta função é executada imediatamente!");
  })(); //os parênteses ao final transformam essa função em IIFE(Immediately Invoked Function Expression)
  
//versão com arrow function
(() => {
    console.log("Esta arrow function também é executada imediatamente!");
  })();

//versão tradicional
const funcao = function(){
    return console.log("Esta função é executada");
}();

