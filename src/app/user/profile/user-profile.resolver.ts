import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserServiceOLD } from '../user.service';
import { Observable } from 'rxjs';
import { DataStore } from '../../shell/data-store';
import { UserProfileModel } from './user-profile.model';

@Injectable()
export class UserProfileResolver implements Resolve<any> {

  constructor(private userService: UserServiceOLD) { }

  resolve() {
    const dataSource: Observable<UserProfileModel> = this.userService.getProfileDataSource();
    const dataStore: DataStore<UserProfileModel> = this.userService.getProfileStore(dataSource);

    return dataStore;
  }
}
