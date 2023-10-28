import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HoangToniComponent } from './components/hoang-toni/hoang-toni.component';
import { ParentComponent } from './components/life-cycle/parent/parent.component';
import { ChildComponent } from './components/life-cycle/child/child.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation-root/encapsulation.component';
import { NoneEncapsulationComponent } from './components/encapsulation/none-encapsulation/none-encapsulation.component';
import { EmulatedEncapsulationComponent } from './components/encapsulation/emulated-encapsulation/emulated-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './components/encapsulation/shadow-dom-encapsulation/shadow-dom-encapsulation.component';

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
