import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  entries:Observable<any>;
  constructor(public servicio: JournalService) { }

  ngOnInit() {
    this.entries=this.servicio.getList();
  }

showList(){


}


}
