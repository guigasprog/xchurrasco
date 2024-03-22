import { HttpClient, HttpHandler, HttpRequest } from '@angular/common/http';
import { TaskService } from './task.service';
import { firstValueFrom } from 'rxjs';
import { TasksContainer } from '../models/tasks-container.model';

describe('TaskService', () => {
  const httpHandler: HttpHandler = {
    handle: (req: HttpRequest<any>) => {
      return req.body;
    },
  };
  const httpClient: HttpClient = new HttpClient(httpHandler);
  const servico: TaskService = new TaskService(httpClient);

  /**
   * Verifica se o retorno é uma instancia de TaskContainer
   */
  it('Should come instance of TaskContainer', async () => {
    const body = await firstValueFrom(servico.listarTodasAsTasks());
    expect(body).toBeInstanceOf(Array<TasksContainer>);
  });

  /**
   * Verifica se os put está ocorrendo de maneira correta!
   */
  it('Should excecute put correctly', async () => {
    const testedIndex: number = 0;
    const container = (await firstValueFrom(servico.listarTodasAsTasks()))[
      testedIndex
    ];
    const containerClone = { ...container };
    containerClone.tasks![testedIndex].completed = true;
    await firstValueFrom(servico.salvarTodasAsTasks(containerClone));
    const newContainer = (await firstValueFrom(servico.listarTodasAsTasks()))[
      testedIndex
    ];
    expect(newContainer.tasks![testedIndex].completed).not.toBe(
      containerClone.tasks![testedIndex].completed
    );
  });
});
