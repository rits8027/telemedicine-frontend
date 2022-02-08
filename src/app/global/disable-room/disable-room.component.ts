import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-disable-room',
  templateUrl: './disable-room.component.html',
  styleUrls: ['./disable-room.component.css'],
})
export class DisableRoomComponent implements OnInit {
  appointmentId: string;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private router: Router
  ) {
    this.route.params.subscribe(
      (params) => (this.appointmentId = params.appointmentId)
    );
  }

  ngOnInit(): void {
    this.homeService.setAvailabilityStatus(false).subscribe((_) => {
      this.homeService
        .disableRoom(this.appointmentId)
        .subscribe((_) =>
          this.router.navigate([`/meet/${this.appointmentId}/prescription`])
        );
    });
  }
}
