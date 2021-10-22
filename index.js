const nome = document.getElementById('name'); // no html <div id="name"></div>

 
 fetch('http://ergast.com/api/f1/2021/drivers.json').then(resposta => {
    return resposta.json();
}).then(data => {
        const datas = data.MRData.DriverTable.Drivers
        const newDatas = datas.map((user, index, array) => {
        nome.innerHTML +=`<p>${user.familyName}</p>`
       
        })
    
})
