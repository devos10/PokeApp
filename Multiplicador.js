const obtenerMultiplicador = (tipoAtaque, tipoRival) => {
    if (tablaEfectividad[tipoAtaque] && tablaEfectividad[tipoAtaque][tipoRival]) {
        return tablaEfectividad[tipoAtaque][tipoRival];
    }
    return 1; // Sin modificación de daño si el tipo no se encuentra
};
