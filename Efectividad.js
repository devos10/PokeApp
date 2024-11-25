const tablaEfectividad = {
    acero: {
        acero: 0.5, agua: 0.5, bicho: 1, dragón: 0.5, eléctrico: 0.5, fantasma: 1, fuego: 0.5, hielo: 2, lucha: 1, 
        normal: 1, planta: 1, psíquico: 1, roca: 2, siniestro: 1, tierra: 1, veneno: 0.5, volador: 1, hada: 2
    },
    agua: {
        fuego: 2, agua: 0.5, planta: 0.5, tierra: 2, roca: 2, dragón: 0.5, acero: 1, eléctrico: 1, bicho: 1, 
        fantasma: 1, lucha: 1, normal: 1, psíquico: 1, siniestro: 1, veneno: 1, volador: 1, hielo: 1, hada: 1
    },
    bicho: {
        planta: 2, psíquico: 2, siniestro: 2, fuego: 0.5, lucha: 0.5, veneno: 0.5, volador: 0.5, acero: 0.5,
        agua: 1, bicho: 1, dragón: 1, eléctrico: 1, fantasma: 0.5, hielo: 1, normal: 1, roca: 1, tierra: 1, hada: 0.5
    },
    dragón: {
        dragón: 2, acero: 0.5, hada: 0, fuego: 1, agua: 1, planta: 1, eléctrico: 1, bicho: 1, fantasma: 1, 
        lucha: 1, normal: 1, psíquico: 1, roca: 1, siniestro: 1, veneno: 1, volador: 1, hielo: 1, tierra: 1
    },
    eléctrico: {
        agua: 2, volador: 2, tierra: 0, planta: 0.5, eléctrico: 0.5, acero: 1, dragón: 0.5, bicho: 1, fantasma: 1,
        fuego: 1, lucha: 1, hielo: 1, normal: 1, psíquico: 1, roca: 1, siniestro: 1, veneno: 1, hada: 1
    },
    fantasma: {
        psíquico: 2, fantasma: 2, normal: 0, siniestro: 0.5, acero: 1, agua: 1, bicho: 1, dragón: 1, eléctrico: 1,
        fuego: 1, hielo: 1, lucha: 1, planta: 1, roca: 1, tierra: 1, veneno: 1, volador: 1, hada: 1
    },
    fuego: {
        planta: 2, hielo: 2, bicho: 2, acero: 2, agua: 0.5, roca: 0.5, fuego: 0.5, dragón: 0.5, tierra: 1,
        eléctrico: 1, fantasma: 1, lucha: 1, normal: 1, psíquico: 1, siniestro: 1, veneno: 1, volador: 1, hada: 1
    },
    hada: {
        dragón: 2, lucha: 2, siniestro: 2, fuego: 0.5, veneno: 0.5, acero: 0.5, agua: 1, bicho: 1, eléctrico: 1,
        fantasma: 1, hielo: 1, normal: 1, planta: 1, psíquico: 1, roca: 1, tierra: 1, volador: 1, hada: 1
    },
    hielo: {
        planta: 2, tierra: 2, volador: 2, dragón: 2, fuego: 0.5, agua: 0.5, hielo: 0.5, acero: 0.5, bicho: 1, 
        eléctrico: 1, fantasma: 1, lucha: 1, normal: 1, psíquico: 1, roca: 1, siniestro: 1, veneno: 1, hada: 1
    },
    lucha: {
        normal: 2, hielo: 2, roca: 2, siniestro: 2, acero: 2, veneno: 0.5, volador: 0.5, psíquico: 0.5, bicho: 0.5,
        hada: 0.5, fantasma: 0, agua: 1, dragón: 1, eléctrico: 1, fuego: 1, lucha: 1, planta: 1, tierra: 1
    },
    normal: {
        roca: 0.5, fantasma: 0, acero: 0.5, agua: 1, bicho: 1, dragón: 1, eléctrico: 1, fuego: 1, hielo: 1,
        lucha: 1, planta: 1, psíquico: 1, siniestro: 1, tierra: 1, veneno: 1, volador: 1, hada: 1
    },
    planta: {
        agua: 2, tierra: 2, roca: 2, fuego: 0.5, planta: 0.5, veneno: 0.5, volador: 0.5, bicho: 0.5, dragón: 0.5,
        acero: 0.5, eléctrico: 1, fantasma: 1, hielo: 1, lucha: 1, normal: 1, psíquico: 1, siniestro: 1, hada: 1
    },
    psíquico: {
        lucha: 2, veneno: 2, psíquico: 0.5, acero: 0.5, siniestro: 0, agua: 1, bicho: 1, dragón: 1, eléctrico: 1,
        fantasma: 1, fuego: 1, hielo: 1, normal: 1, planta: 1, roca: 1, tierra: 1, volador: 1, hada: 1
    },
    roca: {
        fuego: 2, hielo: 2, volador: 2, bicho: 2, lucha: 0.5, tierra: 0.5, acero: 0.5, agua: 1, dragón: 1,
        eléctrico: 1, fantasma: 1, normal: 1, planta: 1, psíquico: 1, roca: 1, siniestro: 1, veneno: 1, hada: 1
    },
    siniestro: {
        psíquico: 2, fantasma: 2, lucha: 0.5, siniestro: 0.5, hada: 0.5, acero: 1, agua: 1, bicho: 1, dragón: 1,
        eléctrico: 1, fuego: 1, hielo: 1, normal: 1, planta: 1, roca: 1, tierra: 1, veneno: 1, volador: 1
    },
    tierra: {
        fuego: 2, eléctrico: 2, veneno: 2, roca: 2, acero: 2, planta: 0.5, bicho: 0.5, volador: 0, agua: 1,
        dragón: 1, fantasma: 1, hielo: 1, lucha: 1, normal: 1, psíquico: 1, siniestro: 1, hada: 1
    },
    veneno: {
        planta: 2, hada: 2, veneno: 0.5, tierra: 0.5, roca: 0.5, fantasma: 0.5, acero: 0, agua: 1, bicho: 1,
        dragón: 1, eléctrico: 1, fuego: 1, hielo: 1, lucha: 1, normal: 1, psíquico: 1, volador: 1, siniestro: 1
    },
    volador: {
        planta: 2, lucha: 2, bicho: 2, eléctrico: 0.5, roca: 0.5, acero: 0.5, agua: 1, dragón: 1, fantasma: 1,
        fuego: 1, hielo: 1, normal: 1, psíquico: 1, tierra: 1, veneno: 1, siniestro: 1, hada: 1
    }
};
