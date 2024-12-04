import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";

@Component({
  selector: 'app-ajouter-reactive-form',
  templateUrl: './ajouter-reactive-form.component.html',
  styleUrls: ['./ajouter-reactive-form.component.css']
})
export class AjouterReactiveFormComponent implements OnInit {

  titleToAdd: FormControl = new FormControl('');
  priceToAdd: FormControl = new FormControl('');

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log('newTitle: ', newTitle);
    console.log('newPrice: ', newPrice);
  }
}
