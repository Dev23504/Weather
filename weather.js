let key ="aee1045382f4e2a05a39735d89481e80"

let box = document.getElementById("box");
async function search(){
    let city = document.getElementById("city").value;
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
    let data = await res.json();
    appendData(data);
    console.log(data);

}

function appendData(data){
    box.innerHTML=" "
    let name = document.createElement("p")
    let temp = document.createElement("p")
    let humidity = document.createElement("p")
    let pressure = document.createElement("p")
    


    name.innerText =`City Name- ${data.name}`
    // name.style.color="white"
    temp.innerText =`Tempreture- ${data.main.temp}`
    // temp.style.color="white"
    humidity.innerText =`Humidity- ${data.main.humidity}`
    // humidity.style.color="white"
    pressure.innerText =`Pressure- ${data.main.pressure}`
    // pressure.style.color="white"
    box.append(name,temp,humidity,pressure)
}