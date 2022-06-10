import { Component, OnInit } from '@angular/core';
import { mesasInterface } from 'src/app/interfaces/objetos';
import { MensajeServicioService } from 'src/app/service/mensaje-servicio.service';

@Component({
  selector: 'app-body-mesas',
  templateUrl: './body-mesas.component.html',
  styleUrls: ['./body-mesas.component.scss']
})
export class BodyMesasComponent implements OnInit {

  public mesasList: mesasInterface[] = []; 
  public arrayTipos: string[]; 

  constructor(private MensajeServicioService: MensajeServicioService) {

    this.arrayTipos = ["salon", "terraza cubierta", "terraza exterior"];

   }

  ngOnInit(): void {
    this.MensajeServicioService.getMesas().subscribe((data: any) => {
      /* const mesasAPI: mesasInterface[] = data.results.map((character: any) => ({ name: character.name, status: character.status, image: character.image })); */

      const mesasAPI: mesasInterface[] = data.Mesas
      this.mesasList = mesasAPI
      
    })
  }

}
