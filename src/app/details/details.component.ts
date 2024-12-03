import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  id: number = 0;
  titre: string = "";
  prix: number = 0;
  description: string = "";
  urlImg: string = "";

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.id = id;
    const article = this.dataService.getArticle(id);
    this.titre = article?.titreArticle || "";
    this.prix = article?.prixArticle || 0;
    this.description = article?.description || "";
    this.urlImg = article?.urlImg || "";
  }

}
