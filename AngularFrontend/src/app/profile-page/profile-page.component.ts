import { Component } from '@angular/core';
import { TestData } from './test.data';

@Component({
selector: 'app-profile-page',
templateUrl: './profile-page.component.html',
styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  testData = new TestData(
    1,                    // Id
    'My Name',            // Name
    'My Comments',        // Comments
    'Blue',               // Favorite Color
    'Spring',             // Favorite Season
    [false, true, true, false], // Hobbies
  );

  colors  = ['Red', 'Blue', 'Yellow', 'Purple', 'Orange', 'Green'];
  languages = ['Spring', '.net', 'Angular', 'node.js'];
  hobbies = ['Reading', 'Writing', 'Painting', 'Walking'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(
      JSON.stringify(this.testData)
    );
  }

}