import { Injectable } from '@nestjs/common';
import * as FacebookTokenStrategy from 'passport-facebook-token';
import { use } from 'passport';

@Injectable()
export class FacebookTokenValidatorStrategy {
  constructor() {
    this.init();
  }
  init() {
    use(
      new FacebookTokenStrategy(
        {
          clientID: process.env.FB_APP_ID,
          clientSecret: process.env.FB_APP_SECRET,
        },
        async (accessToken: string, refreshToken: string, profile: any, done: any) => {
          const user = {};
          console.log(profile);
          return done(null, user);
        },
      ),
    );
  }
}