var moeda1 = document.querySelector('#moeda1')
var moeda2 = document.querySelector('#moeda2')


// moeda.addEventListener('change', 

    var chama = (event) => {

    var moeda = event.target;//pegamos qual card foi clicado
    var moedaValue = moeda.value//valor que definirá a moeda que escolhemos
    var pai = moeda.parentElement //pegamos o pai do elemento
    var irmao = pai.children[1]//e pegamos o 'irmão' do select, para adicionar as informações


   fetch(`https://www.mercadobitcoin.net/api/${moedaValue}/ticker/`)
   .then((res)=>{
      return res.json();//transformo a resposta em json
    })
        .then(post =>{
            var resp = post.ticker //pego apenas os dados que desejo
            var last = parseFloat(resp.last).toFixed(2)//transformo os dados em numero
            var high = parseFloat(resp.high).toFixed(2)//e fixo 2 casas decimais
            var low = parseFloat(resp.low).toFixed(2)//apenas os valores a serem utilizados
            var date = new Date()

            //criar os itens para colocar na UL da moeda escolhida
            var lis = `
            <li>Last: R$${last}</li>
            <li>High: R$${high}</li>
            <li>Low: R$${low}</li>
            <li>Data:${date.getDay()}/${date.getMonth()}/${date.getFullYear()}</li>
            <li>Hora:${date.getHours()}:${date.getMinutes()}</li>
            `

            irmao.innerHTML = lis

        })
            .catch((err)=>{
                console.log(err)
            })
}

moeda1.onchange = chama;
moeda2.onchange = chama;

