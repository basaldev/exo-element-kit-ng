import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

class ExoExperiment extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    platformBrowserDynamic()
      .bootstrapModule(AppModule, {ngZone: 'noop' })
      .catch(err => console.log(err));
  }

  static get observedAttributes() {
    return ['test'];
  }
}

window.customElements.define('exo-experiment', ExoExperiment);
