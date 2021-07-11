import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardNotLoggedInGuard } from './services/auth-guard-not-logged-in.guard';
import { AuthGuardLoggedIn } from './services/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-up',
    pathMatch: 'full'
  }, {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule),
    canActivate: [AuthGuardNotLoggedInGuard]
  }, {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    // canActivate: [AuthGuardNotLoggedInGuard]
  }, {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule),
    canActivate: [AuthGuardLoggedIn]
  }, {
    path: 'sent',
    loadChildren: () => import('./sent/sent.module').then(m => m.SentModule),
    canActivate: [AuthGuardLoggedIn]
  }, {
    path: 'viewMail/:id',
    loadChildren: () => import('./view-mail/view-mail.module').then(m => m.ViewMailModule),
    canActivate: [AuthGuardLoggedIn]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
