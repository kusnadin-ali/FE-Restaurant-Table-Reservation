import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Store } from '@ngrx/store';
import { selectLoadingData } from './general/store/loading/loading.selector';
import { map, Observable, of } from 'rxjs';
import { LoadingState } from './general/store/loading/loading.state';
import { LoadingService } from './general/utils/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast, CommonModule, ProgressSpinnerModule],
  providers: [CookieService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'restaurant-table-reservation';
  isLoading$: boolean = false

  constructor(private store: Store<{ loading: LoadingState }>) {
    this.store.select((state) => state?.loading?.isLoading).subscribe({
      next: (isLoading) => {
        // this.isLoading$ = of(isLoading);
        console.log('isLoading', isLoading);
        this.isLoading$ = isLoading;
      },
    })
    // this.isLoading$ = this.store.select(selectLoadingData);
    // this.isLoading$.subscribe((isLoading) => console.log('isLoading', isLoading));
  }
}
