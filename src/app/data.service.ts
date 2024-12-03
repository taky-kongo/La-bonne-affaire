import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeArticles = [
    {
      idArticle: 1,
      titreArticle:"Vélo",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      urlImg: "../assets/images/velo.jpeg",
      textAltImg: "Un vélo",
      dispo: false
    },
    {
      idArticle: 2,
      titreArticle: "Tv",
      prixArticle: 230,
      description: "Très bonne résolution",
      urlImg: "../assets/images/tv.jpeg",
      textAltImg: "Une télévision",
      dispo: true
    },
    {
      idArticle: 3,
      titreArticle: "Jouet",
      prixArticle: 15,
      description: "Un super jouet pour enfant",
      urlImg: "../assets/images/jouet.jpeg",
      textAltImg: "Un jouet",
      dispo: true
    }
  ]

  getArticle(id: number) {
    return this.listeArticles.find( (article) => {
      return article.idArticle == id;
    });
  }
  constructor() { }
}
