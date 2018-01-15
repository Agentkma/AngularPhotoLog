import { Component, OnInit } from '@angular/core';
import { EntryService } from '../shared/entry.service';
import { Entry } from '../shared/entry.model';
@Component({
	// selector name must be all lowercase and words sep. with hyphen
	selector: 'app-entry-list',
	templateUrl: 'entry-list.component.html',
	styleUrls: ['entry-list.component.css']
})
export class EntryListComponent implements OnInit {
	entries: Entry[];
	constructor(private entryService: EntryService) {}

	ngOnInit() {
		this.entryService
			.getEntries()
			.then(entries => (this.entries = entries));
	}
}
