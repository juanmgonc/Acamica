//Declaración de variables
var nombreUsuario = "Juan Gonzalez";
var saldoCuenta = 4000;
var limiteExtraccion = 2000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoDeSeguridad = 1234;
var arrayMovimientos = [];

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar

/*
Funcion  que permite el cambio del limite de extraccion de la cuenta. Al ejecutarse pide al usuario que ingrese
el nuevo valor a establecer como limite de extraccion. Toma ese valor y lo guarda en la variable correspondiente.
*/
function cambiarLimiteDeExtraccion() {
  var stringNuevoLimite = prompt("Ingrese nuevo limite de extraccion");
  var nuevoLimite = parseInt(stringNuevoLimite);

  if (validarDatoIngresado(nuevoLimite)){
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert("Se ha cambiado el limite de extraccion a: "+nuevoLimite);
  }
}

/*
Funcion que permite realizar extracciones de la cuenta. Al ser llamada, pide al usuario el monto necesitado, toma
ese valor y lo asigna a una variable. Esta ultima es corroborada para controlar que el valor sea el permitido, usando
otras funciones que se encargan de la validacion. Si las validaciones son aprobadas, la funcion resta el monto ingresado
por el usuario y se muestra el valor anterior y actual de la variable que contiene el saldo de la cuenta.
*/
function extraerDinero() {
  var stringExtraer = prompt("¿Cuánto quiere extraer?");
  var extraccion = parseInt(stringExtraer);
  var fecha = new Date();

  if(multipoDeCien(extraccion)){
    if (mayorAlLimite(extraccion)){
      if (haySaldoDisponible(extraccion)){
        var saldoAnterior = saldoCuenta;
        restaCuenta(extraccion);
        actualizarSaldoEnPantalla();
        guardarMovimiento("EXTRACCION ", fecha.toLocaleDateString("es-ES"), extraccion);
        alert("Saldo anterior: "+saldoAnterior + "\n Dinero retirado: "+extraccion + "\n Saldo actual: "+saldoCuenta);
      }
      else {
        alert("¡El monto ingresado es mayor a su saldo!");
      }
    }
    else {
      alert("¡El monto ingresado es mayor al limite de extraccion!");
    }
  }
  else {
    alert("¡Solo puedes extraer multiplos de 100");
  }
}

/*
Funcion que permite depositar dinero en la cuenta. Cuando se ejecuta, pide al usuario que ingrese el monto a depositar.
Este valor es asignado a una variable del tipo local, y es validada por una estructura de control, para corroborar que
el valor sea del tipo deseado para ser trabajado correctamente. Si la validacion fue exitosa, el valor es sumado y asignado
a la variable que contiene el saldo de la cuenta. Se muestra el saldo anterior y el actual.
*/
function depositarDinero() {
  var stringDeposito = prompt("¿Cuánto quiere depositar?");
  var deposito = parseInt(stringDeposito);
  var fecha = new Date();

  if (validarDatoIngresado(deposito)){
    var saldoAnterior = saldoCuenta;
    sumaCuenta(deposito);
    actualizarSaldoEnPantalla();
    guardarMovimiento("DEPOSITO ", fecha.toLocaleDateString("es-ES"), deposito);
    alert("Saldo anterior: "+saldoAnterior + "\n Dinero depositado: "+deposito + "\n Saldo actual: "+saldoCuenta);

  }
}

/*
Funcion que permite pagar los servicios. Al ser llamada se pide al usuario que seleccione el servicio a pagar ingresando
una de las opciones numericas disponibles. El valor es tomado en una variable y es usado para seleccionar el caso correspondiente
dentro de la estrucutura de control Switch. Se realizan las operaciones de pago y se actualizan los datos de la cuenta. En
caso de ser ingresada una opcion no valida, se imprime un mensaje con el error para el usuario.
*/
function pagarServicio() {
  var stringOpcion = prompt("Ingrese el numero que corresponde con el servicio que desea abonar" + "\n1-Agua" + "\n2-Luz" + "\n3-Internet" + "\n4-Telefono");
  var opcion = parseInt(stringOpcion);
  var fecha = new Date();

  switch (opcion) {
    case 1:
      if (haySaldoDisponible(agua)) {
        var saldoAnterior = saldoCuenta;
        restaCuenta(agua);
        actualizarSaldoEnPantalla();
        guardarMovimiento("AGUA ", fecha.toLocaleDateString("es-ES"), agua);
        alert("Has abonado Agua." + "\nSaldo anterior: "+saldoAnterior + "\nDinero descontado: "+agua + "\n Saldo actual: "+saldoCuenta);
      }
      else {
        alert("No tienes dinero suficiente para pagar este servicio");
      }
      break;
    case 2:
      if (haySaldoDisponible(luz)) {
        var saldoAnterior = saldoCuenta;
        restaCuenta(luz);
        actualizarSaldoEnPantalla();
        guardarMovimiento("LUZ ", fecha.toLocaleDateString("es-ES"), luz);
        alert("Has abonado Luz." + "\nSaldo anterior: "+saldoAnterior + "\nDinero descontado: "+luz + "\n Saldo actual: "+saldoCuenta);
      }
      else {
        alert("No tienes dinero suficiente para pagar este servicio");
      }
      break;
    case 3:
      if (haySaldoDisponible(internet)) {
        var saldoAnterior = saldoCuenta;
        restaCuenta(internet);
        actualizarSaldoEnPantalla();
        guardarMovimiento("INTERNET ", fecha.toLocaleDateString("es-ES"), internet);
        alert("Has abonado Internet." + "\nSaldo anterior: "+saldoAnterior + "\nDinero descontado: "+internet + "\n Saldo actual: "+saldoCuenta);
      }
      else {
        alert("No tienes dinero suficiente para pagar este servicio");
      }
      break;
    case 4:
      if (haySaldoDisponible(telefono)) {
        var saldoAnterior = saldoCuenta;
        restaCuenta(telefono);
        actualizarSaldoEnPantalla();
        guardarMovimiento("TELEFONO ", fecha.toLocaleDateString("es-ES"), telefono);
        alert("Has abonado Telefono." + "\nSaldo anterior: "+saldoAnterior + "\nDinero descontado: "+telefono + "\n Saldo actual: "+saldoCuenta);
      }
      else {
        alert("No tienes dinero suficiente para pagar este servicio");
      }
      break;
    default:
      alert("¡A seleccionado una opcion no valida!");
      break;
  }
}

/*
Funcion que permite transferir dinero a cuentas amigas. Al ser ejecutada, se pide al usuario que ingrese el monto
a transferirse. Este dato es tomado en una variable, y se procede a las validaciones correspondientes. Luego se
pide el numero de cuenta y se corrobora que sea una cuenta amiga, si no lo es, se imprime una alerta para el usuario.
Si todos los datos son correctos, se procede a sumar el monto a la variable que contiene el saldo de la cuenta.
*/
function transferirDinero() {
  var stringMonto = prompt("Ingrese el monto que desea transferir:");
  var monto = parseInt(stringMonto);
  var fecha = new Date();

  if (haySaldoDisponible(monto)) {
    var stringNumeroCuenta = prompt("Ingrese el numero de cuenta al que quiere transferir:");
    var numeroCuenta = parseInt(stringNumeroCuenta);
    if (numeroCuenta == cuentaAmiga1 || numeroCuenta == cuentaAmiga2) {
      var saldoAnterior = saldoCuenta;
      restaCuenta(monto);
      actualizarSaldoEnPantalla();
      guardarMovimiento("TRANSFERENCIA ", fecha.toLocaleDateString("es-ES"), monto);
      alert("Se han transferido $"+monto + "\nCuenta destino: "+numeroCuenta);
    }
    else {
      alert("¡Solo se pueden realizar transferencias a cuentas amigas!");
    }
  }
  else {
    alert("¡No tienes dinero suficiente para realizar la transferencia!");
  }

}

/*
Funcion que permite ver los movimientos realizados en la cuenta. Al ejecutarse, se muestra al usuario
los movimientos que se hicieron en la cuenta.
*/
function movimientos() {
  var titulos = "MOVIMIENTO \t\t" + "|| \t\t" + "FECHA \t\t" + "|| \t\t" + "MONTO" + "\n" + "================================" + "\n";

  if (Array.isArray(arrayMovimientos) && arrayMovimientos.length) {
    alert(titulos + "\n" + arrayMovimientos.join("\t\t"));
  }
  else {
    alert(titulos + "\n" + "Aun no hay movimientos realizados");
  }
}

/*
Funcion que permite iniciar sesion en el Home Banking. Esta funcion se encarga de pedirle al usuario que ingrese
la contraseña asignada a su cuenta. Se comprueba que el valor sea el mismo que esta guardado en la variable codigoDeSeguridad.
Si se pasa la validacion, se imprime una Bienvenida al usuario. De lo contrario, se realiza una "retencion" del saldo de la
cuenta por cuestiones de seguridad y se informa al usuario.
*/
function iniciarSesion() {
  var stringCodigoSeguridad = prompt("Ingrese el codigo de seguridad de su cuenta:");
  var variableCodigoLocal = parseInt(stringCodigoSeguridad);
  if (variableCodigoLocal == codigoDeSeguridad) {
    alert("¡Bienvenido "+nombreUsuario + "\nYa puedes comenzar a realizar operaciones");
    }
  else {
    saldoCuenta = 0;
    alert("¡Codigo incorrecto!\n Tu dinero ha sido retenido por cuestiones de seguridad.");
  }
}

/*
Funcion que se encarga de sumar un parametro a la variable del saldo de la cuenta.
*/
function sumaCuenta(parametroASumar) {
  saldoCuenta += parametroASumar;
}

/*
Funcion que se encarga de restar un parametro a la variable del saldo de la cuenta.
*/
function restaCuenta (parametroARestar) {
  saldoCuenta -= parametroARestar;
}

/*
Funcion que corrobora que exista saldo en la cuenta del usuario. Recibe un parametro que es comparado con el saldo de la cuenta.
Si el valor es menor, devuelve un valor boleano verdadero (TRUE). De lo contrario, devuelve un FALSE.
*/
function haySaldoDisponible(parametroAEvaluar) {
  return (saldoCuenta >= parametroAEvaluar);
}

/*
Funcion que comprueba si un valor es mayor al limite de extraccion de la cuenta. Toma un parametro y lo compara con
la variable de limite de extraccion. Devuelve un valor TRUE en caso de ser menor que el limite y un FALSE en el caso contrario.
*/
function mayorAlLimite(parametroAEvaluar) {
  return (limiteExtraccion >= parametroAEvaluar);
}

/*
Funcion que se encarga de comprobar que el parametro recibido, sea un multiplo de 100. De ser verdadero devuelve un TRUE
y de caso contrario un FALSE.
*/
function multipoDeCien(parametroAEvaluar) {
  return ((parametroAEvaluar)%100 == 0);
}

/*
Funcion que recibe por parametros los datos de los movimientos realizados en la cuenta y se los guarda en un arreglo, para luego
pasarlos a la funcion encargada de imprimir los movimientos.
*/
function guardarMovimiento(operacion, fecha, monto) {
  arrayMovimientos.push(operacion);
  arrayMovimientos.push(fecha);
  arrayMovimientos.push("$" + monto);
  arrayMovimientos.push("\n");
}

/*
Funcion que se encarga de validar que los datos que ingresa el usuario no sean vacios o nulos.
*/
function validarDatoIngresado(parametroAEvaluar) {
  var valorBoleano;

  if ((typeof parametroAEvaluar === 'number' && isNaN(parametroAEvaluar)) || (typeof parametroAEvaluar === 'undefined' && parametroAEvaluar === null)){
    valorBoleano = false;
    alert("Parametro no aceptado. Finalizando funcion");
  }
  else {
    valorBoleano = true;
  }
  return valorBoleano;
}


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

// Llamada de la funcion iniciarSesion para pedir el codigo de seguridad al abrir el HTML.
iniciarSesion();
