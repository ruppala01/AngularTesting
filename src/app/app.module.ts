import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { BoxDirective } from './directives/box.directive';
import { AlternatingCasePipe } from './alternating-case.pipe';
import { DataMockingExampleComponent } from './data-mocking-example/data-mocking-example.component';
import { JasmineSpiesExampleComponent } from './jasmine-spies-example/jasmine-spies-example.component';
import { InputsTestingExampleComponent } from './inputs-testing-example/inputs-testing-example.component';
import { AutomaticChangeDetectionTestingExampleComponent } from './automatic-change-detection-testing-example/automatic-change-detection-testing-example.component';
import { AngularTestingCourseExcerciseComponent } from './angular-testing-course-excercise/angular-testing-course-excercise.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    BoxDirective,
    AlternatingCasePipe,
    DataMockingExampleComponent,
    JasmineSpiesExampleComponent,
    InputsTestingExampleComponent,
    AutomaticChangeDetectionTestingExampleComponent,
    AngularTestingCourseExcerciseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
