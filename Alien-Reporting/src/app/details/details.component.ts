import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../datasharing.service';
import { TouchSequence } from '../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  items = [];
  listStyle = {
    width: '300px', // width of the list defaults to 300,
    height: '250px', // height of the list defaults to 250,
    dropZoneHeight: '50px' // height of the dropzone indicator defaults to 50
  };
  constructor(private data: DatasharingService) { }

  ngOnInit() {
    this.data.endPoint = 'http://www.mocky.io/v2/59f7760a2f0000ab1d55864e';
    this.data.getData().subscribe(data => {
      this.items = data;
      console.log(this.items);
    });
  }

}
