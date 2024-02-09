import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'replaceComma', standalone: true })
export class ReplaceCommaPipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) {
      return ''
    }

    return value.replace(',', '')
  }
}
