import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppsComponent } from "./apps/apps.component";
import { AppsRoutingModule } from "./apps-routing.module";

@NgModule({
  declarations: [AppsComponent],
  imports: [CommonModule, AppsRoutingModule],
  exports: [AppsRoutingModule]
})
export class AppsModule {}
