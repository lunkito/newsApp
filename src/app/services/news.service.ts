import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private NEWS_URL = 'https://newsapi.org/v2';
  private AK = 'db19cf19a2cf4944b2498988489ce8d0';

  constructor(private http: HttpClient) { }

  getSources() {
    return this.http.get(`${this.NEWS_URL}/sources?language=es&apiKey=${this.AK}`);
  }

  getTopArticles() {
    return this.http.get(`${this.NEWS_URL}/top-headlines?country=us&apiKey=${this.AK}`);
  }

  getArticleBySource(source: string) {
    return this.http.get(`${this.NEWS_URL}/top-headlines?sources=${source}&apiKey=${this.AK}`);
  }
}
