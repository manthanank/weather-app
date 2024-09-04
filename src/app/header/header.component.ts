import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  refresh() {
    // Implement your refresh logic here
    console.log('Refresh button clicked');
    // Example: Reload the current page
    window.location.reload();
  }

  share() {
    // Implement your share logic here
    console.log('Share button clicked');
    // Example: Share the current URL
    if (navigator.share) {
      navigator.share({
        title: 'Weather App',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch(console.error);
    } else {
      console.log('Share not supported on this browser');
    }
  }
}
