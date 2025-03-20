import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadingState } from '../store/loading/loading.state';
import { setLoading } from '../store/loading/loading.action';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private store: Store<LoadingState>) { }

  loadingOn() {
    this.store.dispatch(setLoading({isLoading: true}));
  }

  loadingOff() {
    this.store.dispatch(setLoading({isLoading: false}));
  }

}
