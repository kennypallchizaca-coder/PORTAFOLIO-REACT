import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Route[] = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [provideAnimations(), provideRouter(routes)]
}).catch(err => console.error(err));
