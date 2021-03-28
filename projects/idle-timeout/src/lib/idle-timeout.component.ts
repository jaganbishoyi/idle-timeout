import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-IdleTimeout',
  template: `
    <p>
      idle-timeout works!
    </p>
  `,
  styles: []
})
export class IdleTimeoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
