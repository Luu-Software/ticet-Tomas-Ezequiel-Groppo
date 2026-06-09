import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.

function calcularTotal(id:string, cantidad:number, codigo:string){
  
  let precioND: number; 
  let artista: number;
  
  if (id=== "sabrina"){
    artista=1000
  }
  else if (id==="kgatlw"){
   artista=700
  }
  else if (id==="lali"){
   artista=500
  }
  else if (id==="magdalena"){
    artista=600
  }
  else if (id==="viagra"){
    artista=400
  }
  else if (id==="dillom"){
    artista=350
  }
  else if (id==="marilina"){
    artista=200
  }
  else if(id==="mugre"){
     artista=150
  }
  else{
     artista=0;
  }
   precioND= artista*cantidad
  
  if (codigo==="TIC10"){
    return precioND * (9/10);
  }
  else if (codigo==="TIC20"){
    return precioND * (4/5);
  }
  else if (codigo="DARIO"){
    return precioND * (1/2);
  }
  else{
    return precioND;
  }

  
}

cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();
