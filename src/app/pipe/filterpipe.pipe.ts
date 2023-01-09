import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  // pipe component for searchinh funtion

  // existing data(entire kist), based chaging data(typingstring), based property
  transform(restuarants: any[], filterString: string, propName: string) {
    const result: any = [];
    if (!restuarants || filterString == ' ' || propName == '') {
      return restuarants;
    }
    restuarants.forEach((restuarant: any) => {
      // if (restuarant[propName].trim().toLowerCase().includes(filterString)) {
      if (restuarant[propName]) {
        result.push(restuarant)
      }
    })
    return result
  }

}
