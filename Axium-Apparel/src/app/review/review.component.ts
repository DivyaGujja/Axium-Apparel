import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  providers: [NgbRatingConfig]
})
export class ReviewComponent implements OnInit {
  
  @Input() product: string;
  @Output() closeReview = new EventEmitter<void>();
  constructor(config: NgbRatingConfig) { 
    config.max = 5;
  }

  ngOnInit() {
  }

  onSubmitReview(form: NgForm) {
    console.log(form.value);
    this.closeReview.emit();
  }
 
  onClose() {
    this.closeReview.emit();
  }

}
