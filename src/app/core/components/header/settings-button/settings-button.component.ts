import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/youtube/Services/data.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent implements OnInit, OnDestroy {
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  showSortBlock() {
    this.data.showSettings();
  }

  ngOnDestroy(): void {

  }
}
