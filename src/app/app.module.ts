import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import {
	EntryListComponent,
	EntryComponent,
	EntryService,
	EntryFormComponent
} from './entries';
import { InMemoryEntryService } from './backend';

// decorators

@NgModule({
	//Imports array ONLY for Angular modules
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		//InMemoryWebApiModule only for testing/when no backend available yet
		InMemoryWebApiModule.forRoot(InMemoryEntryService)
	],
	// Services go inside the Providers array
	providers: [EntryService],
	// Components go in Declarations array
	// always list child components before parent components
	// EntryComponent is a child of EntryListComponent
	declarations: [
		AppComponent,
		EntryComponent,
		EntryListComponent,
		EntryFormComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
