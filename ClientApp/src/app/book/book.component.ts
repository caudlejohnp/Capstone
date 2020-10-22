import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { IBook } from '../interfaces/ibook';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'author', 'seriesName', 'seriesNumber'];
  public book: IBook[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  dataSource: MatTableDataSource<IBook>;

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.book = await this.bookService.getBook();
    this.dataSource = new MatTableDataSource<IBook>(this.book);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filter: string): void {
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
