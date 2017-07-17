import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [],
  bootstrap: []
})
export class AngularModuleStarter {
  static add(x: number, y: number): number {
    return x + y;
  }
}
