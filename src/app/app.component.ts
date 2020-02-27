import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public todo;
  public inputData;
  public show: boolean;

  constructor(private http: HttpClient) {
    this.todo = [];
    this.show = false;
  }
  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }

  add() {
    this.todo.push(this.inputData);
  }

  delete(index) {
    this.todo.splice(index, 1);
  }
}
