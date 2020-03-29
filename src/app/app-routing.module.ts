import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { PortalComponent } from './pages/portal/portal.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'portal', component: PortalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
