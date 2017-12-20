import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item.model';

import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item ={
    nome: '',
    quantidade: 0,
    preco: 0
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopping: ShoppingListService,
    private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  adicionarItem(item: Item){
    this.shopping.adicionarItem(item).then(ref => {
      this.toast.mostrar(`${item.nome} incluído!`);
      this.navCtrl.setRoot('HomePage', {key: ref.key})
    });
  }
}
