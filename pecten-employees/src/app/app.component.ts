import { Platform } from '@angular/cdk/platform';
import { Component, ElementRef} from '@angular/core';
import { Fancybox } from '@fancyapps/ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peccu';

  constructor(private elRef: ElementRef,
    public platform: Platform) {}

  ngOnInit() {
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
      // Custom options
    });
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }
}
