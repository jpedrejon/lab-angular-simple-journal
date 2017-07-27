import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from '../../services/journal.service';
import { Observable } from 'rxjs';

import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry: Array<any>;
  constructor(private route: ActivatedRoute, private servicio: JournalService) {
  route.params.mergeMap((p: any) => servicio.get(p.id)).subscribe(entry=>{
    console.log(entry)
    this.entry = entry;
  });
}

ngOnInit() {
}

}
