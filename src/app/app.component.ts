import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-app';

  constructor(private updates: SwUpdate, private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.updates.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        switchMap(() =>
          this.snackbar.open('Update available', 'Reload').afterDismissed()
        ),
        filter((action) => action.dismissedByAction),
        switchMap(() =>
          this.updates.activateUpdate().then(() => location.reload())
        )
      )
      .subscribe();
  }
}
