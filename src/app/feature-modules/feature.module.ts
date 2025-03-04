import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as FeatureModules from './index';
@NgModule({
  imports: [
    CommonModule,
    FeatureModules.CustomersModule,
    FeatureModules.UserProfileModule
  ],
})
export class FeatureModule {}
