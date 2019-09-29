import { ThemePalette } from '@angular/material';

export interface TableConfig {
  paginator?: {
    color?: ThemePalette,
    disabled?: boolean
    hidePageSize?: boolean
    showFirstLastButtons?: boolean
  }
}