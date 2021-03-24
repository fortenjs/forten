/*
const SPECIAL = {
  ArrowUp: true,
  ArrowLeft: true,
  ArryowDown: true,
  ArrowRight: true,
}
*/

export function isInputEvent(e: React.KeyboardEvent<HTMLDivElement>) {
  // All special arrow and such chars are lower then 65
  // 32 = space bar
  // FIXME
  // return !SPECIAL[e.key]
  return e.keyCode === 32 || (e.keyCode >= 65 && e.key !== 'Meta')
}
