import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppMaterialModule } from "../app-material/app-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedDialogComponent } from "./shared-dialog/shared-dialog.component";

@NgModule({
  declarations: [
    SharedDialogComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    SharedDialogComponent
  ],
  exports: [
    SharedDialogComponent
  ],
})
export class SharedModule {}
