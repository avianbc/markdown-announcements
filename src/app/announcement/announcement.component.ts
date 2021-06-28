import { Component, OnInit } from '@angular/core';
import { Announcement } from './announcement.model';
import { AnnouncementService } from './announcement.service';

@Component({
  selector: 'demo-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  itemsPerPage: number = 10;

  currentPage: number = 1;

  announcements: Announcement[] = [];

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.announcementService.getAnnouncements()
      .then(announcements => this.announcements = announcements);
  }
}
