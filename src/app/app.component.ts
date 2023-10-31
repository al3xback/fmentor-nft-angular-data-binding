import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	project = {
		name: 'NFT',
		card: {
			title: 'Equilibrium #3429',
			description:
				'Our Equilibrium collection promotes balance and calm.',
			imageSrc: '/assets/images/equilibrium.jpg',
			ethereumAmount: 0.041,
			remainingTime: 3,
			author: {
				name: 'Jules Wyvern',
				imageSrc: '/assets/images/avatar.png'
			}
		},
		creator: {
			name: 'Frontend Mentor',
			link: 'https://www.frontendmentor.io?ref=challenge'
		},
		coder: {
			name: 'al3xback',
			gitHubLink: 'https://github.com/al3xback'
		}
	};
}
