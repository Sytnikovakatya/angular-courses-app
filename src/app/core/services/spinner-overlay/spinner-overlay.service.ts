import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerOverlayService {
  private loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly loading$: Observable<boolean> = this.loading.asObservable();

  show() {
    this.loading.next(true);
  }

  hide() {
    this.loading.next(false);
  }
}
