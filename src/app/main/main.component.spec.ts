import { TestBed } from "@angular/core/testing"
import { MainComponent } from "./main.component"

describe('MainComponent', () => {

  it ("Should Exist", () => {
    const component = TestBed.createComponent(MainComponent)
    const componentInstance = component.componentInstance;
    expect(componentInstance).toBeTruthy();
  })
})
