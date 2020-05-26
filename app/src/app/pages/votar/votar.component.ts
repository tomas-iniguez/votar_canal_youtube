import { Component, OnInit } from '@angular/core';

import { YoutubeService } from '../../services/youtube.service';
import { ApiFireBaseService } from '../../services/api-fire-base.service';
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
  error   = false;
  menssError = 'Por favor intentelo nuevamente';

  constructor(private _youtubeService: YoutubeService, private _apiFireBaseService: ApiFireBaseService) { }

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
   }, (respEroor => {
       this.loading    = false;
       this.error      = true;
     })
   );
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
  votarVideo( video: Video, like: number ) {
    Swal.fire({
      title: 'Espere',
      text: 'mandando su información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    const voto = {
        videoId: video.resourceId.videoId,
        title:   video.title,
        like:    0,
        dislike: 1
    };
    if ( like > 0 ) {
        voto.like    = 1;
        voto.dislike = 0;
    }

    this._apiFireBaseService.getVotar(voto).subscribe(  (resp: any) => {
      if ( resp.estado ) {
        Swal.fire({
          title: 'Exito',
          text: resp.mensaje,
          icon: 'success',
          showConfirmButton: true,
        });
      }
    }, respError => {

      Swal.fire({
        title: 'Eroor',
        text: respError.mensaje,
        icon: 'error',
        showConfirmButton: true,
      });

    }
     );
  }
}
