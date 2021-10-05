
function excuseGenerator(){
    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed on','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    console.log(who[Math.floor(Math.random()*3+1)] + ' ' + action[Math.floor(Math.random()*3+1)] + ' ' + what[Math.floor(Math.random()*2+1)] + ' ' + when[Math.floor(Math.random()*4+1)]);
    return who[Math.floor(Math.random()*3+1)] + ' ' + action[Math.floor(Math.random()*3+1)] + ' ' + what[Math.floor(Math.random()*2+1)] + ' ' + when[Math.floor(Math.random()*4+1)];
};
let search = document.querySelector("p");
search.innerHTML = excuseGenerator();