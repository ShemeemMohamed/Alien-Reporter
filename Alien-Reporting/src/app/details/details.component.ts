import { Component, OnInit } from '@angular/core';
import { DatasharingService } from '../datasharing.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // used ng2-dnd library for drag and drop feature.
  items = [];
  listStyle = {
    height: '250px',
    width: '100%',
    dropZoneHeight: '100px'
  };
  hasContactId: boolean;
  contactId: string;
  constructor(private data: DatasharingService, private route: ActivatedRoute) { }

  ngOnInit() {

    // fetching id from  active route
    this.route.params
      .subscribe((params: Params) => this.contactId = params['id']);

    this.hasContactId = this.contactId !== undefined;

    if (this.hasContactId) {
      // do what your want.
    }
    // calling api
    this.data.endPoint = 'http://www.mocky.io/v2/59f7760a2f0000ab1d55864e';
    this.data.getData().subscribe(data => {
      this.items = data;
      console.log(this.items);
    });
  }

}
