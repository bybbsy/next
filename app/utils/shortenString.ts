const NON_WORD_CHARS = /\W/gm;

export function shortenString(value: string, size: number) {
  return value
    .split(' ')
    .reduce((acc: string[], item, idx) => {
      if (idx < size - 1) {
        const str = item.replaceAll(NON_WORD_CHARS, '');

        if (str)
          acc.push(str)
      }
      if (idx === size) {
        acc.push('...');
      }

      return acc;
    }, [])
    .join(' ');
}
