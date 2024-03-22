import { type Type as Component } from '@angular/core';
import { Route } from '@angular/router';

export interface RawMenuItem {
  label: string;
  link: string;
  subitems: Array<RawMenuItem>;
}

export class MenuItemModel {
  private subitems = new Set<MenuItemModel>();

  constructor(
    public label: string,
    public link: string,
    public component: Component<any>,
    public visibleOnSidebar = true
  ) {}

  addChild(menuItem: MenuItemModel) {
    this.subitems.add(menuItem);
    return this;
  }

  buildForSidebar(rootLink: string = ''): RawMenuItem | undefined {
    if (!this.visibleOnSidebar) return;

    const link = `${rootLink}/${this.link}`;
    const subitems = Array.from(this.subitems)
      .filter((child) => child.visibleOnSidebar)
      .map((child) => child.buildForSidebar(link) as RawMenuItem);

    return {
      label: this.label,
      link,
      subitems,
    };
  }

  buildForRouting(): Route {
    const children = Array.from(this.subitems).map((child) =>
      child.buildForRouting()
    );

    return {
      path: this.link,
      component: this.component,
      children,
    };
  }
}

export type MenuItems = Array<RawMenuItem>;
