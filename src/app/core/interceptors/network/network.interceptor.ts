import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';

import { SpinnerOverlayService } from '@services/spinner-overlay/spinner-overlay.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor(private spinner: SpinnerOverlayService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinner.show();
    return next.handle(request).pipe(
      delay(1000),
      finalize(() => {
        this.spinner.hide();
      })
    );
  }
}
