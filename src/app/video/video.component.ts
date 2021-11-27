import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() title: any;
  @Input() desc: any;
  @Input() url: any;
  @Output() editvideo = new EventEmitter();


  onclick(){
    this.editvideo.emit('this.title');
  }

}
