import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  scrollTo(element: HTMLElement) {
    const yOffset = 200; // adjust this based on your navbar height (e.g. -80 or -90 for margin)

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
