import { Injectable } from '@angular/core';
// Adding loadash to this project to have advanced javascript methods.
// Offers easy usage of the application.
import * as _ from "lodash";

// Keeping it in a root for differential purpose only.
// As this is kept in root, this service becomes accessible to all the components of the entire application among all modules globally.
@Injectable({
  providedIn: 'root'
})
export class DuplicateFinderService {

  findDuplicatesByKey(myList: any[], key: string) {
    var duplicates = _.flow([
      arr => _.groupBy(arr, key),
      g => _.filter(g, o => o.length > 1),
      _.flatten
    ])(myList);
    return duplicates;
  }
}
