import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isPushed: boolean = false;
  count: number = 0;

  constructor(public toastCtrl: ToastController) {}

  setCountUp(): number {
    this.isPushed = true;
    this.count = this.count + 1;
    if (this.count % 10 === 0) {
      this.getTenCountKyuns();
    }
    return this.count;
  }

  async getTenCountKyuns() {
    const toast = await this.toastCtrl.create({
      message: '❤️️️️️❤️️️️️10きゅん❤️️️️️❤️️️️️',
      duration: 1500
    });
    toast.present();
  }

  async restart() {
    this.isPushed = false;
    this.count = 0;
    const toast = await this.toastCtrl.create({
      message: 'リセットしたよ！',
      duration: 1500,
      color: "success"
    });
    toast.present();
  }
}
