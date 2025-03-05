
function generarCodigoUnico() {
    
    const dia = new Date().toLocaleDateString('es-CR', { weekday: 'short',timeZone:'America/Costa_Rica' }).charAt(0).toUpperCase();
    const fecha = new Date(new Date().getTime() - 6 * 60 * 60 * 1000).toISOString().slice(0, 16).replace(/[-T:]/g, ''); 
    const random = Math.floor(100 + Math.random() * 900);

    
    return `${dia}${fecha}${random}`;
}

module.exports = generarCodigoUnico;

