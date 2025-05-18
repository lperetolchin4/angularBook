import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  newReview = { author: '', text: '' };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.reviews = this.bookService.getReviews();
  }

  submitReview(): void {
    if (this.newReview.author && this.newReview.text) {
      this.bookService.addReview(this.newReview);
      this.newReview = { author: '', text: '' };
      this.reviews = this.bookService.getReviews();
    }
  }
}