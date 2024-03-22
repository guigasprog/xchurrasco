import { Component } from '@angular/core';
import { MenuItems, RawMenuItem } from '../shared/models/items.model';
import { routes } from '../app-routing.module';
@Component({
  selector: 'app-main',
  template: `
    <section
      class="container-fluid d-flex justify-content-center align-items-center borda"
    >
      <div class="menu">
        <div class="cabeca text-center" style="cursor: pointer;" routerLink="/">
          <h1
            style="color: #b5b5b5; -webkit-text-stroke: 0.5px #022F4C; font-size: 45px"
          >
            XHURRASCO
          </h1>
          <h5 style="font-size: 20px">Aplicação Gerenciar</h5>
        </div>
        <div class="cardapio text-center">
          @for (opcao of sideBarItems; track opcao) {
          <app-menu-item [item]="opcao" />
          }
        </div>
      </div>
      <div class="container content"><router-outlet /></div>
    </section>
  `,
  styles: `
  .borda {
    height: 100vh;
    background-color: #F2E7D3;
  }
  .menu {
    padding-top: 3%;
    width: 20vw;
    height: 100vh;
    .cardapio {
      padding-top: 15%;
      list-style: none;
      color: #022F4C;
    }
  }
  .container {
    height: 90%;
    width: 70%;
  }
  .content {
    border-radius: 30px;
    background-color: #FFF9EE;
  }
  `,
})
export class MainComponent {
  // public opcoes: MenuItems = [
  //   {
  //     label: "Xhurrasco", link: "/xhurras"
  //   },{
  //     label: "Pessoas", link: "/pessoas", subitems: [{
  //       label: "Visualizar", link: "/visao-geral"
  //     },{
  //       label: "Cadastro", link: "/cadastro"
  //     },{
  //       label: "Editar", link: "/editar"
  //     }]
  //   },{
  //     label: "Comida", link: "/comida"
  //   }
  // ]

  public sideBarItems: MenuItems = routes
    .filter((menuItem) => menuItem.visibleOnSidebar)
    .map((menuItem) => menuItem.buildForSidebar() as RawMenuItem);

  constructor() {}
}
