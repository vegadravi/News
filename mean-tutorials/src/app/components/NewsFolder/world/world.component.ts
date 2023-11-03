import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { StandaloneModule } from 'src/app/module/standalone/standalone.module';

@Component({
  selector: 'app-world',
  standalone: true,
  imports:[StandaloneModule],
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  newsData:any;
  worldNews: any;
  constructor(private newsService: ApiService) { }

  ngOnInit() {
    this.getMediaStackNews();
  }
  getMediaStackNews() {
    const categorie = 'general';
    
      this.newsService.getNews(categorie).subscribe((response) => {
      // Handle the response data here
      this.worldNews = response.data;
      console.log(this.worldNews);
    });
  }
}
