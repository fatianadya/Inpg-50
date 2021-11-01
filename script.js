// binding ke element yang akan kita tulis
let dataNonTableEl = document.getElementById("dataNonTable")
//langkah 1
let dataTabelEl = document.getElementById("dataTable")

fetch('https://randomuser.me/api/?results=10&nat=us&inc=name,location,picture')
.then(response => response.json())
.then (data => {
    data.result.forEach(user => {
        //langkah 2 (3 baris ke bawah)
        let Provinsi = user.location.city + ", " + user.location.state + ", " + user.location.country
        let Positif = user.data + ", " + user.jumlah.data + ", " + user.total.data
        let Sembuh = user.data + ", " + user.jumlah.data + ", " + user.total.data
        let Meninggal = user.data + ", " + user.jumlah.data + ", " + user.total.data

        //langkah 3
        dataTabelEl.innerHTML += `
        <tr>${Provinsi} </td>
        <td>${Positif}</td>
        <td>${Sembuh}</td>
        <td>${Meninggal}</td>
        </tr>
        `
    });
})