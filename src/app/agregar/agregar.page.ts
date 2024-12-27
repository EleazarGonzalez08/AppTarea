import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(public _activeroute: ActivatedRoute) { 
    this._activeroute.snapshot.paramMap.get('titulo');
    console.log(this._activeroute.snapshot.paramMap.get('titulo'));
   }

  ngOnInit() {
    
    console.log(this._activeroute.snapshot.paramMap.get('titulo'));

  }

  agregarTarea(){
    console.log('Tareas');
    
  }

}
