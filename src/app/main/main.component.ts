import { Component, Input } from '@angular/core';

import { Card } from '../shared/card';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent {
	@Input() card: Card;
}
