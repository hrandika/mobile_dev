import {Component, Input, OnInit} from '@angular/core';
import {Tile} from "../../../models/Tile";

@Component({
  selector: 'responsive-inc-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() tileData: Tile | undefined

  constructor() {}

  ngOnInit(): void {}
}
