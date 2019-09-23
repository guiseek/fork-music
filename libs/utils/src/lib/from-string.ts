const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñõòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;'
const b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------'
const p = new RegExp(a.split('').join('|'), 'g')

export function valueToProp(value: string): string {
  return value
    .toString()
    .replace(/\s(.)/g, ($1) => $1.toUpperCase())
    .replace(/\s+/g, '')
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, '')
    .replace(/-/g, '')
    .replace(/[^\w\-]+/g, '')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export const stringToSlug: Function = (text: string): string => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export const t2n: Function = (text: string): string => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '.')
    .replace(p, c => b.charAt(a.indexOf(c)))
    // .replace(/&/g, '-and-')
    .replace(/&/g, '')
    .replace(/-/g, '')
    .replace(/[^\w\-]+/g, '.')
    // .replace(/\-\-+/g, '.')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}
