export function sortLibrary(
  { name: a }: { name: string },
  { name: b }: { name: string }
) {
  if (a.startsWith('./') && !b.startsWith('./')) {
    return -1
  } else if (b.startsWith('./') && !a.startsWith('./')) {
    return 1
  } else {
    return a < b ? -1 : 1
  }
}
