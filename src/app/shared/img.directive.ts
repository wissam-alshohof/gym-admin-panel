import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img, img[dynamic]'
})
export class ImgDirective {

  @Input('src') src!: string;

  srcImageNotFound = "/assets/placeHolder.jpg";
  srcLoading = "/assets/loading.jpg";


  @HostListener('error')
  onError() {
    this.eleRef.nativeElement.src = this.srcImageNotFound;
  }
  @HostListener('load')
  onLoad() {
    this.eleRef.nativeElement.style.height = 'inherit';
    this.eleRef.nativeElement.style.width = 'initial';
  }

  constructor(private eleRef: ElementRef<HTMLImageElement>) {
  }

}
