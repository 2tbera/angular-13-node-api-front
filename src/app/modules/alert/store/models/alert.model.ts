import {AlertTypes} from '../enums/enums';

export interface AlertModel {
  alertType: AlertTypes;
  delay: number;
  message: string;
}
