import { Component } from '@angular/core';
import { SpinnerOverlayService } from '@services/spinner-overlay/spinner-overlay.service';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css'],
})
export class LoadingBlockComponent {
  loading$ = this.loader.loading$;
  constructor(public loader: SpinnerOverlayService) {}
}
