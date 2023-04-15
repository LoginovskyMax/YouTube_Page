import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/youtube/services/data.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
  })
export class SettingsButtonComponent implements OnInit {
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

  public showSortBlock(): void {
    this.data.showSettings();
  }
}
