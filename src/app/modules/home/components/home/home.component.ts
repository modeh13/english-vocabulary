import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Word } from '../../../../shared/models';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent {
	title: string = "Word list";
	wordList: Array<Word> = [{ "name": "ddd" }];

	constructor(private http: Http) {
		this.http.get('assets/vocabulary/20180727.json')
			.toPromise()
			.then(res => {
				this.wordList = res.json();
				console.log(this.wordList);
			});
	}

	ngOnInit() {
		console.log("Probando.")
	}
}