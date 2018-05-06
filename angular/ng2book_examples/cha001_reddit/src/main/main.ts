import 'reflect-metadata';
import 'zone.js';
import 'purecss';

import { AppModule } from './../app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);