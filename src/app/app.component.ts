import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { userInfo } from 'os';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './user.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore'

const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [
    './side-menu/styles/side-menu.scss',
    './side-menu/styles/side-menu.shell.scss',
    './side-menu/styles/side-menu.responsive.scss'
  ]
})
export class AppComponent{
  appPages = [
    {
      title: 'My details',
      url: '/app/user',
      icon: './assets/sample-icons/side-menu/categories.svg'
    },
    {
      title: 'Personal data',
      url: '/contact-card',
      icon: './assets/sample-icons/side-menu/profile.svg'
    },
    {
      title: 'Newsletter',
      url: '/contact-card',
      icon: './assets/sample-icons/side-menu/contact-card.svg'
    }
  ];
  accountPages = [
    {
      title: 'Language',
      url: '/auth/login'
    },
    {
      title: 'Accessibility options',
      url: '/auth/signup'
    },
    {
      title: 'Rate us on the AppStore',
      url: '/forms-filters'
    }
  ];

  mainuser: AngularFirestoreDocument
  email: string
  sub

  constructor( public router: Router,
    ) {
    this.initializeApp();
  }

  async initializeApp() {
   try {
     await SplashScreen.hide();
   } catch (err) {
     console.log('This is normal in a browser', err);
   }
 }

}
