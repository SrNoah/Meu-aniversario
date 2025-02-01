AOS.init();

const dataEvento = new Date("Jan 20, 2026 00:00:00");
const timeStampEvento = dataEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStampEvento - timeStampAtual;

    diasEmMs = 1000 * 60 * 60 * 24;
    horasEmMs = 1000 * 60 * 60;
    minutoEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaEvento / diasEmMs);
    const horasAteEvento = Math.floor((distanciaEvento % diasEmMs) / horasEmMs);
    const minutosAteEvento = Math.floor((distanciaEvento % horasEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);