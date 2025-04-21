import { Component } from '@angular/core';
import { HeaderSizeWrapperComponent } from "../layaout/components/header-size-wrapper/header-size-wrapper.component";
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galery',
  imports: [HeaderSizeWrapperComponent,LightboxModule, CommonModule],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css',
  standalone: true,
})
export class GaleryComponent {

  public albums: Array<any> = [];

  constructor(private lightbox: Lightbox) {
    // Configuración de las imágenes de la galería
    for (let i = 1; i <= 8; i++) {
      const src = `assets/img/galery/${i}.jpeg`;
      const caption = `Imagen ${i}`;
      const thumb = `assets/img/galery/${i}.jpeg`;
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this.albums.push(album);
    }
  }

  open(index: number): void {
    // Abre la galería en la imagen seleccionada
    this.lightbox.open(this.albums, index);
  }

  close(): void {
    // Cierra la galería
    this.lightbox.close();
  }
}
