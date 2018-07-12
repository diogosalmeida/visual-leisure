import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsplashService } from './services/unsplash-service/unsplash.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [UnsplashService],
  exports: [UnsplashService]

})
export class SharedModule { }
