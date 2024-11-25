import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  templateUrl: './typing-effect.component.html',
  styleUrls: ['./typing-effect.component.css']
})
export class TypingEffectComponent implements OnInit {
  text = "Hello, I'm Prakriti Patnaik!";
  typedText = '';
  typingSpeed = 80;
  i = 0;

  ngOnInit(): void {
      this.typeText();
  }

  typeText(): void {
    if (this.i < this.text.length) {
      this.typedText += this.text.charAt(this.i);
      this.i++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }
}
