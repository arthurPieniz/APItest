var paises = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Equador", "Guiana", "Paraguai", "Peru", "Suriname", "Uruguai", "Venezuela"]
var paisesIndex = ["8", "28", "29", "47", "51", "65", "92", "195", "181", "222", "249", "252"]

var section = document.createElement("section")

for(var i = 0; i < paises.length; i++){
    let button = document.createElement("button")
    let img = document.createElement("img")
    let txt = document.createElement("h2")

    let body = document.body

    button.id = paises[i]
    img.className = paises[i]
    img.src = paises[i] + ".png"
    
    txt.innerHTML = paises[i]

    body.appendChild(section)
    section.appendChild(button)
    button.appendChild(img)
    button.appendChild(txt)
}


document.getElementById("Argentina").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[0];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Bolivia").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[1];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Brasil").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[2];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Chile").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[3];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Colombia").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[4];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Equador").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[5];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Guiana").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[6];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Paraguai").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[7];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Peru").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[8];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Suriname").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[9];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Uruguai").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[10];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})

document.getElementById("Venezuela").addEventListener("click",()=>{
    //Valor a ser enviado
    var meuValor = paisesIndex[11];

    // Construir a URL com o parâmetro de consulta
    var urlDestino = "info.html?valor=" + encodeURIComponent(meuValor);

    // Redirecionar para a página de destino
    window.location.href = urlDestino;
})