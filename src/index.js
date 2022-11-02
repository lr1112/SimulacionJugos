// import Chart from 'chart.js/auto';
// import 'flowbite';

//Las medidads de los liquidos estan en mililitros
//El precio de las ventas esta especificado en pesos dominicanos
const precioTodosLosVasos = 1200;
const precioAzucar = 250;
const preciofundahielo = 800;
const precioTotalLimon = 6000;
const costosTotales = precioTodosLosVasos + precioAzucar + preciofundahielo + precioTotalLimon;
const medidaPequeña = 2;
let ventaVasoPequeño = 0;
let unidadDeVasosPequeños = 0;
const medidaMediana = medidaPequeña * 2.1;
let ventaVasoMediano = 0;
let unidadDeVasosMediano = 0;
const medidaGrande = medidaPequeña * 3.15;
let ventaVasoGrande = 0;
let unidadDeVasosGrande = 0;
let medidaCuboDeJugo = 1892.71;
let propinas = 0;

function venderVasoPequeño() {
    medidaCuboDeJugo -= medidaPequeña;
    const precioVasoPequeño = 25;
    ventaVasoPequeño += precioVasoPequeño;
    unidadDeVasosPequeños += 1;
}

function venderVasoMediano() {
    medidaCuboDeJugo -= medidaMediana;
    const precioVasoMediano = 50;
    ventaVasoMediano += precioVasoMediano;
    unidadDeVasosMediano += 1;
}

function venderVasoGrande() {
    medidaCuboDeJugo -= medidaGrande;
    const precioVasoGrande = 90;
    ventaVasoGrande += precioVasoGrande;
    unidadDeVasosGrande += 1;
}

function personasLlegando() {
    const personas = Math.floor(Math.random() * 100);
    console.log("Llegaron " + personas + " personas");
    return personas;
}

function personasInteresadas() {
    const personas = personasLlegando();
    const personasInteresadas = Math.floor(Math.random() * personas);
    console.log("De las " + personas + " personas, " + personasInteresadas + " estan interesadas en comprar");
    return personasInteresadas;
}

function personasQueCompran() {
    const personas = personasInteresadas();
    const personasQueCompran = Math.floor(Math.random() * personas);
    console.log("De las " + personas + " personas interesadas, " + personasQueCompran + " compran");
    return personasQueCompran;
}

function personsasQueDanPropina(){
    const personas = personasQueCompran();
    const personasQueDanPropina = Math.floor(Math.random() * personas);
    console.log("De las " + personas + " personas que compran, " + personasQueDanPropina + " dan propina");
    return personasQueDanPropina;
}

//Realizar una funcion que realize una venta en base a las siguietes probabilidades
//1. 12% de las personas que llegan compran un vaso grande
//2. 70% de las personas que llegan compran un vaso mediano
//3. 18% de las personas que llegan compran un vaso pequeño

function realizarVenta() {
    const personas = personasQueCompran();
    const personasQueDanPropina = personsasQueDanPropina();
    const personasQueCompranVasoPequeño = Math.floor(personas * 0.18);
    const personasQueCompranVasoMediano = Math.floor(personas * 0.7);
    const personasQueCompranVasoGrande = Math.floor(personas * 0.12);
    for (let i = 0; i < personasQueCompranVasoPequeño; i++) {
        venderVasoPequeño();
    }
    for (let i = 0; i < personasQueCompranVasoMediano; i++) {
        venderVasoMediano();
    }
    for (let i = 0; i < personasQueCompranVasoGrande; i++) {
        venderVasoGrande();
    }
    for (let i = 0; i < personasQueDanPropina; i++) {
        const propina = Math.floor(Math.random() * 100);
        propinas += propina;
    }
}

async function iniciarSimulacion() {
    //Realizar ventas hasta que se acabe el jugo 
    let contador = 0;
    while (medidaCuboDeJugo > 0) {
        realizarVenta();
        contador++;
        if (contador % 10 === 0) {
            console.log("Quedan " + medidaCuboDeJugo + " ml de jugo \n");
        }
        await new Promise(resolve => setTimeout(resolve, 4000));
    }

    console.log("Los beneficios obtenidos son de " + (ventaVasoPequeño + ventaVasoMediano + ventaVasoGrande + propinas - costosTotales) + " pesos");
    console.log("Los costos totales fueron de " + costosTotales + " pesos");
    console.log("El total de ventas es de " + (ventaVasoPequeño + ventaVasoMediano + ventaVasoGrande) + " pesos");
    console.log("El total de propinas es de " + propinas + " pesos");
    console.log("El total de ventas y propinas es de " + (ventaVasoPequeño + ventaVasoMediano + ventaVasoGrande + propinas) + " pesos");
    console.log("La cantidad de vasos pequeños vendidos es de " + unidadDeVasosPequeños);
    console.log("La cantidad de vasos medianos vendidos es de " + unidadDeVasosMediano);
    console.log("La cantidad de vasos grandes vendidos es de " + unidadDeVasosGrande);
}

iniciarSimulacion();