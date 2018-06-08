import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VariableComponent } from '../../variable.compoent';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  name:String;

  constructor(private _var : VariableComponent) {}

  ngOnInit() {
    this.name = this._var.getName();
    console.log(this.name)
  }

}
