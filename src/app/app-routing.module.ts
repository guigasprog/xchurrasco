import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItemModel } from './shared/models/items.model';
import { RoutePlaceholderComponent } from './components/route-placeholder.component';
import { CadastroComponent } from './components/pessoas/cadastro/cadastro.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';

export const routes = [
  new MenuItemModel('Xhurrasco', 'xhurras', RoutePlaceholderComponent),
  new MenuItemModel('Pessoas', 'pessoas', PessoasComponent)
    .addChild(
      new MenuItemModel('Visao-Geral', 'visao-geral', RoutePlaceholderComponent)
    )
    .addChild(
      new MenuItemModel('Cadastro', 'cadastro', CadastroComponent).addChild(
        new MenuItemModel('AOBA', 'bao', RoutePlaceholderComponent)
      )
    ),
  new MenuItemModel('Comida', 'comida', RoutePlaceholderComponent),
];

// const routes: Routes = [
//   {
//     path: 'pessoas',
//     component: RoutePlaceholderComponent,
//     children: [
//       {
//         path: 'cadastro',
//         component: RoutePlaceholderComponent,
//       },
//     ],
//   },
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes.map((route) => route.buildForRouting())), //
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
