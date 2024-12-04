import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, interval, map, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'labonneaffaire';

  secondes!: string;
  compteurSubscription!: Subscription;

  constructor() {
  }
  ngOnInit(): void {
    const compteur = interval(1000).pipe(
      filter(value => value % 2 === 0),
      map(value => value % 2 === 0 ?
        `${value} est pair` :
        `${value} est impair`
      )
    );

    this.compteurSubscription = compteur.subscribe({
      next: (value) =>
        this.secondes = value,
      error: (e) => console.error('Erreur : ', e),
      complete: () => console.info('Observable complété')
    });
  }

  ngOnDestroy(): void {
    this.compteurSubscription.unsubscribe();
  }
}
