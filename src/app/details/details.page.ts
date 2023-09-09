import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/user.services';
import { tap } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class DetailsPage {
  id = inject(ActivatedRoute).snapshot.params['id'];
  user$ = inject(UsersService)
    .getById(this.id)
    .pipe(tap((v) => console.log(this.id)));
}
