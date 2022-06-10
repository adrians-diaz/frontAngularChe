import { Component, OnInit } from '@angular/core';
import { cartasInterface } from 'src/app/interfaces/objetos';
import { MensajeServicioService } from 'src/app/service/mensaje-servicio.service';

@Component({
  selector: 'app-body-gallery',
  templateUrl: './body-gallery.component.html',
  styleUrls: ['./body-gallery.component.scss']
})
export class BodyGalleryComponent implements OnInit {
  public cartasListRubia: cartasInterface[] = [];
  public cartasListCoctel: cartasInterface[] = [];
  public cartasListSinAlcohol: cartasInterface[] = [];
  public fondoProductos1$$: any = document.querySelectorAll('.cerveza');
  public fondoProductos2$$: any = document.querySelectorAll('.cocktel');
  public fondoProductos3$$: any = document.querySelectorAll('.sinAlcohol');
  public visibleCerveza: boolean = true;
  public visibleCocktel: boolean = false;
  public visiblesinAlcohol: boolean = false;
  constructor(private MensajeServicioService: MensajeServicioService) {
  }

  ngOnInit(): void {
    this.MensajeServicioService.getCartas().subscribe((data: any) => {
      /* const cartasAPI: cartasInterface[] = data.results.map((character: any) => ({ name: character.name, status: character.status, image: character.image })); */

      const cartasAPI: cartasInterface[] = data.Cartas
      for (const cartaUnica of cartasAPI) {
        switch (cartaUnica.tipo){
          case 'rubia':
            this.cartasListRubia.push(cartaUnica);  
            break;
          case 'Coctel':
            this.cartasListCoctel.push(cartaUnica);  
            break;
          case 'sin alcohol':
            this.cartasListSinAlcohol.push(cartaUnica);  
            break;

        }

      }
      
    })
  }
  public onClick = (tipo:string) :void => {
    switch (tipo) {
      case 'cerveza':
        this.visibleCerveza = true;
        this.visibleCocktel = false;
        this.visiblesinAlcohol = false;
        break;
      case 'cocktel':
        /* console.log(this.fondoProductos2$$.className);
        this.fondoProductos1$$.style.display = 'none';
        this.fondoProductos2$$.style.display = 'flex';
        this.fondoProductos3$$.style.display = 'none'; */
        this.visibleCerveza = false;
        this.visibleCocktel = true;
        this.visiblesinAlcohol = false;

      break;
      case 'sinAlcohol':
        this.visibleCerveza = false;
        this.visibleCocktel = false;
        this.visiblesinAlcohol = true;
      break;
    }
  }

}
