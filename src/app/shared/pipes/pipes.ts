import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'momentFormat' })
export class MomentFormatPipes implements PipeTransform {
  transform(val, format) {
    return moment(val).format(format);
  }
}
