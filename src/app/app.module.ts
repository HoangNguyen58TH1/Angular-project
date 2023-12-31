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
import { CountdownLocalVarParentComponent } from './components/component-interaction/countdown-parent-lv.component';
import { CountdownTimerComponent } from './components/component-interaction/countdown-timer.component';
import { CountdownViewChildParentComponent } from './components/component-interaction/countdown-parent-vc.component';
import { MissionControlComponent } from './components/component-interaction/missioncontrol.component';
import { AstronautComponent } from './components/component-interaction/astronaut.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemOutputComponent } from './components/item-output/item-output.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { ClassAndStyleBindingComponent } from './components/class-and-style-binding/class-and-style-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { SizerComponent } from './components/two-way-binding/sizer.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ExponentialStrengthPipe } from './components/pipe/exponential-strength.pipe';
import { TemplateVariableComponent } from './components/template-variable/template-variable.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './attribute-directive/highlight.directive';
import { HighlightComponent } from './attribute-directive/highlight.component';
import { UnlessDirective } from './structural-directive/unless.directive';
import { UnlessComponent } from './structural-directive/unless.component';

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
    VoteTakerComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    CountdownViewChildParentComponent,
    MissionControlComponent,
    AstronautComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    InputOutputComponent,
    ContentProjectionComponent,
    ClassAndStyleBindingComponent,
    TwoWayBindingComponent,
    PipeComponent,
    TemplateVariableComponent,
    HighlightDirective,
    HighlightComponent,
    UnlessDirective,
    UnlessComponent
  ],
  imports: [
    BrowserModule,
    SizerComponent,
    ExponentialStrengthPipe,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
