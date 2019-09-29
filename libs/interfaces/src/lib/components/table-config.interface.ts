import { ThemePalette } from '@angular/material';

export interface TableConfig {
  endpoint?: string
  paginator?: {
    color?: ThemePalette,
    disabled?: boolean
    hidePageSize?: boolean
    showFirstLastButtons?: boolean
  }
}