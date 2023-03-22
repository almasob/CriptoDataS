var moeda = document.querySelector('#sel_moedas')
var md1 = document.querySelector('#md1')


moeda.addEventListener('change', ()=>{

    
    var moedaValue = moeda.value;//valor que definirá a moeda que escolhemos

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

            md1.innerHTML = lis

        })
            .catch((err)=>{
                console.log(err)
            })
})

