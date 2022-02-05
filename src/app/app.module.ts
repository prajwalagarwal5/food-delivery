import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { RouteGuard } from './shared/route-guard/route-guard';
import { RouteGuardForUser } from './shared/route-guard-for-user/route-guard-for-user';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [RouteGuard,RouteGuardForUser],
  bootstrap: [AppComponent]
})
export class AppModule { }
