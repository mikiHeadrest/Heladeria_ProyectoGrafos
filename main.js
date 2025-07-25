let tieneCono = false;
let cantidadBolas;
let contador = 0;

function activar(estado){
    document.getElementById(estado).style.display = "block"
}

function agregarCono(cono){
    document.getElementById("nieve").classList.add(cono);
}

function agregarSimbolo(simbolo){
    document.getElementById("palabra").textContent += simbolo;
}

function limpiarfrente(){
    document.getElementById("toppingVacio").style.display = "none";
}

function limpiarSimbolo(){
    document.getElementById("palabra").textContent = "";
    nodoActual = nodos[0];
    document.getElementById("toppingJarabe").style.display = "none";
    document.getElementById("toppingVacio").style.display = "none";
    document.getElementById("toppingPos1").style.display = "none";
    document.getElementById("toppingPos2").style.display = "none";
    document.getElementById("toppingPos3").style.display = "none";
    document.getElementById("toppingFrenteVacio").style.display = "none";
}

let nodos = ["q0", 'q1', "q2", 'q3', "q4", 'q5', "q6", 'q7', 'q8', 'q9', 'q10'];
let nodoActual = nodos[0];

// Nos permiten modificar las imagenes que se muestran dentro de los divs


function mostrarImagen(src, alt) {
    // Crear un nuevo elemento de imagen
    let img = document.createElement("img");
    img.src = src; // Establece la fuente de la imagen
    img.alt = alt; // Establece el texto alternativo de la imagen
    img.style.width = "315px"; // Establecer un ancho (opcional)
    img.style.height = "441px"; // Establecer una altura (opcional)

    // Limpiar el contenedor antes de agregar una nueva imagen
    const imagenContainer = document.getElementById("section-3");
    imagenContainer.innerHTML = ""; // Limpiar el contenido previo
    imagenContainer.classList.add('helado');
    imagenContainer.appendChild(img); // Agregar la nueva imagen al contenedor

    //Comparar el nombre de una imagen
    const nombreImagen = img.src.split('/').pop();
}

async function terminarNodos() {
    let palabra = document.getElementById('palabra').textContent;
    let longitud = palabra.length;

    // 
    let cono = document.getElementById("cono");
    let bola1 = document.getElementById('bola1');
    let bola2 = document.getElementById('bola2');
    let bola3 = document.getElementById('bola3');
    let topping = document.getElementById('topping');


    // divs
    let toppingJarabe = "toppingJarabe";
    let toppingVacio = "toppingVacio";
    let toppingPos1 = "toppingPos1";
    let toppingPos2 = "toppingPos2"
    let toppingPos3 = "toppingPos3"
    let toppingFrenteVacio = "toppingFrenteVacio";

    for (let i = 0; i < longitud; i++) {
        switch (nodoActual) {
            case nodos[0]: // q0
                if (palabra[i] === "b") {
                    activar(toppingFrenteVacio)
                    console.log('Cono básico');
                    cono.src = "img/heladoBasico/conoBasico_vacio.png"
                    nodoActual = nodos[1]; // q1
                } else if (palabra[i] === "w") {
                    activar(toppingFrenteVacio)
                    console.log('Cono waffle');
                    cono.src = "img/heladoWaffle/conoWaffle_vacio.png"
                    nodoActual = nodos[2]; // q2
                } else if (palabra[i] === "k") {
                    activar(toppingFrenteVacio)
                    activar(toppingVacio)
                    console.log('Canasta');
                    cono.src = "img/heladoCanasta/conoCanasta_vacio.png"
                    nodoActual = nodos[3]; // q3
                }
                else{
                    alert('>:( ~Primero pon un cono');
                    i = palabra.length;
                    limpiarSimbolo();
                }
                break;

            case nodos[1]: // q1


                if (palabra[i] === 'c' || palabra[i] === 'v' || palabra[i] === 'f') {
                    switch (palabra[i]) {
                        case 'c':
                            activar(toppingPos1)
                            console.log('Sabor: Chocolate');
                            bola1.src = "img/heladoBasico/conoBasico_chocolateBola.png"
                            break;
                        case 'v':
                            activar(toppingPos1)
                            console.log('Sabor: Vainilla');
                            bola1.src = "img/heladoBasico/conoBasico_vainillaBola.png"
                            break;
                        case 'f':
                            activar(toppingPos1)
                            console.log('Sabor: Fresa');
                            bola1.src = "img/heladoBasico/conoBasico_fresaBola.png"
                            break;
                    }
                    nodoActual = nodos[4]; // q4
                }
                else{
                    alert('Debes de poner una bola de Nieve');
                    i = palabra.length;
                    limpiarSimbolo();
                }
                break;

            case nodos[2]: // primer sabor Waffle
                if (palabra[i] === 'c' || palabra[i] === 'v' || palabra[i] === 'f') {
                    switch (palabra[i]) {
                    case 'c':
                        activar(toppingPos1)
                        console.log('Sabor: Chocolate');
                        bola1.src = "img/heladoBasico/conoBasico_chocolateBola.png"
                        break;
                    case 'v':
                        activar(toppingPos1)
                        console.log('Sabor: Vainilla');
                        bola1.src = "img/heladoBasico/conoBasico_vainillaBola.png"
                        break;
                    case 'f':
                        activar(toppingPos1)
                        console.log('Sabor: Fresa');
                        bola1.src = "img/heladoBasico/conoBasico_fresaBola.png"
                        break;
                    }
                    nodoActual = nodos[5]; // q5
                }
                else{
                    alert('Debes de poner una bola de Nieve');
                    i = palabra.length;
                    limpiarSimbolo();
                }
                break;
            

            case nodos[5]: // segundo sabor waffle
                if (palabra[i] === 'c' || palabra[i] === 'v' || palabra[i] === 'f') {
                    switch (palabra[i]) {
                        case 'c':
                            activar(toppingPos2)
                            console.log('Sabor: Chocolate');
                            bola2.src = "img/heladoWaffle/conoWaffle_ChocolateSegundaBola.png"
                            break;
                        case 'v':
                            activar(toppingPos2)
                            console.log('Sabor: Vainilla');
                            bola2.src = "img/heladoWaffle/conoWaffle_VainillaSegundaBola.png"
                            break;
                        case 'f':
                            activar(toppingPos2)
                            console.log('Sabor: Fresa');
                            bola2.src = "img/heladoWaffle/conoWaffle_FresaSegundaBola.png"
                            break;
                    }
                    nodoActual = nodos[7]; // q7
                    console.log('nodo 7');
                }
                else{
                    alert('El cono waffle lleva dos bolas de nieve');
                    i = palabra.length;
                    limpiarSimbolo();
                }
                break;

            case nodos[3]: // q3
                if (palabra[i] === 'c' || palabra[i] === 'v' || palabra[i] === 'f') {
                    switch (palabra[i]) {
                        case 'c':
                            activar(toppingPos1)
                            console.log('Sabor: Chocolate');
                            bola1.src = "img/heladoCanasta/conoCanasta_chocolate_pos1.png"
                            break;
                        case 'v':
                            activar(toppingPos1)
                            console.log('Sabor: Vainilla');
                            bola1.src = "img/heladoCanasta/conoCanasta_vainilla_pos1.png"
                            break;
                        case 'f':
                            activar(toppingPos1)
                            console.log('Sabor: Fresa');
                            bola1.src = "img/heladoCanasta/conoCanasta_fresa_pos1.png"
                            break;
                    }
                    nodoActual = nodos[6]; // q6
                }
                else{
                    alert('Primero selecciona los sabores de nieve, como es canasta deben de ser 3');
                    i = palabra.length;
                    limpiarSimbolo();
                }
                break;

            case nodos[6]: // q6
                if (palabra[i] === 'c' || palabra[i] === 'v' || palabra[i] === 'f') {
                    switch (palabra[i]) {
                        case 'c':
                            activar(toppingPos2)
                            console.log('Sabor: Chocolate');
                            bola2.src = "img/heladoCanasta/conoCanasta_chocolate_pos2.png"
                            break;
                        case 'v':
                            activar(toppingPos2)
                            console.log('Sabor: Vainilla');
                            bola2.src = "img/heladoCanasta/conoCanasta_vainilla_pos2.png"
                            break;
                        case 'f':
                            activar(toppingPos2)
                            console.log('Sabor: Fresa');
                            bola2.src = "img/heladoCanasta/conoCanasta_fresa_pos2.png"
                            break;
                    }
                    nodoActual = nodos[8]; // q8
                }
                else{
                    alert('Primero selecciona los sabores de nieve, como es canasta deben de ser 3');
                    i = palabra.length;
                    limpiarSimbolo();
                }
                break;

            case nodos[8]: // q8
                if (palabra[i] === 'c' || palabra[i] === 'v' || palabra[i] === 'f') {
                    switch (palabra[i]) {
                        case 'c':
                            activar(toppingPos3)
                            console.log('Sabor: Chocolate');
                            bola3.src = "img/heladoCanasta/conoCanasta_chocolate_pos3.png"
                            break;
                        case 'v':
                            activar(toppingPos3)
                            console.log('Sabor: Vainilla');
                            bola3.src = "img/heladoCanasta/conoCanasta_vainilla_pos3.png";
                            break;
                        case 'f':
                            activar(toppingPos3)
                            console.log('Sabor: Fresa');
                            bola3.src = "img/heladoCanasta/conoCanasta_fresa_pos3.png";
                            break;
                    }
                    nodoActual = nodos[9]; // q9
                }
                else{
                    alert('Primero selecciona los sabores de nieve, como es canasta deben de ser 3');
                    i = palabra.length;
                    limpiarSimbolo();
                }
                break;

            case nodos[4]: // q4
                switch (palabra[i]){
                    case 'h': //chispas
                        activar(toppingJarabe)
                        console.log('Chispas');
                        topping.src = "img/heladoBasico/conoBasico_chispas.png";
                        nodoActual = nodos[10]; // q10
                        break;
                    case 'j': //jarabe
                        console.log('Jarabe');
                        activar(toppingJarabe)
                        topping.src = "img/heladoBasico/conoBasico_jarabe.png";
                        nodoActual = nodos[10]; // q10
                        break;
                    default:
                        alert('El cono basico solo permite un cono, una bola de nieve y un topping');
                        i = palabra.length;
                        limpiarSimbolo();
                        break
                }
                break;


            case nodos[7]: // q7
                switch (palabra[i]){
                    case 'h': //chispas
                        activar(toppingJarabe)
                        console.log('Chispas');
                        topping.src = "img/heladoWaffle/conoWaffle_chispas.png";
                        nodoActual = nodos[10]; // q10
                        break;
                    case 'j': //jarabe
                        activar(toppingJarabe)
                        console.log('Jarabe');
                        topping.src = ("img/heladoWaffle/conoWaffle_jarabe.png");
                        nodoActual = nodos[10]; // q10
                        break;
                    default:
                        alert('Waffles solo acepta 2 bolas de nieve y un cono al principio, favor de solo ingresar toppings');
                        i = palabra.length;
                        limpiarSimbolo();
                        break
                }
                // if (nodoActual===nodos[10]){
                //     alert("Bien Hecho, llegaste al estado final");
                // }
                break;

            case nodos[9]: // q9
                if (palabra[i] === 'h' || palabra[i] === 'j') {
                    switch (palabra[i]) {
                        case 'h':
                            activar(toppingJarabe)
                            console.log('Topping: Chispas');
                            topping.src = ("img/heladoCanasta/conoCanasta_chispas.png");
                            break;
                        case 'j':
                            activar(toppingJarabe)
                            console.log('Topping: Jarabe de chocolate');
                            topping.src = ("img/heladoCanasta/conoCanasta_jarabe.png");
                            break;
                    }
                    nodoActual = nodos[10]; // q10
                } else {
                    console.log("Palabra inválida para toppings");
                    alert('Canasta solo permite 3 bolas de nieve, favor de solo ingresar toppings');
                    i = palabra.length;
                    limpiarSimbolo();
                }
                break;

            case nodos[10]://q10
                alert("No se agregaran mas eleementos, ya que ya estas en el estado final");
                break;
        }
        await new Promise(resolve => setTimeout(resolve, 500)); //0.5 segundos
        limpiarfrente();
    }
}
