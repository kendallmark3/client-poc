import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-prompt-form',
  templateUrl: './open-aicomponent.component.html',
  styleUrls: ['./open-aicomponent.component.scss']
})
export class OpenAIComponentComponent {
  prompt: string;
  response: string;

  constructor(private http: HttpClient) {}

  addPrompt(): void {

    // Create headers object to include api key
    const headers = new HttpHeaders()
  .set('Authorization', 'Bearer yourKey')
  .set('Content-Type', 'application/json');
    // Make a POST request to the OpenAPI API
    
    this.http.post<any>('https://api.openai.com/v1/engines/text-davinci-002/completions', { prompt: this.prompt }, { headers })
    .subscribe(data => {
      // Handle the response from the API
      this.response = data.choices[0].text;
      console.log(data.choices[0].text);
    });

  }

  regenerativeCall(): void {
    // Make another POST request to the OpenAPI API
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer yourKey')
    .set('Content-Type', 'application/json');
    this.http.post<any>('https://api.openai.com/v1/engines/text-davinci-002/completions?Content-Type=application/json', { prompt: this.prompt }, { headers })
    .subscribe(data => {
      // Update the response from the API
      this.response = data.choices[0].text;
      console.log(data.choices[0].text);
    });
}
}
