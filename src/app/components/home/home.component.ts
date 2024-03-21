import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ContainerItemsComponent } from '../container-items/container-items.component';
import { SectionBurguersComponent } from '../section-burguers/section-burguers.component';
import { SectionDrinksComponent } from '../section-drinks/section-drinks.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SectionBurguersComponent,
    SectionDrinksComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showModal:boolean = false

  constructor(){}

  openModal(){
    this.showModal = !this.showModal

    this.getCartItems()
  }

  getCartItems(){
    const cartItems = ContainerItemsComponent.cartItems

    const cartItemsElement = document.getElementById("cart-items")
    if (cartItemsElement){
      cartItemsElement.innerHTML = ""
      cartItems.forEach(item => {
        const itemElement = document.createElement('div')
        itemElement.classList.add('cart-items')
        itemElement.style.display = "flex"
        itemElement.style.flexDirection = "column"
        itemElement.style.justifyContent = "space-between"
        itemElement.style.marginBottom = "1.6rem"
        itemElement.innerHTML = `
          <div class="container-cart" style="display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <p style="font-weight: 700;">${item.name}</p>
                    <p>Quantidade: ${item.quantity}</p>
                    <p style="font-weight: 600; margin-top: .8rem;">R$ ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button (click)='removeToCart()' class="remove-from-cart-btn" style="background: transparent; border: none; cursor: pointer;">Remover</button>
            </div>
        `
        cartItemsElement.appendChild(itemElement);
      })
    }
  }

  getCartItemsLength():number {
    return ContainerItemsComponent.cartItems.length
  }

  removeToCart(){
    alert("clicou")
    // const itemIndex = ContainerItemsComponent.cartItems.findIndex(item => console.log(item))
  }

}
