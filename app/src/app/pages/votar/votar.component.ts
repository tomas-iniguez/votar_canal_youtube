import { Component, OnInit } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';
import { Video } from '../../models/youtube.models';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css']
})
export class VotarComponent implements OnInit {

  videos: Video[] = [];
  channelTitle = '';
  loading = true;

  constructor(private _youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.cargarVideos();
  }
  cargarVideos() {
   this._youtubeService.getVideos().subscribe( resp => {
     this.videos = resp;
     console.log(this.videos);
     for (let index of this.videos) {
          this.channelTitle = index.channelTitle;
         break;
     }
     this.loading = false;
   });
  }
  verVideo(video: Video) {

    Swal.fire({
      html: `
            <h4>${ video.title }</h4>
            <hr>
            <iframe width="100%" height="315" 
               src="https://www.youtube.com/embed/${ video.resourceId.videoId }" 
               frameborder="0" 
               allow="accelerometer;
                autoplay; encrypted-media; 
                gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>`
      });
  }
}
