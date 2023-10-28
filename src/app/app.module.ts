import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoangToniComponent } from './hoang-toni/hoang-toni.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { NoneEncapsulationComponent } from './components/none-encapsulation/none-encapsulation.component';
import { EmulatedEncapsulationComponent } from './components/emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './components/shadow-dom-encapsulation/shadow-dom-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    HoangToniComponent,
    ParentComponent,
    ChildComponent,
    EncapsulationComponent,
    NoneEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
