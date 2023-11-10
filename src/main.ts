import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// dynamic component
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AdBannerComponent } from './app/components/dynamic-component/ad-banner.component';
// bootstrapApplication(AdBannerComponent);
