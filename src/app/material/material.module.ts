import { NgModule } from "@angular/core";
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const materialImports = [
    MatMenuModule,
    MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    ...materialImports,
  ],
  exports: [
    ...materialImports,
  ],
})
export class MaterialModule {}
