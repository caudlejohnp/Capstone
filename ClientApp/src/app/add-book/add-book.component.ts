import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/ibook';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  public book: IBook[];

  public newBook: IBook =
    {
      title: '',
      author: '',
      seriesName: '',
      seriesNumber: undefined,
    };

  ngOnInit() {
  }

  public async addBook() {
    await this.bookService.addBook(this.newBook);
    this.newBook = {
      title: '',
      author: '',
      seriesName: '',
      seriesNumber: undefined,
    };
  }
}
