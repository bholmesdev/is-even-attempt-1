import { writable } from 'svelte/store'

export const tabIdx = writable<number>(0)

export function toTabId(idx) {
  return `tabs--tab--${idx}`;
}

export function toTabPanelId(idx) {
  return `tabs--panel--${idx}`;
}