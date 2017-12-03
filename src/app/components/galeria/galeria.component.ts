import {Component, OnInit} from '@angular/core';

import {GaleriaService} from '../../services/galeria.service';

@Component({
  selector: 'dv-galeria',
  templateUrl: './galeria.component.html'
})
export class GaleriaComponent {

  galeria: any[] = [];

  constructor(private _galeriaService: GaleriaService) { }

  ngOnInit() {
    this._galeriaService.obterUltimasPostagens().subscribe(
      galeria => this.galeria = galeria,
      error => console.log(error)
    );
  }

}
