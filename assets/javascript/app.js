var problems=[];
var usedProblems=[];
var randomProblem;
var falseUserAnswers=[];
var correctUserAnswers=[];
var timeoutUserAnswers=[];
var questions=["¿Cual de las siguientes definiciones es correcta para un dato maestro de articulo?",
"¿Cual es la diferencia entre la numeracion \"Manual\" y la numeracion \"Auto\" en los datos maestros de articulos?",
"¿Que tenemos que cuidar a la hora de definir la descripcion del articulo?",
"¿En base a que propiedad del dato maestro del articulo se dividen las compras las compradoras?",
"¿Cuando tengo que dar de alta un articulo y cuando puedo hacer la compra sin necesidad de un dato maestro?",
"¿Cuando debemos definir un articulo como \"inventariable\"?",
"¿Cuando debemos definir un articulo como de \"venta\"?",
"¿Puede un articulo ser de compras y de ventas?",
"¿Porque es tan importante definir desde la creacion del dato maestro si el articulo va a ser inventariable, de compras y de venta?",
"¿Para que usamos el campo \"ID Adicional\" en la pestaña general en el Dato Maestro de articulos?",
"¿Los campos de \"Sujeto a retencion de impuestos\" y \"Sujeto a impuesto\" se refieren a:?",
"¿Para que se usa el campo \"Clase de expedicion\"?",
"¿De manera general para que definimos articulos con manejo por numero de serie o manejo por numero de lote?",
"¿El manejo por numero de serie permite mayor control o menor control que el numero de lote?",
"¿Porque manejamos por numero de lote los articulos como los rollos de lamina cuando ese metodo es menos exacto que el manejo por numero de serie?",
"¿Porque ponemos un articulo como \"inactivo\" en vez de eliminar su dato maestro?",
"¿Cual de las siguientes listas tiene pestañas que no existen en los datos maestros de articulos?",
"¿En que pestaña del dato maestro podemos definir los proveedores por defecto para un articulo de compra?",
"¿De que sirve definir proveedores por defecto para un articulo?",
"¿Para que sirve establecer un nombre de unidad de medida de compras y que es la unidad de compras?",
"¿Que pregunta debemos hacernos a la hora de llenar el campo \"Articulos por unidad de compras\"?",
"¿Que reporte se obtiene al dar clic sobre el boton con una grafica de barras en la parte inferior izquierda de la pestaña de compras?",
"¿Porque NO utiliza Cortinas Mexico el campo de \"Comision definida por ventas\" en la pestaña de ventas?",
"¿Que es la unidad de medida de ventas?"
]

var answers = ["Es el codigo con el cual se referencia un articulo en un documento de ventas",
"Es el factor de conversion entre la unidad de inventario y la unidad de compras",
"Es la ficha general de un articulo dentro del SAP, contiene toda su informacion principal",
"La numeracion automatica genera un codigo automaticamente mientras que en la manual tenemos que definir manualmente el codigo del articulo",
"Cada vez que referenciemos ese articulo dentro de un documento de compras se actualizara automaticamente la cantidad hacia el registro de stock en el almacen en el cual lo estemos referenciando mientras que si se hace manualmente tenemos que actualizarlo nosotros",
"La opcion automatica da de alta al articulo en todos los almacenes mientras que la numeracion manual obliga al usuario a dar de alta el articulo en cada almacen que se quiera utilizar",
"Que no contenga simbolos y solamente contenga letras",
"Que este en el idioma original del proveedor del producto para que el proveedor lo entienda cuando vea la Orden de Compra",
"Debe llenarse con el detalle suficiente para que Compras haga la compra o Produccion fabrique sin necesidad de hacer preguntas a ningun otro departamento",
"En base al grupo al que pertenece el articulo",
"En base a la clase del articulo",
"En base a la unidad en la que se compra",
"Hacer recuentos y contabilizaciones todas las semanas",
"Registrar todas las entradas y todas las salidas sin excepciones",
"Mantener el almacen cerrado en todo momento",
"Cuando no es una compra urgente entonces tengo que dar de alta el articulo forzosamente",
"Cuando se que este articulo/servicio va a ser comprado en mas de una ocasion",
"Cuando el articulo es diferente a todos los que actualmente estan dados de alta en el SAP",
"Cuando ese articulo vive en el almacen de PT",
"Cuando el articulo forma parte de una cortina que vendemos a un cliente",
"Cuando queremos referenciar ese articulo dentro de un documento de ventas",
"Si, se puede usar el mismo codigo para la compra que para la venta siempre y cuando el articulo que se venda sea exactamente igual al que compramos",
"No, se tiene que crear un codigo para ventas y otro codigo para compras",
"SI pero solamente si el articulo es inventariable tambien",
"Porque desde el momento en que se referencie el codigo de ese articulo en un documento de compras, ventas, almacen o cualquier otra parte del SAP ya no se van a poder redefinir esas propiedades",
"Porque si no le definimos las propiedades correctas entonces no vamos a poder utilizarlo en los documentos correctos",
"Porque la ley nos obliga, por cuestion de declaraciones contables",
"Para poner un codigo adicional con el cual nos referenciemos a ese articulo",
"Es el codigo que utiliza inventario a diferencia del codigo principal que es el que aparece en los documentos de Compras",
"Es el codigo que el SAP le asigna automaticamente al articulo cuando nosotros definimos un codigo manual para el articulo",
"A si el articulo es vendido/comprado con IVA",
"A si cuando el articulo es vendido a una persona fisica se le deben retener impuestos y a si el articulo es vendido/comprado con IVA",
"Se activan cuando el articulo aplica para impuestos especiales como lo son la gasolina o los fletes",
"Para definir si el poveedor nos cobra el flete aparte o si nosotros lo pagamos",
"Es el termino incoterm en base al cual vendemos o compramos el articulo",
"Define el tipo de empaquetado en el cual compramos o vendemos el articulo",
"Para tener rastreabilidad del articulo dentro del proceso de produccion o de compra. Esto es necesario cuando se requiere tener un registro para calidad",
"Cuando el proveedor o produccion le asignan un numero de serie o lote",
"Para poder saber cuando se fabrico el articulo o cuando lo compramos",
"El manejo por numero de serie es menos exacto que el manejo por numero de lote",
"El manejo por numero de serie es el mas exacto de los controles. Todos los articulos para los cuales se requiera llevar un control exacto tienen que manejarse por este metodo",
"El manejo por numero de serie permite llevar un control mas exacto que el de numero de lote pero no todos los articulos pueden manejarse por este metodo",
"Porque seria demasiado complicado controlar los consumos por numero de serie ya que los rollos de lamina estan afuera de las rejas del almacen principal",
"Porque los rollos de lamina no se consumen en unidades completas, se pueden consumir en unidades decimales por lo cual no se puede asignar un numero de serie por articulo",
"Porque los numeros de lote son lo que manejan los proveedores de lamina en rollos",
"Porque una vez que un articulo ya se referencio en un documento de compras/ventas/inventario/produccion o cualquier otro del SAP entonces ya no podemos eliminar su dato maestro",
"Lo usamos unicamente cuando queremos inhabilitar un articulo temporalmente",
"Un articulo se pone automaticamente en inactivo cuando no es utilizado en mas de 6 meses",
"Datos de compras, Datos de ventas, Financiero, Almacenes, Propiedades",
"Datos de compras, Datos de inventario, Propiedades, Comentarios, Anexos",
"General, Datos de produccion, Propiedades, Anexos",
"En la pestaña de compras",
"En la pestaña de socios de negocio",
"En la pestaña de Datos de planificacion",
"Para que no se le compra un articulo a un proveedor que no esta autorizado",
"Para que el SAP nos proponga a esos proveedores a la hora de hacer nuestro comparativo de cotizaciones y sepamos a quien pedirle cotizaciones",
"Para que los proveedores reciban notificaciones automaticas cuando se nos esta acabando un articulo",
"La unidad de medida de compra es la unidad en la cual nos vende un proveedor y es la unidad en base a la cual el proveedor establece su precio unitario. Esta unidad es la que va a aparecer en todos los documentos de compra",
"Es la unidad en la cual maneja sus inventarios el almacen y por lo tanto es la unidad en base a la cual debemos comprarle a nuestros proveedores",
"Tener una unidad de medida de compras permite llevar un control correccto de todo lo que se ha comprado y generar reportes estadisticos",
"¿Cuantas unidades de medida de inventario hay por cada unidad de medida de compras?",
"¿Cuantas unidades de medida de compras hay por cada unidad de medida de inventario?",
"¿Cual es el factor de conversion entre la unidad de medida de compras y la de inventario?",
"Un reporte de todos los movimientos de inventario que ha tenido ese articulo",
"Un reporte de todas las compras que hemos hecho de ese articulo",
"Un reporte de todo lo que tenemos pendiente de surtir por parte de nuestros proveedores",
"Porque en ese campo se establece una comision fija por la venta de un articulo cuando en Cortinas Mexico las comisiones son variables",
"Porque no tenemos habilitado el modulo de comisiones",
"Porque el control de comisiones no se lleva dentro del SAP",
"Es el precio al cual le vendemos un articulo a un cliente",
"Es la unidad de medida con la cual le vendemos un articulo a un cliente",
"Es \"cortina\"",
];

correctAnswers = [3,1,3,1,2,3,3,1,1,1,2,2,1,3,2,1,1,1,2,1,1,2,1,2]
for (i=0;i<20;i++){
    problems.push(i);
    var answ = i * 3;
    problems[i] = {
        question: questions[i],
        answer1: answers[answ],
        answer2: answers[answ+1],
        answer3: answers[answ+2],
        correctAnsw: correctAnswers[i],
        userAnswer: "",
        userSubmit: false
    }
}


// Hay un problema con la generacion del numero aleatorio porque por alguna razon ya no encuentra el indez dentro de la matriz de problems
function newProblem(){
    var randomProbNum = Math.floor(Math.random()*problems.length);
    console.log(randomProbNum);
    randomProblem = problems[randomProbNum];
    console.log(randomProblem);
    problems.splice(randomProbNum,1);
    $("#questionContent").text(randomProblem.question);
    $("#answer1Label").text(randomProblem.answer1);
    $("#answer2Label").text(randomProblem.answer2);
    $("#answer3Label").text(randomProblem.answer3);
    var attr1 = $("#answer1Radio").attr("checked");
    var attr2 = $("#answer2Radio").attr("checked");
    var attr3 = $("#answer3Radio").attr("checked");
    if(typeof attr1 === typeof undefined && typeof attr1 === false){
        $("#answer1Radio").attr("checked","");
    }
    if(typeof attr2 !== typeof undefined && typeof attr2 !== false){
        $("#answer1Radio").removeAttr("checked");
    }
    if(typeof attr3 !== typeof undefined && typeof attr3 !== false){
        $("#answer1Radio").removeAttr("checked");
    }
}


function start(){
    if($("#bienvenida").attr("class")==="jumbotron d-none"){
        $("#bienvenida").removeClass("jumbotron d-none").addClass("jumbotron");
    }
    if($("#problemRow").attr("class")==="row"){
        $("#problemRow").removeClass("row").addClass("row d-none");
    }
    if($("#resultsRow").attr("class")==="row"){
        $("#resultsRow").removeClass("row").addClass("row d-none");
    }
}

function results(){
    if($("#bienvenida").attr("class")==="jumbotron"){
        $("#bienvenida").removeClass("jumbotron").addClass("jumbotron d-none");
    }
    if($("#problemRow").attr("class")==="row"){
        $("#problemRow").removeClass("row").addClass("row d-none");
    }
    if($("#resultsRow").attr("class")==="row d-none"){
        $("#resultsRow").removeClass("row d-none").addClass("row");
    }
    for(i=0;i<usedProblems.length;i++){
        if(usedProblems[i].userSubmit === true && usedProblems[i].userAnswer===usedProblems[i].correctAnsw){
            correctUserAnswers.push(usedProblems[i]);
        }
        else if (usedProblems[i].userSubmit === false){
            timeoutUserAnswers.push(usedProblems[i]);
        }
        else{
            falseUserAnswers.push(usedProblems[i]);
        }
    }
    $("#resCantAciertos").text(correctUserAnswers.length);
    $("#resCantErrores").text(falseUserAnswers.length);
    $("#resCantSinResp").text(timeoutUserAnswers.length);
    $("#resCantTotal").text(correctUserAnswers.length + falseUserAnswers.length + timeoutUserAnswers.length);

    $("#porcCantAciertos").text((correctUserAnswers.length/(correctUserAnswers.length + falseUserAnswers.length + timeoutUserAnswers.length))*100 + "%");
    $("#porcCantErrores").text((falseUserAnswers.length/(correctUserAnswers.length + falseUserAnswers.length + timeoutUserAnswers.length))*100 + "%");
    $("#porcCantSinResp").text((timeoutUserAnswers.length/(correctUserAnswers.length + falseUserAnswers.length + timeoutUserAnswers.length))*100 + "%");
    $("#porcCantTotal").text("100.00%");


}

start();

$("#startButton").click(function(){
    // event.preventDefault();
    newProblem();
    if($("#bienvenida").attr("class")==="jumbotron"){
        $("#bienvenida").removeClass("jumbotron").addClass("jumbotron d-none");
    }
    if($("#problemRow").attr("class")==="row d-none"){
        $("#problemRow").removeClass("row d-none").addClass("row");
    }
})

$("#submitButton").click(function(){
    if(problems.length>0){
        var radioValue = $("input[name='answersRadio']:checked").val();
        randomProblem.userAnswer = radioValue;
        randomProblem.userSubmit = true;
        usedProblems.push(randomProblem);
        newProblem();
    }
    else{
        results();
    }
    
});
