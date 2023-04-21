import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {


  rating: number = 0;
  comment: string = '';

  setRating(rating: number) {
    this.rating = rating;
  }

  submitComment() {
    console.log(`Rating: ${this.rating}`);
    console.log(`Comment: ${this.comment}`);
    // or you can submit the rating and comment to your server or database
    this.rating = 0;
    this.comment = '';
  }

}

