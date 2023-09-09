import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UsersService } from '../services/user.services';
import { AsyncPipe, NgFor } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgFor, AsyncPipe, RouterLink],
})
export class HomePage {
  users$ = new BehaviorSubject([] as any);
  userSrv = inject(UsersService);
  constructor() {
    this.userSrv.getUsers().subscribe({
      next: (users) => {
        this.users$.next(users);
      },
    });
  }
  sortByAZ() {
    this.users$.next(
      this.users$.value.sort((a: any, b: any) => a.name.localeCompare(b.name))
    );
  }
}
