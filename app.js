//Atributos del Pokémon rival
const imgRival = document.querySelector('#pokeRival');
const nombreRival = document.querySelector('#nombreRival');
const tipo1Rival = document.querySelector('#tipo1Rival');
const tipo2Rival = document.querySelector('#tipo2Rival');
const atkFisRival = document.querySelector('#ataqueFisRival'); 
const atkEspRival = document.querySelector('#ataqueEspRival');
const vidaRival = document.querySelector('#vidaRival');
const defensaEspRival = document.querySelector('#defensaEspRival');
const defensaFisRival = document.querySelector('#defensaFisRival');
const velocidadRival = document.querySelector('#velocidadRival');

//Atributos del Pokémon propio
const imgProp = document.querySelector('#pokeProp');
const nombreProp = document.querySelector('#nombreProp');
const tipo1Prop = document.querySelector('#tipo1Prop');
const tipo2Prop = document.querySelector('#tipo2Prop');
const atkFisProp = document.querySelector('#ataqueFisProp'); 
const atkEspProp = document.querySelector('#ataqueEspProp');
const vidaProp = document.querySelector('#vidaProp');
const defensaEspProp = document.querySelector('#defensaEspProp');
const defensaFisProp = document.querySelector('#defensaFisProp');
const velocidadProp = document.querySelector('#velocidadProp');
//Atributos poke propio

//Interfaz de usuario

const input = document.querySelector('#input');
const btnElegir = document.querySelector('#btn-poke');
const btnAtkFis  = document.querySelector('#btn-atk-fis');
const btnAtkEsp  = document.querySelector('#btn-atk-esp');

//Método de número random
const getNumRandom = () => {
    let min = Math.ceil(0);
    let max = Math.floor(1001);

    return Math.floor(Math.random() * (max - min) + min);
  }

//Se elegirá un pokemon pero solo del tipo fantasma, el tipo de elección del pokemon queda a criterio del desarrollador, que sea divertido.
const obtenerPokePropio = ()=>{
    const num = input.value;

    axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then((res)=>{
        return res.data
    }).then((res)=>{
        console.log(res);
    })
}
//Se generará un pokemon rival aleatorio 
const obtenerPokeRival = () =>{

    const numPokeRival = getNumRandom();

    axios.get(`https://pokeapi.co/api/v2/pokemon/${numPokeRival}`).then((res)=>{
        return res.data
    }).then((res)=>{
        console.log(res);
    })
}

//Combate, el pokemon perdedor será el que se le acabe primero su vida.
//El usuario deberá elegir si ocupa ataque fisico o especial, según lo elegido los pokemon usarán su defensa especial o defensa fisica para bloquear los ataques
//La defensa especial o fisica del pokemon que recibe el ataque sera restada del ataque especial o fisico del pokemon atacante, la diferencia será restada a la vida del pokemon defensor
//En caso de que el resultado de la resta sea negativo o cero, se va a dejar un 1 como el resultado minimo de la resta
//El pokemon que tenga más velocidad va a pegar primero
//Se debe de aplicar la tabla de tipos al resultado de la resta de defensa y ataque, pero solo en daño, no en resitencias
//Ejemplo poke1AtaqueFisico = 56;
// poke2Defensafisica = 35; poke2vida = 98;
// DañoRecibido = poke1AtaqueFisico - poke2DefensaFisica;
//poke2VidaRestante = poke2Vida - DañoRecibido;
//Se turnarán los pokemon hasta que haya un ganador
//Mostrar el ganador

const mensajes = {
    jugador: [
        "¡Vamos a ganar!",
        "¡Usa tu mejor ataque!",
        "¡Podemos hacerlo!",
        "¡Lucha con todo!",
        "¡Vamos con todo!",
        "¡No te rindas!",
        "¡Es nuestra oportunidad!",
        "¡Sigue luchando!",
        "¡Esto apenas comienza, aún no he mostrado mi verdadero potencial!",
        "No me subestimes, ¡tengo un as bajo la manga!",
        "¡Mi vínculo con mis Pokémon es más fuerte que cualquier cosa!",
        "¡Un movimiento más y esta batalla será mía!"
    ],
    rival: [
        "¡No tienes oportunidad contra mi equipo invencible!",
        "¿Eso es todo lo que tienes? ¡Qué decepción!",
        "¡Mi estrategia es imbatible, prepárate para perder!",
        "Voy a demostrarte quién es el verdadero maestro Pokémon.",
        "¡No durarás ni tres turnos más, esto está decidido!"
    ]
};
//Historial de combate

// Función para registrar los movimientos en el historial
function registrarMovimiento(mensaje) {
    const movimiento = document.createElement('p');
    movimiento.textContent = mensaje;
    historialCombate.appendChild(movimiento);
    historialCombate.scrollTop = historialCombate.scrollHeight; // Desplaza hacia el último movimiento
}


const obtenerFraseAleatoria = (hablante) => {

    
    const frasesHablante = mensajes[hablante];
    if (!frasesHablante) return '...';
    return frasesHablante[Math.floor(Math.random() * frasesHablante.length)];
};

    
    const frasesHablante = mensajes[hablante];
    if (!frasesHablante) return '...';
    return frasesHablante[Math.floor(Math.random() * frasesHablante.length)];
};

const agregarAlHistorial = (hablante, frase) => {
    const historialCombate = document.querySelector('#historialCombate');
    const nuevaLinea = document.createElement('p');
    nuevaLinea.textContent = `${hablante}: "${frase}"`;
    historialCombate.appendChild(nuevaLinea);
};
const combate = (tipoAtaque) => {

    let vidaPropia = parseInt(vidaProp.innerHTML);
    let vidaDelRival = parseInt(vidaRival.innerHTML);

    let velocidadPropia = parseInt(velocidadProp.innerHTML);
    let velocidadDelRival = parseInt(velocidadRival.innerHTML);

    let atkPropio = tipoAtaque === 'fisico' ? parseInt(atkFisProp.innerHTML) : parseInt(atkEspProp.innerHTML);
    let atkRival = tipoAtaque === 'fisico' ? parseInt(atkFisRival.innerHTML) : parseInt(atkEspRival.innerHTML);

    let defensaRival = tipoAtaque === 'fisico' ? parseInt(defensaFisRival.innerHTML) : parseInt(defensaEspRival.innerHTML);
    let defensaPropia = tipoAtaque === 'fisico' ? parseInt(defensaFisProp.innerHTML) : parseInt(defensaEspProp.innerHTML);

    registrarMovimiento(`${nombreProp.innerHTML} usa ${tipoAtaque === 'fisico' ? 'Ataque Físico' : 'Ataque Especial'}`);

    if (velocidadPropia >= velocidadDelRival) {
        let danoAlRival = Math.max(atkPropio - defensaRival, 1);
        const multiplicador = obtenerMultiplicador(tipo1Prop.innerHTML, tipo1Rival.innerHTML);
        danoAlRival *= multiplicador;
        vidaDelRival -= danoAlRival;

        if (vidaDelRival <= 0) {
            vidaDelRival = 0;
        }
        vidaRival.innerHTML = vidaDelRival;
        updateHP("poke-rival", vidaDelRival);
        const fraseJugador = obtenerFraseAleatoria('jugador');
        agregarAlHistorial('Tú', fraseJugador);
        registrarMovimiento(`¡Golpe efectivo! ${nombreRival.innerHTML} recibe ${danoAlRival} de daño`);

        if (vidaDelRival === 0) {
            registrarMovimiento(`¡${nombreProp.innerHTML} gana el combate!`);
            return;
        }

        let danoAPropio = Math.max(atkRival - defensaPropia, 1);
        const multiplicadorRival = obtenerMultiplicador(tipo1Rival.innerHTML, tipo1Prop.innerHTML);
        danoAPropio *= multiplicadorRival;
        vidaPropia -= danoAPropio;

        if (vidaPropia <= 0) {
            vidaPropia = 0;
        }
        vidaProp.innerHTML = vidaPropia;
        updateHP("poke-propio", vidaPropia);
        const fraseRival = obtenerFraseAleatoria('rival');
        agregarAlHistorial('Rival', fraseRival);
        registrarMovimiento(`${nombreRival.innerHTML} contraataca y causa ${danoAPropio} de daño`);

        if (vidaPropia === 0) {
            registrarMovimiento(`¡${nombreRival.innerHTML} gana el combate!`);
            return;
        }

    } else {
        let danoAPropio = Math.max(atkRival - defensaPropia, 1);
        const multiplicadorRival = obtenerMultiplicador(tipo1Rival.innerHTML, tipo1Prop.innerHTML);
        danoAPropio *= multiplicadorRival;
        vidaPropia -= danoAPropio;

        if (vidaPropia <= 0) {
            vidaPropia = 0;
        }
        vidaProp.innerHTML = vidaPropia;
        updateHP("poke-propio", vidaPropia);
        const fraseRival = obtenerFraseAleatoria('rival');
        agregarAlHistorial('Rival', fraseRival);
        registrarMovimiento(`${nombreRival.innerHTML} usa ${tipoAtaque === 'fisico' ? 'Ataque Físico' : 'Ataque Especial'} y causa ${danoAPropio} de daño`);

        if (vidaPropia === 0) {
            registrarMovimiento(`¡${nombreRival.innerHTML} gana el combate!`);
            return;
        }

        let danoAlRival = Math.max(atkPropio - defensaRival, 1);
        const multiplicador = obtenerMultiplicador(tipo1Prop.innerHTML, tipo1Rival.innerHTML);
        danoAlRival *= multiplicador;
        vidaDelRival -= danoAlRival;

        if (vidaDelRival <= 0) {
            vidaDelRival = 0;
        }
        vidaRival.innerHTML = vidaDelRival;
        updateHP("poke-rival", vidaDelRival);
        const fraseJugador = obtenerFraseAleatoria('jugador');
        agregarAlHistorial('Tú', fraseJugador);
        registrarMovimiento(`¡Golpe efectivo! ${nombreRival.innerHTML} recibe ${danoAlRival} de daño`);

        if (vidaDelRival === 0) {
            registrarMovimiento(`¡${nombreProp.innerHTML} gana el combate!`);
            return;
        }
    }
};




const combate = ()=>{
    
    
}

//Funciones adicionales para estetica

function updateHP(pokemon, hp) {
    const hpBar = document.querySelector(#${pokemon} .hp-bar);
    const hpPercentage = (hp / 100) * 100; // Ajusta el 100 al HP máximo del Pokémon

    hpBar.style.width = ${hpPercentage}%;
    hpBar.textContent = ${hp} HP;

    if (hpPercentage <= 25) {
        hpBar.classList.add("low");
        hpBar.classList.remove("medium");
    } else if (hpPercentage <= 50) {
        hpBar.classList.add("medium");
        hpBar.classList.remove("low");
    } else {
        hpBar.classList.remove("low", "medium");
    }
}


const agregarAlHistorial = (hablante, frase) => {
    const historialCombate = document.querySelector('#historialCombate');
    const nuevaLinea = document.createElement('p');
    nuevaLinea.textContent = `${hablante}: "${frase}"`;
    historialCombate.appendChild(nuevaLinea);
};
const combate = (tipoAtaque) => {

    let vidaPropia = parseInt(vidaProp.innerHTML);
    let vidaDelRival = parseInt(vidaRival.innerHTML);

    let velocidadPropia = parseInt(velocidadProp.innerHTML);
    let velocidadDelRival = parseInt(velocidadRival.innerHTML);

    let atkPropio = tipoAtaque === 'fisico' ? parseInt(atkFisProp.innerHTML) : parseInt(atkEspProp.innerHTML);
    let atkRival = tipoAtaque === 'fisico' ? parseInt(atkFisRival.innerHTML) : parseInt(atkEspRival.innerHTML);

    let defensaRival = tipoAtaque === 'fisico' ? parseInt(defensaFisRival.innerHTML) : parseInt(defensaEspRival.innerHTML);
    let defensaPropia = tipoAtaque === 'fisico' ? parseInt(defensaFisProp.innerHTML) : parseInt(defensaEspProp.innerHTML);

    registrarMovimiento(`${nombreProp.innerHTML} usa ${tipoAtaque === 'fisico' ? 'Ataque Físico' : 'Ataque Especial'}`);

    if (velocidadPropia >= velocidadDelRival) {
        let danoAlRival = Math.max(atkPropio - defensaRival, 1);
        const multiplicador = obtenerMultiplicador(tipo1Prop.innerHTML, tipo1Rival.innerHTML);
        danoAlRival *= multiplicador;
        vidaDelRival -= danoAlRival;

        if (vidaDelRival <= 0) {
            vidaDelRival = 0;
        }
        vidaRival.innerHTML = vidaDelRival;
        updateHP("poke-rival", vidaDelRival);
        const fraseJugador = obtenerFraseAleatoria('jugador');
        agregarAlHistorial('Tú', fraseJugador);
        registrarMovimiento(`¡Golpe efectivo! ${nombreRival.innerHTML} recibe ${danoAlRival} de daño`);

        if (vidaDelRival === 0) {
            registrarMovimiento(`¡${nombreProp.innerHTML} gana el combate!`);
            return;
        }

        let danoAPropio = Math.max(atkRival - defensaPropia, 1);
        const multiplicadorRival = obtenerMultiplicador(tipo1Rival.innerHTML, tipo1Prop.innerHTML);
        danoAPropio *= multiplicadorRival;
        vidaPropia -= danoAPropio;

        if (vidaPropia <= 0) {
            vidaPropia = 0;
        }
        vidaProp.innerHTML = vidaPropia;
        updateHP("poke-propio", vidaPropia);
        const fraseRival = obtenerFraseAleatoria('rival');
        agregarAlHistorial('Rival', fraseRival);
        registrarMovimiento(`${nombreRival.innerHTML} contraataca y causa ${danoAPropio} de daño`);

        if (vidaPropia === 0) {
            registrarMovimiento(`¡${nombreRival.innerHTML} gana el combate!`);
            return;
        }

    } else {
        let danoAPropio = Math.max(atkRival - defensaPropia, 1);
        const multiplicadorRival = obtenerMultiplicador(tipo1Rival.innerHTML, tipo1Prop.innerHTML);
        danoAPropio *= multiplicadorRival;
        vidaPropia -= danoAPropio;

        if (vidaPropia <= 0) {
            vidaPropia = 0;
        }
        vidaProp.innerHTML = vidaPropia;
        updateHP("poke-propio", vidaPropia);
        const fraseRival = obtenerFraseAleatoria('rival');
        agregarAlHistorial('Rival', fraseRival);
        registrarMovimiento(`${nombreRival.innerHTML} usa ${tipoAtaque === 'fisico' ? 'Ataque Físico' : 'Ataque Especial'} y causa ${danoAPropio} de daño`);

        if (vidaPropia === 0) {
            registrarMovimiento(`¡${nombreRival.innerHTML} gana el combate!`);
            return;
        }

        let danoAlRival = Math.max(atkPropio - defensaRival, 1);
        const multiplicador = obtenerMultiplicador(tipo1Prop.innerHTML, tipo1Rival.innerHTML);
        danoAlRival *= multiplicador;
        vidaDelRival -= danoAlRival;

        if (vidaDelRival <= 0) {
            vidaDelRival = 0;
        }
        vidaRival.innerHTML = vidaDelRival;
        updateHP("poke-rival", vidaDelRival);
        const fraseJugador = obtenerFraseAleatoria('jugador');
        agregarAlHistorial('Tú', fraseJugador);
        registrarMovimiento(`¡Golpe efectivo! ${nombreRival.innerHTML} recibe ${danoAlRival} de daño`);

        if (vidaDelRival === 0) {
            registrarMovimiento(`¡${nombreProp.innerHTML} gana el combate!`);
            return;
        }
    }
};

// Eventos para elegir el tipo de ataque
btnElegir.addEventListener('click', obtenerPokePropio);
btnAtkFis.addEventListener('click', () => combate('fisico'));
btnAtkEsp.addEventListener('click', () => combate('especial'));

// Cargar Pokémon rival automáticamente al iniciar
window.addEventListener('load', obtenerPokeRival);
