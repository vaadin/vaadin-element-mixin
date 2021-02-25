/// <reference path="custom_typings/vaadin-usage-statistics.d.ts" />
/// <reference path="custom_typings/vaadin.d.ts" />

import {idlePeriod} from '@polymer/polymer/lib/utils/async.js';

import {Debouncer, enqueueDebouncer} from '@polymer/polymer/lib/utils/debounce.js';

import {DirMixin} from './vaadin-dir-mixin.js';

import {usageStatistics} from '@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js';

export {ElementMixin};

declare function ElementMixin<T extends new (...args: any[]) => {}>(base: T): T & ElementMixinConstructor & DirMixinConstructor;

import {DirMixinConstructor} from './vaadin-dir-mixin.js';

interface ElementMixinConstructor {
  new(...args: any[]): ElementMixin;
  finalize(): void;
}

export {ElementMixinConstructor};

interface ElementMixin extends DirMixin {
}
