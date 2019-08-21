import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';

export class Book extends Resource {
  attributes = {
    author: '',
    pages: 0,
    title: ''
  };
}

@Injectable({
  providedIn: 'root'
})
@Autoregister()
export class BookService extends Service<Book> {
  resourse = Book;
  type = 'authors';
}
