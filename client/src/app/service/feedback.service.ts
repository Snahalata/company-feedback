import { Injectable } from '@angular/core';
import { Feedback } from '../model/feedback.model';
import { Reply } from '../model/reply.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feedbacks: Feedback[];
  feedback: Feedback;
  reply: Reply;

  readonly URL: string = 'http://localhost:3000/feedback';



  constructor(private http: HttpClient) { }
  getAllFeedback() {
    return this.http.get(this.URL);
  }
  addFeedback(feedback: Feedback){
    return this.http.post(this.URL, feedback);
  }

  updateFeedback(feedback: Feedback) {
    return this.http.put(this.URL + ' /' + feedback._id, feedback);
  }
  deleteFeedback(feedback: Feedback) {
    return this.http.delete(this.URL + '/' + feedback._id);


  }


}
