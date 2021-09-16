export function sum(a: number, b: number): number {
  return a + b;
}

export function sortAndSplit(a: string): string[] {
  return a.split(",").sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
}

export function addsDivToBody(a: string): void {
  const child = document.createElement('div');
  child.textContent = a;
  document.body.appendChild(child);
}
