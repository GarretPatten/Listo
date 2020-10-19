import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item';

@Component({
	selector: 'list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	items: Item[] = null;
	// TODO: Start count at 0 after removing test data
	count: number = 3;
	inputValue: string = '';

	constructor() { }

	ngOnInit() {
		// TODO: Remove test data
		this.items = [
			{
				id: 0,
				title: 'Milk',
				isComplete: false,
				isChecked: false
			},
			{
				id: 1,
				title: 'Bread',
				isComplete: false,
				isChecked: false
			},
			{
				id: 2,
				title: 'Eggs',
				isComplete: false,
				isChecked: false
			}
		];
	}

	addItem(): void {
		if (this.inputValue.trim().length === 0) {
			return;
		}

		this.items.push(
			{
				id: this.count,
				title: this.inputValue,
				isComplete: false,
				isChecked: false
			}
		);

		this.count++;
		this.inputValue = '';
	}

	deleteCheckedItems(): void {
		this.items = this.items.filter(item => !item.isChecked);
	}
}
