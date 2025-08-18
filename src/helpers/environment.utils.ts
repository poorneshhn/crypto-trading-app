export function getVariable(key: string, defaultValue: string = ''): string {
  return import.meta.env[key] || defaultValue;
}