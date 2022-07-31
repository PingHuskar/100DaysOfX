
var data = [
    ["1","done","Hello"],
    ["2","done",""],
    ["3","done",""],
    ["4","done",""],
    ["5","done",""],
    ["6","done",""],
    ["7","done",""],
    ["8","done",""],
    ["9","done",""],
    ["10","done",""],
    ["11","done",""],
    ["12","done",""],
    ["13","done",""],
    ["14","done",""],
    ["15","done",""],
    ["16","done",""],
    ["17","done",""],
    ["18","done",""],
    ["19","done",""],
    ["20","done",""],
    ["21","done",""],
    ["22","done",""],
    ["23","done",""],
    ["24","done",""],
    ["25","done",""],
    ["26","done",""],
    ["27","done",""],
    ["28","done",""],
    ["29","done",""],
    ["30","done",""],
    ["31","done",""],
    ["32","done",""],
    ["33","done",""],
    ["34","done",""],
    ["35","done",""],
    ["36","done",""],
    ["37","done",""],
    ["38","done",""],
    ["39","done",""],
    ["40","done",""],
    ["41","done",""],
    ["42","done",""],
    ["43","done",""],
    ["44","done",""],
    ["45","done",""],
    ["46","done",""],
    ["47","done",""],
    ["48","done",""],
    ["49","done",""],
    ["50","done",""],
    ["51","done",""],
    ["52","done",""],
    ["53","done",""],
    ["54","done",""],
    ["55","undone",""],
    ["56","done",""],
    ["57","done",""],
    ["58","done",""],
    ["59","done",""],
    ["60","done",""],
    ["61","done",""],
    ["62","done",""],
    ["63","done",""],
    ["64","done",""],
    ["65","done",""],
    ["66","done",""],
    ["67","done",""],
    ["68","done",""],
    ["69","done",""],
    ["70","done",""],
    ["71","done",""],
    ["72","done",""],
    ["73","done",""],
    ["74","done",""],
    ["75","done",""],
    ["76","done",""],
    ["77","done",""],
    ["78","done",""],
    ["79","done",""],
    ["80","done",""],
    ["81","done",""],
    ["82","done",""],
    ["83","done",""],
    ["84","done",""],
    ["85","done",""],
    ["86","done",""],
    ["87","done",""],
    ["88","done",""],
    ["89","done",""],
    ["90","done",""],
    ["91","done",""],
    ["92","done",""],
    ["93","done",""],
    ["94","done",""],
    ["95","done",""],
    ["96","done",""],
    ["97","done",""],
    ["98","done",""],
    ["99","done",""],
    ["100","unknown",""]
]
const searchParam = new URLSearchParams(window.location.search)
const nperrow = parseInt(searchParam.get('nperrow')) || 10
const n = parseInt(searchParam.get('n')) || data.length
const title = searchParam.get('title') || "iheretoo"
document.getElementById('title').innerText += " " + title
document.title = document.getElementById('title').innerText

var newHTML = `<div class="row">`
for (var i = 0;i<n;i++) {
    newHTML += `<div class="col ${data[i][1]}" title="${data[i][2]}">${data[i][0]}</div>`
    if ((i+1)%nperrow == 0 && i !== 0) {
        document.getElementsByClassName('container')[0].innerHTML += newHTML+"</div>"
        newHTML = `<div class="row">`
        // document.getElementsByClassName('container')[0].innerHTML += `</div>`
        // document.getElementsByClassName('container')[0].innerHTML += `<div class="row">`
        // document.getElementsByClassName('container')[0].innerHTML += `<div class="col ${data[i][1]}">${data[i][0]}</div>`
    }
}

document.getElementsByClassName('container')[0].innerHTML += newHTML+"</div>"
        newHTML = `<div class="row">`