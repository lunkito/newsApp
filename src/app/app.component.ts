import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public sources$: Observable<any>;
  public articles$: Observable<any>;

  public mArticles: Array<any>;
  public mSources: Array<any>;

  constructor(private news: NewsService) { }

  ngOnInit(): void {
    this.sources$ = this.news.getSources();
    this.articles$ = this.news.getTopArticles();

    this.articles$.subscribe(response => { 
      console.log(response);
      this.mArticles = response['articles'];
    });
    this.sources$.subscribe(response => { 
      console.log(response);
      this.mSources = response['sources'];
    });
  }

  searchArticles(source) {
    this.news.getArticleBySource(source).subscribe(response => console.log(response));
  }
}
