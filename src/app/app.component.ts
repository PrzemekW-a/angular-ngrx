import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { RouterOutlet } from '@angular/router';

export type Item = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

// selectedItem = linkedSignal<Item[], Item | null>({
//   source: this.listOfItems,
//   computation: (items, previous) => {
//     console.log('items', items);
//     console.log('previous', previous);
//     return items.find((item) => item.id === previous?.value?.id) || null
//   }
// })
