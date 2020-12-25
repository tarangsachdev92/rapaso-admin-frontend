import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [NavbarComponent],
  providers: [
  ],
  exports: [NavbarComponent],
  entryComponents: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded. Import only in AppModule");
    }
  }
}
