const PI=3.1415;
const G=6.6743*(10**(-11));

function calculateOrbitTime(){
    let radius = parseFloat(document.getElementById("input-radius").value);
    let mass = parseFloat(document.getElementById("input-mass").value);
    let time = [(4*(PI**2)*(radius**3))/(G*mass)]**(1/2);

    let output = `The orbit time is ${time}`;
    document.getElementById("result-time").innerText = output;
}
