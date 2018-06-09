import { Component , ViewContainerRef } from '@angular/core';
import { MessagingService } from "./messaging.service";
//Import ToastsManager
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  template: '<button class="btn btn-default" (click)="showSuccess()">Toastr Tester</button>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message;
  constructor(private msgService: MessagingService,private toastr: ToastrService,private httpClient:HttpClient) {
    
  }
  savenotificationToken(){
    
  }
  postProfile(){
    this.httpClient.post(`http://localhost:3000/api/v1/notification/notification_tokens`,
    {
      token:'mark',
      user_id: 41
    })
    .subscribe(
      (data:any) => {
        console.log(data);
      }
    )
}
  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }
  
 
  ngOnInit() {
    this.msgService.getPermission()
    this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage
  }
}
