import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { StandaloneModule } from 'src/app/module/standalone/standalone.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[StandaloneModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsData:any;
  worldNews: any;
  searchValue:any;
  
  constructor(private newsService: ApiService,private standaloneModule: StandaloneModule) { }
  keywordStatic = 'today-news';
  ngOnInit() {
    this.getSearchNews();
  }
  getSearchNews(keywords?:any) {
     if(keywords !== undefined){
      console.log('R4x keywords', keywords);
      this.newsService.getSearchNews(keywords).subscribe((response) => {
        // Handle the response data here
        this.worldNews = response.data;
        console.log(this.worldNews);
      }); 
     }else{
      console.log('R4x keywords static', this.keywordStatic);
      this.newsService.getSearchNews(this.keywordStatic).subscribe((response) => {
        // Handle the response data here
        this.worldNews = response.data;
        console.log(this.worldNews);
      });
     }
  }
}
