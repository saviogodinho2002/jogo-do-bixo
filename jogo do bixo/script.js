/* const firePixelArray = []; 

const fireWidth = 40;
const fireHeight = 40;
const fireColorsPalette =  [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}];


start()



function start(){
    createFireDataStructure();
    createFireSource();
    renderFire();
    setInterval(calculateFirePropagation,50);
   // console.log(firePixelArray);
}

function createFireDataStructure(){
    const numberOfPixel = fireWidth * fireHeight;

    for(let i = 0;i < numberOfPixel;i++){
        firePixelArray[i] = 0;//socando elementos dentro do array
    }

}

function calculateFirePropagation(){
    for(let colum = 0; colum < fireWidth; colum++){
        for(let row = 0; row < fireHeight; row++){
            const pixelIndex = (fireWidth * row) + colum;
            
            upadteFireIntensityPerPixel(pixelIndex); //seta as intensidades de cada pixel
        }
        
    }
    renderFire(); //seta as cores baseado na intensidade
}

function upadteFireIntensityPerPixel(currentPixelIndex){
    const belowPixelIndex = currentPixelIndex + fireWidth; // pixel da linha de baixo

    if(belowPixelIndex >= (fireWidth * fireHeight) ) return;

    const decay = Math.floor(Math.random() * 3); //pra dar o efeito foda

    const belowPixelIntesity = firePixelArray[belowPixelIndex]; // intensidade do de baixo

    const newFireIntesity = belowPixelIntesity - decay; //intensidade do atual vai ser a do de baixo - decay

    firePixelArray[currentPixelIndex-decay] = newFireIntesity>0?newFireIntesity:0; //atribuição
}

function renderFire(){ //criar uma table dinamicamente
    const debug = false;
    let html = "<table cellpadding=0 cell spacing=0>"; // inicio da tag
    for(let row = 0;row < fireHeight; row++){
        html += "<tr>"; //table row abrindo
        
        for(let colum = 0; colum < fireWidth;colum++){

            const pixelIndex = (fireWidth * row) + colum; // indice no firePixelArray

            const fireItensitivy = firePixelArray[pixelIndex]; // intensidade do pixel atual

           if(debug === true){ 
                html += "<td class ='pixel'>";
                html += `<div class='pixel-index'>${pixelIndex}</div>`; // passar com crase permite colocar a variavel ali facil, poderia concatenar tbm
                html += fireItensitivy;
                html += "</td>";
            }else{
                const color = fireColorsPalette[fireItensitivy]; // cor escolhida pela intensidade do pixel
                const colorString = `${color.r},${color.g},${color.b}`;
                html+=`<td class ='pixel' style='background-color: rgb(${colorString})'>`;
                html +="</td>";
            }
        }

        html += "</tr>" // table row fechando
    }
    html += "</table>"; // fechamento da tag

    document.querySelector("#fireCanvas").innerHTML = html;//socar la com cor e os caralho

}
function createFireSource(){
    for(let colum = 0; colum <=  fireWidth;colum++){
        const overflowPixelIndex = fireHeight * fireWidth;

        const pixelIndex = (overflowPixelIndex - fireWidth) + colum;

        firePixelArray[pixelIndex] = 36;
    }
}
start();
renderFire();

 */

const tablePlayers = document.querySelector(".tableplayers");
const numPlayersArray = [];
const animalsArray = [{animalName:"avestruz",animalImage: "assets/avestruz.jpeg"},
                        {animalName:"águia",animalImage: "assets/aguia.jpg"},
                        {animalName:"burro",animalImage: "assets/burro.jpg"},
                        {animalName:"borboleta",animalImage: "assets/borboleta.jpg"},
                        {animalName:"cachorro",animalImage: "assets/cachorro.jpg"},
                        {animalName:"cabra",animalImage: "assets/cabra.jpg"},
                        {animalName:"carneiro",animalImage: "assets/carneiro.jpg"},
                        {animalName:"camelo",animalImage: "assets/camelo.jpg"},
                        {animalName:"cobra",animalImage: "assets/cobra.jpg"},
                        {animalName:"coelho",animalImage: "assets/coelho.jpg"},
                        {animalName:"cavalo",animalImage: "assets/cavalo.jpg"},
                        {animalName:"elefante",animalImage: "assets/elefante.jpeg"},
                        {animalName:"galo",animalImage: "assets/galo.jpg"},
                        {animalName:"gato",animalImage: "assets/gato.jpg"},
                        {animalName:"jacaré",animalImage: "assets/jacare.jpg"},
                        {animalName:"leão",animalImage: "assets/leao.jpg"},
                        {animalName:"macaco",animalImage: "assets/macaco.jpg"},
                        {animalName:"porco",animalImage: "assets/porco.jpg"},
                        {animalName:"pavão",animalImage: "assets/pavao.jpg"},
                        {animalName:"peru",animalImage: "assets/peru.jpg"},
                        {animalName:"touro",animalImage: "assets/touro.jpg"},
                        {animalName:"tigre",animalImage: "assets/tigre.jpg"},
                        {animalName:"urso",animalImage: "assets/urso.jpg"},
                        {animalName:"veado",animalImage: "assets/veado.jpg"},
                        {animalName:"vaca",animalImage: "assets/vaca.jpg"}
                    ];
                        
let totalDinheiroApostado = 0;

class ElementTable{
    constructor(html,nome,animal,valor){
        this.html = html;
        this.nome = nome;
        this.animal = animal;
        this.valor = valor;
    }
    //getters
    get getHtml(){
        return this.html;
    }
    get getNome(){
        return this.nome;
    }
    get getAnimal(){
        return this.nome;
    }
    get getValor (){ 
        return this.valor;
    }    
    
}

function addInfoOfPlayer(){
    
    let nome = window.prompt("inseria o nome");
    let valor = window.prompt("valor da aposta");
    valor = parseFloat(valor);
    let animal = window.prompt("insira o numero do animal");
    animal = parseInt(animal);

    if( (nome == "") || (nome == null) || typeof valor != "number" || typeof animal != "number" || isNaN(valor) || isNaN(animal)) return false;

    const animalChoser = animalsArray[animalSorteado(animal)];

    let html =`<td class='elemetsTD'> <p> player${numPlayersArray.length}</p>
        <p>Nome: ${nome}</p>

        <img style='height: 50px;' src='${animalChoser.animalImage}'>

        <p>Animal: ${animal}, ${animalChoser.animalName}</p>

        <p>Valor apostado: ${valor}</p> </td>\n`

    numPlayersArray[numPlayersArray.length] = new ElementTable(html,nome,animal,valor);
    totalDinheiroApostado += valor;
    updateInfoOfGame(animalChoser,"-");
    return true;
}

function updateInfoOfGame(animal,numeroSorteado){
    let divInfoGame = document.querySelector(".infogame");
    const animalChoser = animal;
    let html = " <h1>JOGO DO BIXO</h1>"
    html += `<img id='imganimal' src=${animalChoser.animalImage}>`;
    html += ` <p>animal: ${animalChoser.animalName}, numero sorteado: ${numeroSorteado}</p>`
    html += ` <p>dinheiro total: ${totalDinheiroApostado} </p>`

    divInfoGame.innerHTML = html;

}

function addPlayer(){

    let validPlayer = addInfoOfPlayer();
    if(!validPlayer) {
        alert("algum valor invalido, tente novamente");
        return;
    }
   
    let newHtml = "";
    let count = 0;
    for (const iterator of numPlayersArray) { //joga os players na tela
        newHtml += (count == 0)?"<tr>":"";
        newHtml+= iterator.getHtml;
        newHtml += (count != 4)?"":"</tr>";
        count++;
        count = count%5;
    }
    tablePlayers.innerHTML = newHtml;
    console.log(numPlayersArray);
  
}


function start(){
   

    let html="<td onclick='addPlayer()' class='elemetsTD-plus'> + </td> \n"

    var trAddPlayer = new ElementTable(html);
    tablePlayers.innerHTML ="<tr>" + trAddPlayer.getHtml + "</tr>"; //nao precisa fazer  trAddPlayer.getHtml(), basta  trAddPlayer.getHtml

    numPlayersArray[0] = trAddPlayer;
}
function animalSorteado(animal){
    
    if(animal < 5 && animal>= 1)
        return 0;
    else if(animal<9)
        return 1;
    else if (animal<13)
        return 2;
    else if (animal<17)
        return 3;
    else if (animal<21)
        return 4;
    else if (animal<25)
        return 5;
    else if (animal<29)
        return 6;
    else if (animal<33)
        return 7;
    else if (animal<37)
        return 8;
    else if (animal<41)
        return 9;
    else if (animal<45)
        return 10;
    else if (animal<49)
        return 11;
    else if (animal<53)
        return 12;
    else if (animal<57)
        return 13;
    else if (animal<61)
        return 14;
    else if (animal<65)
        return 15;
    else if (animal<69)
        return 16;
    else if (animal<73)
        return 17;
    else if (animal<77)
        return 18;
    else if (animal<81)
        return 19;
    else if (animal<85)
        return 20;
    else if (animal<89)
        return 21;
    else if (animal<93)
        return 22;
    else if (animal<97)
        return 23;
    else
        return 24;
   
}


function iniciarSorteio(){
   const numeroSorteado = Math.round(Math.random() * (99 - 0) + 0 );
   const animal = animalsArray[animalSorteado(numeroSorteado)];
   updateInfoOfGame(animal,numeroSorteado);
    
   let newHtml = "";
   let count = 0;
   for (const iterator of numPlayersArray) {

    console.log(iterator);

    newHtml += (count == 0)?"<tr>":"";

    if((animalSorteado(iterator.animal) == animalSorteado(numeroSorteado)) && iterator.animal != undefined){
        console.log(animalSorteado(iterator.animal) ," ", animalSorteado(numeroSorteado) );

        newHtml +=`<td class='winner'> <p> player${numPlayersArray.indexOf(iterator)}</p>
        <p>Nome: ${iterator.getNome}</p>

        <img style='height: 50px;' src='${animalsArray[animalSorteado(iterator.animal)].animalImage}'>

        <p>Animal: ${iterator.animal}, ${animalsArray[animalSorteado(iterator.animal)].animalName}</p>

        <p>Valor apostado: ${iterator.valor}</p> </td>\n`

        
    }else{
        
        newHtml += iterator.getHtml;

    }
    newHtml += (count != 4)?"":"</tr>";

    tablePlayers.innerHTML = newHtml;

    count++;
    count = count%5;
       
   }
    
}
/*
function addPlayer(){

    let validPlayer = addInfoOfPlayer();
    if(!validPlayer) {
        alert("algum valor invalido, tente novamente");
        return;
    }
   
    let newHtml = "";
    let count = 0;
    for (const iterator of numPlayersArray) { //joga os players na tela
        newHtml += (count == 0)?"<tr>":"";
        newHtml+= iterator.getHtml;
        newHtml += (count != 4)?"":"</tr>";
        count++;
        count = count%5;
    }
    tablePlayers.innerHTML = newHtml;
    console.log(numPlayersArray);
  
}*/ 


start();


