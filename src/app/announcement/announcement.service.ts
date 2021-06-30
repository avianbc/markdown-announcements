import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announcement } from './announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http: HttpClient) { }

  getAnnouncements() {
      return this.http.get<any>('assets/announcements.json')
          .toPromise()
          .then(wrapper => wrapper.announcements as Announcement[]);
  }
}
