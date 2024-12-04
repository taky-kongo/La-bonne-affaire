import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  titleToAdd: string = ''
  priceToAdd: string = ''

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newTitle: string = this.titleToAdd;
    const newPrice: string = this.priceToAdd;
    console.log('newTitle: ', newTitle);
    console.log('newPrice: ', newPrice);
  }
}
