import { Component, OnInit } from '@angular/core';
import { TodoCoreService } from '../service/todo-core.service';
import * as moment from 'moment';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.sass']
})
export class Comp2Component implements OnInit {
  listOfTodos: any;

  constructor(private todoCoreService: TodoCoreService) { 
    this.listOfTodos = 'nothing yet';
  }

  ngOnInit(): void {
    this.todoCoreService.getAllTodos().subscribe(
      //Use the ES6 array sort along with moment to order the todo tasks from latest to earliest
      (result: Array<any>) => {
          result.sort((a: any, b: any) => {
              if (moment(a.timeStamp).isAfter(b.timeStamp)) {
                  return -1;
              } else {
                  return 1;
              }

          })
          this.listOfTodos = result;
          console.log(result);
      },
      (error) => {
          console.log(error);
      }
  );;
  }



}
