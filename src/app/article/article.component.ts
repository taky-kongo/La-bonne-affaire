import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  totalNbrLike: number = 0;
  comment: string = "Ceci est un commentaire";
  
  // Permet d'envoyer une information de l'enfant au parent
  @Output() info = new EventEmitter<string>();

  /**
   * Permet de recevoir des données depuis le composant parent
   */
  @Input() titreArticle: string = "";
  @Input() prixArticle: number = 0;
  @Input() textAltImg: string = "";
  @Input() urlImg: string = "";
  @Input() description: string = "";
  @Input() dispo: boolean = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  onLike() {
    this.totalNbrLike++;
    this.info.emit(this.titreArticle)
  }
}
