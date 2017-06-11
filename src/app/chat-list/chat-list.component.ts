import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-chat-list',
	templateUrl: './chat-list.component.html',
	styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

	private isComputerLogined = false;

	private chatList = [];

	constructor() {
		this.chatList = [{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		},{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃1",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		},{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃2",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		},{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃3",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		},{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃4",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		},{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃5",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		},{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃6",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		},{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃77",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		},{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃8",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		},{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃9",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		},{
			headImg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497123240206&di=e9ac3a0ab48e9ad09793718aecc93d6b&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2014-09-01%2F161431787.jpg",
			name: "赵兴勃10",
			chatContent: "这是我发的消息",
			time: "10分钟前"
		}];
	}

	ngOnInit() {
	}

}
