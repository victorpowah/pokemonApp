import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'gender', standalone: true })
export class PokemonGenderPipe implements PipeTransform {
  transform(value: number | null): string {
    if (!value) {
      return ''
    }
    let maleRate
    let femaleRate

    switch (value) {
      case -1:
        return (
          '<span class="-text"' +
          '>Genderless <i class="icon-genderless"></i></span>'
        )
      case 0:
        maleRate = '100'
        femaleRate = '0'
        break
      case 1:
        maleRate = '87.5'
        femaleRate = '12.5'
        break
      case 2:
        maleRate = '75'
        femaleRate = '25'
        break
      case 3:
        maleRate = '62.5'
        femaleRate = '37.5'
        break
      case 4:
        maleRate = '50'
        femaleRate = '50'
        break
      case 5:
        maleRate = '37.5'
        femaleRate = '62.5'
        break
      case 6:
        maleRate = '25'
        femaleRate = '75'
        break
      case 7:
        maleRate = '12.5'
        femaleRate = '87.5'
        break
      case 8:
        maleRate = '0'
        femaleRate = '100'
    }
    return (
      '<span class="text-indigo-600">' +
      maleRate +
      '% M, </span>' +
      '<span class="text-pink-300">' +
      femaleRate +
      '% F</span> '
    )
  }
}
