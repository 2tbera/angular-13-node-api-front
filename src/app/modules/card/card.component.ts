import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CardComponent {
 @Input() public data?: Item;
}


