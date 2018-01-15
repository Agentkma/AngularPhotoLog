import {
	Component,
	EventEmitter,
	Input,
	Output,
	ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntryService } from '../shared/entry.service';

@Component({
	// selector name must be all lowercase and words sep. with hyphen
	selector: 'app-entry-form',
	templateUrl: 'entry-form.component.html'
})
export class EntryFormComponent {
	name: string = '';
	comment: string = '';

	@Input() entryId: number;
	// EventEmitter is a way to share data between 2 components
	@Output()
	onCommentAdded = new EventEmitter<{ name: string; comment: string }>();
	// ViewChild decorator allows us to bind local variable 'commentForm' in entry-form.component.html to this component
	@ViewChild('commentForm') commentForm: NgForm;

	constructor(private entryService: EntryService) {}
	onSubmit(commentForm: NgForm) {
		if (this.commentForm.invalid) return;
		let comment = { name: this.name, comment: this.comment };
		this.entryService.addComment(this.entryId, comment).then(() => {
			this.onCommentAdded.emit(comment);
			this.commentForm.resetForm();
		});
	}
}
