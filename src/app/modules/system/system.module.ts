import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SystemComponent } from "./system/system.component";
import { SystemRoutingModule } from "./system-routing.module";

@NgModule({
  declarations: [SystemComponent],
  imports: [CommonModule, SystemRoutingModule],
  exports: [SystemRoutingModule]
})
export class SystemModule {}
