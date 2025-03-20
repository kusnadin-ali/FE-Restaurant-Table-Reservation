import { Component, OnInit } from '@angular/core';
import { MainLayoutComponent } from '../../../layouts/main-layout/main-layout.component';
import { SharedModule } from '../../../shared/shared.module';
import { UsersDto } from './dto/users.dto';
import { ListUserService } from './list-user.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { LoadingService } from '../../../general/utils/loading.service';

@Component({
  selector: 'app-list-user',
  imports: [MainLayoutComponent, SharedModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css',
})
export class ListUserComponent implements OnInit{
  userData!: UsersDto[];

  totalData: number = 15;
  page: number = 0;
  size: number = 5;
  totalPage: number = Math.ceil(this.totalData / this.size);
  lastSegment: string = '';

  constructor(private listUserService: ListUserService, private activatedRoute: ActivatedRoute, private loadingService: LoadingService) {

    this.activatedRoute.url.subscribe((segments: UrlSegment[]) => {
      // Ambil segment terakhir
      this.lastSegment = segments[segments.length - 1]?.path || '';
      console.log('Last Segment:', this.lastSegment);
    });
  }

  ngOnInit(): void {
    this.retrieveUserData(this.page, this.size);
  }

  handlePageChange(event: any) {
    this.page = event.first / event.rows;
    this.size = event.rows;
    this.retrieveUserData(this.page, this.size);
  }

  retrieveUserData(page: number, size: number) {
    this.loadingService.loadingOn();
    if (this.lastSegment === 'restaurant') {
      this.getDataUserRestaurant(page, size);
    } else if (this.lastSegment === 'customer') {
      this.getDataUserCustomer(page, size);
    }
  }

  getDataUserRestaurant(page: number, size: number) {
    this.listUserService.retrieveUsersRestaurant(page, size).subscribe({
      next: (res) => {
        if (res.code === '00') {
          this.userData = res.result.data;
          this.totalData = res.result.totalData;
          this.totalPage = res.result.totalPage
        }
        this.loadingService.loadingOff();
      },
      error: (err) => {
        console.log(err);
        this.loadingService.loadingOff();
      }
    })
  }

  getDataUserCustomer(page: number, size: number) {
    this.listUserService.retrieveUsersCustomer(page, size).subscribe({
      next: (res) => {
        if (res.code === '00') {
          this.userData = res.result.data;
          this.totalData = res.result.totalData;
          this.totalPage = res.result.totalPage
        }
        this.loadingService.loadingOff();
      },
      error: (err) => {
        console.log(err);
        this.loadingService.loadingOff();
      }
    })
  }
}
