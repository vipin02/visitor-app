import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any = [];
  newsError: String = '';
  constructor(private _network: NetworkService) { }

  ngOnInit(): void {
    this._network.getNews().subscribe((data: any) => {
      if (data.status === 'ok') {
        this.news = data.articles;
      } else {
        this.newsError = 'Cannot Fetch News';
      }
    });
  }

}
