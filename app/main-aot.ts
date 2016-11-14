import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app.module.ngfactory';
enableProdMode();
const platform = platformBrowser();
platform.bootstrapModuleFactory(AppModuleNgFactory);
