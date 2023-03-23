var moeda1 = document.querySelector('#moeda1')//card de moedas 1
var moeda2 = document.querySelector('#moeda2')//card das moedas 2

    //função que ira trazer os dados da API
    var chama = (event) => {
    //pegamos qual card foi clicado
    var moeda = event.target;
    //valor da moeda selecionada
    var moedaValue = moeda.value
    //pegamos o pai do elemento
    var pai = moeda.parentElement 
    //e pegamos o 'irmão' do select, para adicionar as informações
    var irmao = pai.children[1]
    //aqui pegamos a primeira option e desativamos
    var moedas = moeda.children[0]
    moedas.setAttribute('disabled','')

    //aqui criamos a conexão com a API, de acordo com a MOEDA selecionada
   fetch(`https://www.mercadobitcoin.net/api/${moedaValue}/ticker/`)
   .then((res)=>{
      return res.json();//transformo a resposta em json
    })  //aqui pegamos o corpo já transformado em JSON, que foi o retorno do THEN anterior
        .then(corpo =>{
            var resp = corpo.ticker //pego apenas os dados que desejo
            var last = parseFloat(resp.last).toFixed(2)//transformo os dados em numero
            var high = parseFloat(resp.high).toFixed(2)//e fixo 2 casas decimais
            var low = parseFloat(resp.low).toFixed(2)//apenas os valores a serem utilizados
            var date = new Date()

            //criamos um template string com as informações obtidas da API
            var lis = `
            <li>Last: R$${last}</li>
            <li>High: R$${high}</li>
            <li>Low: R$${low}</li>
            <li>Data:${date.getDay()}/${date.getMonth()}/${date.getFullYear()}</li>
            <li>Hora:${date.getHours()}:${date.getMinutes()}</li>
            `
            //inserimos o template criado no local de exibição
            irmao.innerHTML = lis

        })
            .catch((err)=>{
                console.log(err)
            })
}

//chamamos a function sempre que ouver uma mudança de OPTION, trazendo assim o resultado esperado
moeda1.onchange = chama;
moeda2.onchange = chama;

