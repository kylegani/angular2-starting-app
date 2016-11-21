import './polyfills';

import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from './modules/app.module.ngfactory';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);