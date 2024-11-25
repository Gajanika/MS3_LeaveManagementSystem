import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { LeavemanagementComponent } from './leavemanagement/leavemanagement.component';

export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'usermanagement', component:UsermanagementComponent },
          { path: 'leavemanagement', component:LeavemanagementComponent},
           { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
      },
    //   { path: '**', redirectTo: '' } // Redirect unknown routes to home

];
