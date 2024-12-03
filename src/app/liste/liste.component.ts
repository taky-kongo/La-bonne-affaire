import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";

interface Article {
  idArticle: number;
  titreArticle: string;
  prixArticle: number;
  description: string;
  urlImg: string;
  textAltImg: string;
  dispo: boolean;
}

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit{

  message: string = "";
  liste: Article[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.liste = this.dataService.listeArticles
  }

  onAffiche(arg: string): string {
    return this.message = "Merci d'avoir voté pour l'article : " + arg;
  }
}
