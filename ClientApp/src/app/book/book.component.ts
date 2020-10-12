import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../interfaces/ibook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public book: IBook[];

  public newBook: IBook =
    {
      id: undefined,
      title: '',
      author: '',
      seriesName: '',
      seriesNumber: 0,
    };

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.book = await this.bookService.getBook();
  }

  public async addBook() {
    const newBook = await this.bookService.addBook(this.newBook);
    this.book.push(newBook);
  }
}
