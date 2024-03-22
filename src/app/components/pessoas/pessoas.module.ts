import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PessoasComponent } from './pessoas.component';

@NgModule({
  declarations: [CadastroComponent, PessoasComponent],
  imports: [CommonModule],
})
export class PessoasModule {}
