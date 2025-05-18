import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { ReviewsComponent } from '../reviews/reviews.component';
import { Book } from '../book.service'; // Импортируем интерфейс
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, DatePipe, UpperCasePipe, ReviewsComponent],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: Book | undefined; // Явное объявление свойства с типом

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.book = this.bookService.getBook(); // Инициализация свойства
  }
}