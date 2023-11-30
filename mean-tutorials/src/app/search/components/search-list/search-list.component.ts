import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/interface/search.interface';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Input() videos: Video[];

  constructor() { }

  ngOnInit(): void {
  }

}
