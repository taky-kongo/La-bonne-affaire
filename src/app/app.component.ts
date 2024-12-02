import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'labonneaffaire';
  message: string = "";

  constructor() {
  }

  ngOnInit(): void {
    console.log('Ici on a ngOnInit');
  }

  onAffiche(arg: string): string {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }

  liste = [
    {
      titreArticle:"Vélo",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      urlImg: "../assets/images/velo.jpeg",
      textAltImg: "Un vélo",
      dispo: false
    },
    {
      titreArticle: "Tv",
      prixArticle: 230,
      description: "Très bonne résolution",
      urlImg: "../assets/images/tv.jpeg",
      textAltImg: "Une télévision",
      dispo: true
    },
    {
      titreArticle: "Jouet",
      prixArticle: 15,
      description: "Un super vélo tout terrain",
      urlImg: "../assets/images/jouet.jpeg",
      textAltImg: "Un jouet",
      dispo: false
    }
  ]
}
