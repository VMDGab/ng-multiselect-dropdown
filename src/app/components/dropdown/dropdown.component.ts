import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDropdownSettings, NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgMultiSelectDropDownModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'], // Corrigido para 'styleUrls'
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent implements OnInit {
  dropdownList: Array<{ item_id: number; item_text: string }> = [];
  selectedItems: Array<{ item_id: number; item_text: string }> = [];
  dropdownSettings = {};

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Todos' },
      { item_id: 2, item_text: 'Desenvolvimento' },
      { item_id: 3, item_text: 'Testes' },
      { item_id: 4, item_text: 'DevOps' },
    ];
    this.selectedItems = [...this.dropdownList];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Todos',
      unSelectAllText: 'Todos',
      itemsShowLimit: 1,
      allowSearchFilter: true,
      enableCheckAll: false
    } as IDropdownSettings;
    console.log('Dropdown settings initialized:', this.dropdownSettings);
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }
}
