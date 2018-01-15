import { Component } from '@angular/core';
// component = template + class + decorator
@Component({
	// required decorators = selector & template/templateUrl
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
	emoji = ['🎉', '😍', '😜', '👍'];
	activeEmoji: string;
	changeEmoji() {
		this.activeEmoji = this.emoji[
			Math.floor(Math.random() * this.emoji.length)
		];
	}
}
