import { RawMenuItem } from './../shared/models/items.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  template: `
    <ul routerLinkActive="active">
      <li routerLink="{{ item.link }}">
        <div>
          <h5>
            <img src="assets/imgs/seta-direita.png" />
            {{ item.label }}
          </h5>
        </div>
      </li>
      <div class="subitems">
        @for (subitem of item.subitems; track subitem) {
        <app-menu-item [item]="subitem"></app-menu-item>
        }
      </div>
    </ul>
  `,
  styles: `
  ul {
    list-style-type: none;
    .subitems {
      display: none;
    }
    li {
      width: auto;
      padding: 10px;
      opacity: 0.5;
      transition: 500ms;
      cursor: pointer;
      div {
        text-align: start;
      }
      img {
        transition: 500ms;
        opacity: 0;
      }
    }
    li:hover {
      opacity: 1;
    }
  }
  ul.active>li {
    opacity: 1;
    cursor: default;
    img {
      opacity: 1;
    }
  }
  ul.active>.subitems {
    display: block;
  }
  `,
})
export class MenuItemComponent {
  @Input({ required: true }) item!: RawMenuItem;

  constructor() {}
}
