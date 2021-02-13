import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../por-pais/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino :string = '';
  hayError:boolean = false;
  capitals  :Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe(capitals => {
        console.log(capitals)
        this.capitals = capitals;
      },(err) => {
        this.hayError = true;
        this.capitals = [];
      })
  }

  sugerencias(termino:string){
    this.hayError = false;
  }

}
