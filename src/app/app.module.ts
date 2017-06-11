import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';

const routeConfig: Routes = [
	{path: "", redirectTo:"chatList",pathMatch: "full"},
	{path: "header", component: HeaderComponent},
	{path: "chatList", component: ChatListComponent},
	{path: "chat", component: ChatComponent}
]

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent,
		ChatComponent,
		ChatListComponent
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
