import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-request',
  imports: [CommonModule],
  templateUrl: './leave-request.component.html',
  styleUrl: './leave-request.component.css'
})
export class LeaveRequestComponent {
leaveStatus: any;
img: any;
filter: any;
rejectLeave() {
throw new Error('Method not implemented.');
}
acceptLeave() {
throw new Error('Method not implemented.');
}
logout() {
throw new Error('Method not implemented.');
}
adminName: any;
studentName: any;
leaveReason: any;
leaveFrom: any;
leaveDays: any;
appliedOn: any;

}
