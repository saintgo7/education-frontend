import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service2 {
  private data$ = new BehaviorSubject<any[]>([]);

  getData(): Observable<any[]> {
    return this.data$.asObservable();
  }

  addItem(item: any) {
    const current = this.data$.value;
    this.data$.next([...current, item]);
  }

  removeItem(id: string) {
    const current = this.data$.value;
    this.data$.next(current.filter(item => item.id !== id));
  }
}
