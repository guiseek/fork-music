export interface TableColumn {
  columnDef: string
  cell: Function
  header?: string
  format?: string
  onClick?: Function
}