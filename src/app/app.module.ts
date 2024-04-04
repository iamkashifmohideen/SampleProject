import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { SqrtPipePipe } from './pipe/sqrt-pipe.pipe';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginWindowComponent,
    SqrtPipePipe,
    DummyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
