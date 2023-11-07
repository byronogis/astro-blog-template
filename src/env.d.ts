/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// See https://stackoverflow.com/questions/42066421/property-value-does-not-exist-on-type-eventtarget/42066698#42066698
type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  currentTarget: T
}
