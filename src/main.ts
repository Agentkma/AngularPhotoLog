// Import global stylesheet
import './styles/main.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//bootstrap and add to webpage

platformBrowserDynamic().bootstrapModule(AppModule);
