import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink, RouterModule } from '@angular/router';
import { Menu } from 'primeng/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    RouterModule,
    RouterLink,
    Menu
  ],
  exports: [
    ButtonModule,
    CardModule,
    CommonModule,
    ReactiveFormsModule,
    PasswordModule,
    InputTextModule,
    RouterModule,
    RouterLink,
    Menu
  ]
})
export class SharedModule { }
