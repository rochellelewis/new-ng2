import {Component} from "@angular/core";

@Component({
	selector: 'newng2-app',
	templateUrl: './templates/newng2-app.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}