import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, debounceTime, pluck, distinctUntilChanged, filter, map, } from 'rxjs';
import { ApiService } from 'src/app/Services/api.service';
import { Video } from 'src/app/interface/search.interface';
import { StandaloneModule } from 'src/app/module/standalone/standalone.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  newsData: any;
  worldNews: any;
  searchValue: any;
  categoryOfHeader: any;
  BusinessNews: any;
  ourNews: any;
  constructor(private newsService: ApiService, private router: Router) { }
  keywordStatic = 'food';
  ngOnInit() {
    this.categoryOfHeader = this.router.url;
    this.getSearchNews();
  }
  getSearchNews(keywords?: any) {
    if (this.categoryOfHeader === '/home') {
      console.log('R4x /home',);
      if (keywords !== undefined) {
        this.newsService.getSearchNews(keywords).subscribe((response) => {
          this.ourNews = response.data;
        });
      } else {
        this.newsService.getSearchNews(this.keywordStatic).subscribe((response) => {
          this.ourNews = response.data;
        });
      }
    }
    if (this.categoryOfHeader === '/world') {
      const categorie = 'general';
      this.newsService.getNews(categorie).subscribe((response) => {
        this.ourNews = response.data;
      });
    }
    if (this.categoryOfHeader === '/business') {
      const categorie = 'business';
      this.newsService.getNews(categorie).subscribe((response) => {
        this.ourNews = response.data;
      });
    }
    if (this.categoryOfHeader === '/tech') {
      const categorie = 'technology';
      this.newsService.getNews(categorie).subscribe((response) => {
        this.ourNews = response.data;
      });
    }
    if (this.categoryOfHeader === '/science') {
      const categorie = 'science';
      this.newsService.getNews(categorie).subscribe((response) => {
        this.ourNews = response.data;
      });
    }
    if (this.categoryOfHeader === '/india') {
      const country = 'in';
      this.newsService.getCountryNews(country).subscribe((response: any) => {
        this.ourNews = response.data;
      });
    }
    if (this.categoryOfHeader === '/sport') {
      const categorie = 'sports';
      this.newsService.getNews(categorie).subscribe((response) => {
        this.ourNews = response.data;
      });
    }
    if (this.categoryOfHeader === '/health') {
      const categorie = 'health';
      this.newsService.getNews(categorie).subscribe((response) => {
        this.ourNews = response.data;
      });
    }
    if (this.categoryOfHeader === '/entertainment') {
      const categorie = 'entertainment';
      this.newsService.getNews(categorie).subscribe((response:any) => {
        this.ourNews = response.data;
      });
    }
    if (this.categoryOfHeader === '/finance') {
      this.newsService.getFinancialNews().subscribe((response:any) => {
        this.ourNews = response.data;
      });
    }
  }

  
}
