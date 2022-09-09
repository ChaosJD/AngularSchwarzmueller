import {Component, Input, NgModule, OnInit} from '@angular/core';
import {Event} from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  //selector: '[app-servers]', // to select elements use []. Now it is an attribute!
  //selector: '.app-servers',  // to address it like a class
  // selecting by ID won't work and pseudo-selectors like hoover and so on. don't work.
   selector: 'app-servers', // PLEASE USE THIS
  //template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  // template(local)or templateUrl(external) must be set with ' or backtickt:` to use javascript template expression over mor lines, NO Array!
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      //this is the function body
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name ist ' + this.serverName;
  }

  onUpdateServerName(event: any) { // before: event: any, New! devilation from Tutorial. Use InputEvent Instead of Event, it is old.
    console.log(event);
    this.serverName = event.target.value;
  }
}
