import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from "@angular/router";

const routeConfig: Routes = [
	{path: "header", component: HeaderComponent}
]

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(routeConfig)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
