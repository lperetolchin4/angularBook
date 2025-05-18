import { Injectable } from '@angular/core';
import { Book } from './models/book.models';

// Экспортируем интерфейс для использования в компонентах
export interface Book {
  title: string;
  year: number;
  author: string;
  pages: number;
  publisher: string;
  cover: string;
  authorPhoto: string;
}

export interface Review {
  author: string;
  text: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private book: Book = {
    title: "Война и мир",
    year: 1869,
    author: "Лев Толстой",
    pages: 1225,
    publisher: "Русский вестник",
    cover: "https://via.placeholder.com/300x450?text=Обложка+книги",
    authorPhoto: "https://via.placeholder.com/150?text=Л.Толстой"
  };

  private reviews: Review[] = [
    { author: "Иван Иванов", text: "Великая книга!", date: new Date().toISOString() },
    { author: "Петр Петров", text: "Очень длинная, но интересная.", date: new Date().toISOString() }
  ];

  getBook(): Book {
    return this.book;
  }

  getReviews(): Review[] {
    return this.reviews;
  }

  addReview(review: Omit<Review, 'date'>): void {
    this.reviews.push({
      ...review,
      date: new Date().toISOString()
    });
  }
}