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
import { HeroParentComponent } from './components/component-interaction/hero-parent.component';
import { HeroChildComponent } from './components/component-interaction/hero-child.component';
import { NameParentComponent } from './components/component-interaction/name-parent.component';
import { NameChildComponent } from './components/component-interaction/name-child.component';
import { VersionParentComponent } from './components/component-interaction/version-parent.component';
import { VersionChildComponent } from './components/component-interaction/version-child.component';
import { VoterComponent } from './components/component-interaction/voter.component';
import { VoteTakerComponent } from './components/component-interaction/votetaker.component';

@NgModule({
  declarations: [
    AppComponent,
    HoangToniComponent,
    ParentComponent,
    ChildComponent,
    EncapsulationComponent,
    NoneEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VoterComponent,
    VoteTakerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
