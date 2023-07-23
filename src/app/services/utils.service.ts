import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, LoadingOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController
  ) { }

  //////loading
  //present
  async presentLoading(opts?: LoadingOptions) {
    const loading = await this.loadingController.create(opts);
    await loading.present();
  }
  //dismiss
  async dismissLoading(){
    return await this.loadingController.dismiss();

  }

  /////localstorage
  //set
  setElementInLocalstorage(Key: string, element: any){
    return localStorage.setItem(Key, JSON.stringify(element))
  }
  //get
  getElementFromLocaleStorange(Key: string){
     return JSON.parse( localStorage.getItem(Key))
  }

  async presentToast(opts: ToastOptions) {
    const toast = await this.toastController.create(opts);
    toast.present();
  }

  //////router
  routerLink(url: string){
    return this.router.navigateByUrl(url);
  }
}
