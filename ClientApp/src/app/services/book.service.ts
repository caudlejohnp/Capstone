import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IBook } from '../interfaces/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public async getBook(): Promise<IBook[]> {
    return this.httpClient.get<IBook[]>(`${this.baseUrl}book`).toPromise();
  }

  public async addBook(book: IBook): Promise<IBook> {
    return this.httpClient.post<IBook>(`${this.baseUrl}book`, book).toPromise();
  }
}
