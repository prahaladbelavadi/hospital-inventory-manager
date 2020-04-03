import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { PortalComponent } from './pages/portal/portal.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [AppComponent, LandingComponent, LoginComponent, SettingsComponent, InventoryComponent, PortalComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
