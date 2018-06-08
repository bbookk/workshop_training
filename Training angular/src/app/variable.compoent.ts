import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
})

export class VariableComponent implements OnInit {

  name : String;

  constructor() { }

  ngOnInit() {
  }

  getName(){
    let a = this.name;
    return a;
  }

}
