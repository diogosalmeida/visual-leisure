import { Injectable } from '@angular/core';
import Unsplash from 'unsplash-js';
import { keyApplication } from '../../secrets/keys-secrets';

@Injectable()
export class UnsplashService {

  public unsplashKey: object;

  constructor(protected unsplash: Unsplash) {
    this.unsplash = new this.unsplash({
      applicationId: keyApplication.applicationId,
      secret: keyApplication.secret
    });
  }

  public getUnsplashkey(): object {
    return this.unsplashKey;
  }
}
