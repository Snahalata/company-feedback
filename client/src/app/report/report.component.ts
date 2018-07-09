import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../service/feedback.service';
import { Feedback } from '../model/feedback.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  feedbacks: Feedback[];
  rate: number;
  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
//   this.feedbacks = new Feedback[]();
    this.rate = 0;
    this.getAllFeedback();
  }
  getAllFeedback() {
    this.feedbackService.getAllFeedback().subscribe(data => {
      this.feedbacks = data as Feedback[];
      for ( let i = 0; i < this.feedbacks.length; i++) {
        this.rate = this.rate + this.feedbacks[i].rate;
      }
     this.rate = this.rate / this.feedbacks.length;
    }, error => {});
  }

}
