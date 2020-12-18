import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cc-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {

  @Input()
  hide = false;

  @Output()
  hideChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.hide = true;
    this.hideChange.emit(this.hide);
  }
}
