export function getStorage<T>(key: string): T | null {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export function setStorage(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}
