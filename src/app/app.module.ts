import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { PortalComponent } from './components/portal/portal.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { CenterInventoryComponent } from './components/center-inventory/center-inventory.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SettingsComponent,
    InventoryComponent,
    PortalComponent,
    HeaderComponent,
    DashboardComponent,
    OverviewComponent,
    CenterInventoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
