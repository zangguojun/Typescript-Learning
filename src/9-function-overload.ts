function makeData(t: number): Date
function makeData(m: number, d: number, y: number): Date
function makeData(mOrT: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, d, mOrT)
  } else {
    return new Date(mOrT)
  }
}
