import { ToastService } from './../../services/toast/toast.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ShoppingListService } from './../../services/shopping-list/shopping-list.service';
import { Item } from '../../models/item.model';

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item: Item;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private shopping: ShoppingListService,
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  alterarItem(item: Item){
    this.shopping.alterarItem(item).then(() => {
      this.toast.mostrar(`${item.nome} salvo!`);
      this.navCtrl.setRoot('HomePage');
    });
  }

  removerItem(item: Item){
    this.shopping.removerItem(item).then(() => {
      this.toast.mostrar(`${item.nome} excluído!`);
      this.navCtrl.setRoot('HomePage');
    });
  }

}
