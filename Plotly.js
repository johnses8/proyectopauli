var data = [
    {
      type: 'bar',
      x: ['2016','2017','2018'],
      y: [500,600,700],
      base: [-500,-600,-700],
      hovertemplate: '%{base}',
      marker: {
        color: 'red'
      },
      name: 'expenses'
    },
    {
      type: 'bar',
      x: ['2016','2017','2018'],
      y: [300,400,700],
      base: 0,
      marker: {
        color: 'blue'
      },
      name: 'revenue'
    }]
  
  Plotly.newPlot('myDiv', data);

  var x1 = [];
var x2 = [];
for (var i = 0; i < 500; i ++) {
	x1[i] = Math.random();
	x2[i] = Math.random();
}


var trace1 = {
  x: x1,
  type: "histogram",
};
var trace2 = {
  x: x2,
  type: "histogram",
};
var data = [trace1, trace2];
var layout = {barmode: "stack"};
Plotly.newPlot('myDiv2', data, layout);

function consumirAPI3(){
    var fecha= [];
    var caldas= [];
    var antioquia= [];
    var bogota= [];
    //consumir API

    fetch ('https://www.datos.gov.co/resource/8835-5baf.json')

    //then necesita una promesa, y esa promesa se resuelve con una respuesta
    .then (respuesta_exitosa => respuesta_exitosa.json())
    .then(function(datos_obtenidos) {
        datos_obtenidos.forEach(elemento => { 
            if(elemento.fecha !=undefined && elemento.caldas != undefined && 
                elemento.antioquia != undefined
            && elemento.bogota != undefined)
            {
                caldas.push(elemento.caldas);
                antioquia.push(elemento.antioquia);
                bogota.push(elemento.bogota);
                fecha.push(elemento.fecha);
            }
        });
        //variables para las graficas
        var graf1 = {
            y: caldas,
            x: fecha,
            name: 'caldas',
            type: 'bar' 
        };
        var graf2 = {
            y: antioquia,
            x: fecha,
            name: 'antioquia',
            type: 'bar'
        };
        var graf3 = {
            y: bogota,
            x: fecha,
            name: 'bogota',
            type: 'bar'
    };
    var datosGraficas =[graf1,graf2,graf3];
    var layout = {
        barmode: 'group',
        title: {
            Text: 'pruebas PCR realizadas en colombia',
        },

    };
    Plotly.newPlot('myDiv3',datosGraficas,layout);;
});
}



function consumirAPI2(){

    var ElDoncello = [];
    var Milan = [];
    var Curillo = [];
    var Solita = [];

    fetch("https://www.datos.gov.co/resource/b359-m4y3.json")
    //Promesa
    .then (respuesta_exitosa => respuesta_exitosa.json())
    .then(function(datos_obtenidos) {
        datos_obtenidos.forEach(elemento => { 
            if(elemento.No.ACCESOSFIJOSAINTERNET !=undefined && elemento.ElDoncello != undefined && 
                elemento.Milan != undefined
            && elemento.Curillo != undefined
            && elemento.Solita != undefined)
            {
                ElDoncello.push(elemento.ElDoncello);
                Milan.push(elemento.Milan);
                Curillo.push(elemento.Curillo);
                Solita.push(elemento.Solita);
            }
        });

    // Variables de grafico
    var poblacion_1 = {
        x: ElDoncello,
        y: No.ACCESOSFIJOSAINTERNET,

        name: 'El Doncello',
        type: 'histogram',
    }

    var poblacion_2 = {
        x: Milan,
        y: No.ACCESOSFIJOSAINTERNET,

        name: 'Milan',
        type: 'histogram',
    };

    var poblacion_3 = {
        x: Curillo,
        y: No.ACCESOSFIJOSAINTERNET,

        name: 'Curillo',
        type: 'histogram',
    };

    var poblacion_4 = {
        x: Solita,
        y: No.ACCESOSFIJOSAINTERNET,

        name: 'Solita',
        type: 'histogram',
    };

    var datosGraficas =[poblacion_1,poblacion_2,poblacion_3,poblacion_4];
    var layout = {
        barmode: 'group',
        title: {
            Text: 'VISTA_Internet Fijo Penetración por Municipios del Departamento del Caquetá-.',
        },

    };
    Plotly.newPlot('myDiv4',datosGraficas,layout);;
});

}
var data = [{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('myDiv5', data, layout);

consumirAPI3();
consumirAPI2();