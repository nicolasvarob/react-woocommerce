const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function toFullDate(date){
    //Toma fecha en formato dia/mes/año
    const fd = date.split('/');
    const fullDate = new Date(fd[2],(fd[1] - 1),fd[0]);

    const dateMsg =  days[fullDate.getDay()] + " " + fullDate.getDate() + " de " + months[fullDate.getMonth()]

    return dateMsg;
}

export default toFullDate;