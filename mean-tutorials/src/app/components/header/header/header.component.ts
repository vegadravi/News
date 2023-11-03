import { Component, OnInit } from '@angular/core';
import { StandaloneModule } from 'src/app/module/standalone/standalone.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
