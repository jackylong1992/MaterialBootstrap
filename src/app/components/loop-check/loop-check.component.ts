import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-check',
  templateUrl: './loop-check.component.html',
  styleUrls: ['./loop-check.component.scss']
})
export class LoopCheckComponent implements OnInit {
  private data:any = []
  constructor() { }

  ngOnInit() {
    this.data = [
      {
        name: "test",
        age: '28',
        nestedData: [
          {
            name: "test1",
            age: '281',
            nestedData: [
              {
                name: "test2",
                age: '282',
                nestedData: [
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                ]
              },
              {
                name: "test2",
                age: '282',
                nestedData: [
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                ]
              }
            ]
          },
          {
            name: "test1",
            age: '281',
            nestedData: [
              {
                name: "test2",
                age: '282',
              },
              {
                name: "test2",
                age: '282',
              }
            ]
          }
        ]
      },
      {
        name: "test",
        age: '28',
        nestedData: [
          {
            name: "test1",
            age: '281',
            nestedData: [
              {
                name: "test2",
                age: '282',
                nestedData: [
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                ]
              },
              {
                name: "test2",
                age: '282',
                nestedData: [
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                ]
              }
            ]
          },
          {
            name: "test1",
            age: '281',
            nestedData: [
              {
                name: "test2",
                age: '282',
              },
              {
                name: "test2",
                age: '282',
              }
            ]
          }
        ]
      },
      {
        name: "test",
        age: '28',
        nestedData: [
          {
            name: "test1",
            age: '281',
            nestedData: [
              {
                name: "test2",
                age: '282',
                nestedData: [
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                ]
              },
              {
                name: "test2",
                age: '282',
                nestedData: [
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                  {
                    name: "test3",
                    age: '283'
                  },
                ]
              }
            ]
          },
          {
            name: "test1",
            age: '281',
            nestedData: [
              {
                name: "test2",
                age: '282',
              },
              {
                name: "test2",
                age: '282',
              }
            ]
          }
        ]
      }
    ]
  }

}
