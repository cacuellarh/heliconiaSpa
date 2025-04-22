import { Component } from '@angular/core';
import { HeaderSizeWrapperComponent } from '../layaout/components/header-size-wrapper/header-size-wrapper.component';
import { ClothesCardComponent } from './components/clothes-card/clothes-card.component';
import { ClothesType } from './types/clothes-type';
import { CommonModule } from '@angular/common';
import {
  ElementActiveDirective,
  ElementActiveService,
} from '@c-code/c-code-fw';

@Component({
  selector: 'app-boutique',
  imports: [
    HeaderSizeWrapperComponent,
    ClothesCardComponent,
    CommonModule,
    ElementActiveDirective,
  ],
  templateUrl: './boutique.component.html',
  styleUrl: './boutique.component.css',
  providers: [ElementActiveService],
})
export class BoutiqueComponent {
  public clothes!: Map<ClothesType, string[]>;
  public clothesChoosed!: Map<ClothesType, string[]>;
  public clothesType: ClothesType = ClothesType.A_PASO_FINO;
  public ClothesType = ClothesType;
  ngOnInit() {
    this.choosedClothes(this.clothesType);
  }

  constructor() {
    this.clothes = new Map<ClothesType, string[]>([
      [ClothesType.A_PASO_FINO, ['a_paso_fino/1.webp', 'a_paso_fino/5.webp', 'a_paso_fino/6.webp']],
      [ClothesType.ENCANTO_REAL, ['encanto_real/1.webp']],
      [ClothesType.ESCENCIA_CASUAL, ['escencia_casual/1.webp','escencia_casual/2.webp','escencia_casual/3.webp']],
      [ClothesType.FUEGO_TROPICAL, ['fuego_tropical/1.webp','fuego_tropical/2.webp']],
    ]);
  }

  choosedClothes(clothes: ClothesType) {
    const filteredEntries = Array.from(this.clothes).filter(
      ([key, value]) => key === clothes
    );
    this.clothesChoosed = new Map(filteredEntries);
  }

  changeClothesType(clothes: ClothesType) {
    this.clothesType = clothes;
    this.choosedClothes(this.clothesType);
  }
}
