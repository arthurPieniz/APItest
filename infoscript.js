// URL da API JSONPlaceholder para obter posts
var apiUrl = 'https://servicodados.ibge.gov.br/api/v1/paises/%7Bpaises%7D';

// Cria uma nova instância do objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// Configura a solicitação GET para a URL da API
xhr.open('GET', apiUrl, true);

// Manipula o evento de conclusão da solicitação
xhr.onload = function () {
    if (xhr.status == 200) {
        // Analisa a resposta JSON
        var data = JSON.parse(xhr.responseText);
        
        // Exibe os dados na console (você pode manipular os dados conforme necessário)
        console.log(data);

        // Obter o valor da URL
        var urlParams = new URLSearchParams(window.location.search);
        var valorRecebido = urlParams.get('valor');
        console.log(valorRecebido);

        document.getElementById("nome").innerHTML = data[valorRecebido].nome.abreviado
        document.getElementById("area").innerHTML += data[valorRecebido].area.total + " km2"
        document.getElementById("idioma").innerHTML += data[valorRecebido].linguas[0].nome
        document.getElementById("moeda").innerHTML += data[valorRecebido].governo.capital.nome
        document.getElementById("hist").innerHTML = data[valorRecebido].historico

        var paises = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Equador", "Guiana", "Paraguai", "Peru", "Suriname", "Uruguai", "Venezuela"]
        var paisesIndex = ["8", "28", "29", "47", "51", "65", "92", "195", "181", "222", "249", "252"]

        for(let i = 0; i < paisesIndex.length; i++){
            if(valorRecebido == Number(paisesIndex[i])){
                document.querySelector("img").src = paises[i] + ".png"
            }
        }

    } else {
        // Exibe uma mensagem de erro se a solicitação falhar
        console.error('Error fetching data. Status:', xhr.status);
    }
};

// Manipula erros de rede
xhr.onerror = function () {
    console.error('Network error.');
};

// Envia a solicitação
xhr.send();
