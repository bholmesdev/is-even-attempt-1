export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function isEmail(value: unknown): boolean {
  return isString(value) && /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)
}