import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TasksContainer } from "../models/tasks-container.model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) {}

  public listarTodasAsTasks(): Observable<Array<TasksContainer>> {
    return this.httpClient.get<Array<TasksContainer>>("http://localhost:3000/tasksContainers");
  }

  public salvarTodasAsTasks(container: TasksContainer): Observable<void> {
    return this.httpClient.put<void>(`http://localhost:3000/tasksContainers/${container.id}`, container);
  }
}
