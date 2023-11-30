import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, pluck, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { OperatorFunction, fromEvent } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements AfterViewInit {

  @ViewChild('input') inputElement: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngAfterViewInit() {
    const inputElement = this.inputElement.nativeElement;

    fromEvent<KeyboardEvent>(inputElement, 'keyup').pipe(
      debounceTime(500),
      map((event: KeyboardEvent) => (event.target as HTMLInputElement).value),
      distinctUntilChanged(),
      filter((value: string) => value.length > 3)
    ).subscribe(value => {
      this.search.emit(value);
    });
  }
}

