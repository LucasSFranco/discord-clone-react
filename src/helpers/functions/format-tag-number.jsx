const tagNumberRegex = /(\d)?(\d)?(\d)?(\d)?/

export default (tagNumber) => (
  tagNumber
    .toString()
    .replace(tagNumberRegex, (match, n1, n2, n3, n4) => (
      (n4 && n1) || '0') +
      ((n4 && n2) || (n3 && n1) || '0') +
      ((n4 && n3) || (n3 && n2) || (n2 && n1) || '0') +
      (n4 || n3 || n2 || n1)
    )
)
