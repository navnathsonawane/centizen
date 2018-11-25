import { Component, ViewChild } from '@angular/core';
import { jsPlumb } from 'jsplumb';
import { DataModel } from './modal/data-model.component';

@Component({
  selector: 'centizen',
  templateUrl: './centizen.component.html',
  styleUrls: ['./centizen.component.css']
})
export class CentizenComponent {
  title = 'Exadatum';
  url = window.location.href;

  jsPlumbInstance;
  object = [];
  bodyText = '';
  @ViewChild('modalAdmin') modalAdmin;
  isChangeName = false;
  error = false;
  oldText = '';

  ngAfterViewInit() {
    this.jsPlumbInstance = jsPlumb.getInstance();
  }

  drop(ev) {
    ev.preventDefault();
    this.isChangeName = false;
    this.bodyText = '';
    this.modalAdmin.show();
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('elementId', ev.target.id);
  }

  saveValue() {
    if (this.bodyText) {
      this.error = false;
      if (!this.isChangeName) {
        const temp = new DataModel('drag' + (this.object.length + 1));
        temp.text = this.bodyText;
        this.object.push(temp);
        setTimeout(() => {
          this.connectSourceToTargetUsingJSPlumb();
        })
      } else {
        const temp = Object.keys(this.object).find(key => this.object[key]['text'] === this.oldText);
        this.object[temp]['text'] = this.bodyText;
      }
      this.bodyText = '';
      this.modalAdmin.hide();
    } else {
      this.error = true;
    }
  }

  close() {
    this.error = false;
    this.modalAdmin.hide();
  }

  connectSourceToTargetUsingJSPlumb() {
    this.jsPlumbInstance.reset();
    if (this.object.length > 1) {
      for (let index = 1; index <= this.object.length - 1; index++) {
        let positionStart = 'Right';
        let positionEnd = 'Left';
        if (index % 4 === 0) {
          positionStart = 'Bottom';
          positionEnd = 'Top';
        }
        this.jsPlumbInstance.connect({
          connector: ['Flowchart', { stub: [0, 0], cornerRadius: 1, alwaysRespectStubs: true }],
          source: this.object[index - 1].id,
          target: this.object[index].id,
          anchor: [positionStart, positionEnd],
          paintStyle: { stroke: '#456', strokeWidth: 4 }
        });
      }
    }
  }

  changeName(text) {
    this.bodyText = '';
    this.oldText = text;
    this.isChangeName = true;
    this.modalAdmin.show();
  }
}
