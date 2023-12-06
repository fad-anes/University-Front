import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../Service/reservation';
import { Reservation } from '../Models/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class Entity2ListComponent implements OnInit {
  reservations!: Reservation[];

  constructor(private reservationService: ReservationService) {}

  ngOnInit() {
    this.reservationService.getAll().subscribe(data => {
      this.reservations = data;
    });
  }

}
