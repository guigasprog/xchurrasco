import {
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { CheckboxModule } from 'primeng/checkbox';
import { TaskService } from './services/task.service';
import { TasksContainer } from './models/tasks-container.model';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tasks',
  standalone: true,
  providers: [MessageService],
  template: `
    <p-toast></p-toast>
    <p-sidebar [(visible)]="sideBarVisivel" [showCloseIcon]="false">
      @if (listaDeContainersDeTasks != null) {
      <h1>Lista de Tasks</h1>
      <hr />
      @for (container of listaDeContainersDeTasks; let containerIndex = $index;
      track containerIndex) {
      <section style="padding-top: 10px;">
        <h5>{{ container.container }}</h5>
        @if (container.warning) {
        <div
          style="
          background-color: #cc8925;
          padding-left: 10px;
          padding-right: 10px;
          color: white;
          "
        >
          <hr />
          {{ container.warning }}
          <hr />
        </div>
        } @for (task of container.tasks; let taskIndex = $index; track
        taskIndex) {
        <section style="padding-top: 10px; display: flex; flex-direction: row">
          <div style="padding-right: 10px;">
            <p-checkbox
              (click)="salvarAlteracoesDasTasks(containerIndex)"
              [(ngModel)]="task.completed"
              [binary]="true"
            />
          </div>
          {{ task.description }}
        </section>
        }
      </section>
      } } @else {
      <h3>Não foi possível listar as tasks!</h3>
      <p>
        Ocorreu algum erro! Verifique se você está rodando o Json-Server. Caso
        estiver contate um team leader.
      </p>
      }
    </p-sidebar>
  `,
  imports: [
    SidebarModule,
    BrowserAnimationsModule,
    CheckboxModule,
    FormsModule,
    ToastModule,
  ],
  styles: `
  .p-sidebar-left	{
    width: 350px;
  }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class TaskComponent implements OnInit {
  protected sideBarVisivel: boolean = false;
  protected listaDeContainersDeTasks: Array<TasksContainer> | null = null;

  constructor(
    private taskService: TaskService,
    private messageService: MessageService
  ) {}

  @HostListener('document:keydown.tab', ['$event'])
  onEsc() {
    this.sideBarVisivel = true;
  }

  ngOnInit(): void {
    this.taskService.listarTodasAsTasks().subscribe({
      next: (containers: Array<TasksContainer>) =>
        (this.listaDeContainersDeTasks = containers),
      error: () => {
        throw Error(`Ocorreu algum erro! Verifique se você está rodando o JSON-SERVER, caso não estiver
        vá na pasta atividade-de-fixacao-angular e digite 'npx json-server data.json'!`);
      },
    });
  }

  public salvarAlteracoesDasTasks(containerIndex: number): void {
    if (this.listaDeContainersDeTasks == null)
      throw Error('Ocorreu um erro, os containers estão nulos!');
    this.taskService
      .salvarTodasAsTasks(this.listaDeContainersDeTasks[containerIndex])
      .subscribe({
        next: () =>
          this.messageService.add({
            severity: 'info',
            summary: '👍',
            detail: 'Joia',
          }),
        error: () => {
          throw Error('Ocorreu um erro ao salvar as alterações');
        },
      });
  }
}
