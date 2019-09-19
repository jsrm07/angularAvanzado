import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 

 /*   
    // 1ª Forma
      let promesa = new Promise((resolve, reject) =>{
      
      let contador = 0;

      let intervalo = setInterval( ()=>{
        contador += 1;
        console.log('condator: '+contador);
        if (contador === 3){
          resolve('contador finalizado');
          //reject('Error provocado');
          clearInterval(intervalo);
        }
      }, 1000)
    });

    promesa.then(
      mensaje => console.log('FIN !!!', mensaje)
    ).catch(
      error => console.log('Error: ', error));
 */

    //2ª Forma con un return

    this.contarTres().then(
      mensaje => console.log('FIN !!!', mensaje)
    ).catch(
      error => console.log('Error: ', error));


}

  ngOnInit() {
  }

  contarTres(): Promise<boolean>{
    return new Promise((resolve, reject) =>{
      
      let contador = 0;

      let intervalo = setInterval( ()=>{
        contador += 1;
        console.log('condator: '+contador);
        if (contador === 3){
          resolve(true);
          //reject(false);
          clearInterval(intervalo);
        }
      }, 1000)
    });
  }

}
