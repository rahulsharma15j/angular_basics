import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from 'ng4-social-login'

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('513655063985-qv9sagoi3hchplph561orfsiogcr1p42.apps.googleusercontent.com'),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('608174566481698'),
  }
  ,
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider('78ahtddo9h4485v'),
  }
], false);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,


  ],
  providers: [{ provide: AuthServiceConfig, useFactory: provideConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }