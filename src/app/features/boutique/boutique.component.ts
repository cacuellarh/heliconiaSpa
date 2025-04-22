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
      [ClothesType.A_PASO_FINO, ['a_paso_fino/1.jpg', 'a_paso_fino/5.jpg', 'a_paso_fino/6.jpg']],
      [ClothesType.ENCANTO_REAL, ['encanto_real/1.png']],
      [ClothesType.ESCENCIA_CASUAL, ['escencia_casual/1.png','escencia_casual/2.png','escencia_casual/3.png']],
      [ClothesType.FUEGO_TROPICAL, ['fuego_tropical/1.png','fuego_tropical/2.png']],
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
