import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit {
  questions = [
    'Overall, I am satisfied with how easy it is to use this system.',
    'It was simple to use this system.',
    'I was able to complete the tasks and scenarios quickly using this system.',
    'I felt comfortable using this system.',
    'It was easy to learn to use this system.',
    'I believe I could become productive quickly using this system.',
    'The system gave error messages that clearly told me how to fix problems.',
    'Whenever I made a mistake using the system, I could recover easily and quickly.',
    'The information (such as online help, on-screen messages, and other documentation) provided with this system was clear.',
    'It was easy to find the information I needed.',
    'The information was effective in helping me complete the tasks and scenarios.',
    'The organization of information on the system screens was clear.',
    'The interface of this system was pleasant.',
    'I liked using the interface of this system.',
    'This system has all the functions and capabilities I expect it to have.',
    'Overall, I am satisfied with this system.',
  ];

  constructor() {}

  ngOnInit(): void {}

  onFeedbackSubmit(form: NgForm) {
    if (form.invalid) return;
    // TODO: SAVE FORM
    console.log(form.value);
    form.reset();
  }
}
