let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let whoRandom = who[Math.floor(Math.random) * who.lenght]
let whatRandom = what[Math.floor(Math.random) * what.lenght]
let whenRandom = when[Math.floor(Math.random) * what.lenght]



function onLoad()
{
    (whoRandom+ whatRandom + whenRandom)
}

Document.getElementById("excuse").innerHTML