import { Injectable } from '@angular/core';
import * as _ from "lodash";

// Keeping it in a root for differential purpose only.
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
