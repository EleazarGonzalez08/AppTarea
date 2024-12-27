import { Component, input, Input } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AgregarPage } from '../agregar/agregar.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public titulo!:string;
 
  constructor(private alertCtrl:AlertController,private navCtrl:NavController,public _router: Router) {}

  async agregarLista(){
    const alert = await this.alertCtrl.create({
      mode:'ios',
      header: 'Nueva Lista',
      message: 'Nombre de la nueva lista que desea',
      inputs:[
        {
          name:'titulo',
          placeholder:'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text:'Cancelar',
          handler:data => {
            console.log('cancelado');
            
          }
        },
        {
          text:'Agregar',
          handler:data => {
            if (data.titulo.length == 0) {
              return;
            }
            
           this.titulo = data.titulo
            this.navCtrl.navigateForward('agregar');
            
          }
        }
      ],
    });

    await alert.present();
  }


  cambiarEstado(){
    
  }


}
