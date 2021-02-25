import {DirHelper} from './vaadin-dir-helper.js';

export {DirMixin};

declare function DirMixin<T extends new (...args: any[]) => {}>(base: T): T & DirMixinConstructor;

interface DirMixinConstructor {
  new(...args: any[]): DirMixin;
  finalize(): void;
}

export {DirMixinConstructor};

interface DirMixin {
  readonly dir: string|null|undefined;
  connectedCallback(): void;
  attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
  disconnectedCallback(): void;
  __getNormalizedScrollLeft(element: Element|null): number;
  __setNormalizedScrollLeft(element: Element|null, scrollLeft: number): any;
}
