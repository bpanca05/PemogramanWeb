function sayHello (){
  document.write("Hello World <br>")
};
function sayHelloWithParams(firstname, lastname){
  document.write(`Hello, ${firstname} ${lastname}! <br>`)
}

let penamaan =  function (name){
  document.write(`Hola, ${name}! <br>`)
}

function outerFunction(outerVariable){
  function innerFunction(innerVariable){
   document.write("<br> Outer Variable: " + outerVariable)
   document.write("<br> Inner Variable: " + innerVariable)
  }
  innerFunction("Ansible")
}

sayHello();
sayHelloWithParams('Nama', "Saya")
penamaan("Cihuy")
outerFunction("Puppet")
