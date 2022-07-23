import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TileComponent } from './tile/tile.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), MatIconModule],
  exports: [RouterModule, MatToolbarModule],
})
export class HomeRoutingModule {}

@NgModule({
  declarations: [HomeComponent, TileComponent],
  imports: [CommonModule, HomeRoutingModule, MatIconModule, MatCardModule],
})
export class HomeModule {}
