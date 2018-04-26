import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { FileService } from './service/file.service';

@Component({
  'selector': 'dihy-input-file',
  'templateUrl': './dihy-input-file.component.html',
  'styleUrls': ['./dihy-input-file.component.css'],
  'providers': [FileService]
})
export class DihyInputFileComponent {
  private _fileService: FileService = new FileService();
  private _inputID: string = this._getNewInputID();

  @Input() accept: string = '*';
  @Input() multiple: boolean = true;
  @Input() placeholder: string;

  @Output() valueChange: EventEmitter<any[]> = new EventEmitter();

  private _inputClick: boolean = false;
  @Output() inputClickChange: EventEmitter<boolean> = new EventEmitter(true);
  @Input() get inputClick(): boolean {
    return this._inputClick;
  }
  set inputClick(bool: boolean) {
    if (bool === true) {
      (<HTMLElement>document.querySelector('#' + this._inputID)).click();
    }
    this._inputClick = false;
    this.inputClickChange.emit(this._inputClick);
  }
  @Input() set givenFile(files: any[]) {
    this._fileService.unsetFiles();
    this._fileService.addFiles(files);
    this.tokens = this._fileService.filesname;
  }

  tokens: string[] = [];


  private _getNewInputID(): string {
    let index: number = 1;

    while (document.querySelector('#inputFile-' + index) !== null) {
      index++;
    }
    return 'inputFile-' + index;
  }

  addNewFiles(files): void {
    this._fileService.addFileList(files);
    this.tokens = this._fileService.filesname;
    this.valueChange.emit(this._fileService.fileList);
  }

  allowDrop(event): void {
    event.preventDefault();
  }

  onChange(change): void {
    this.addNewFiles(change.target.files);
    change.target.value = '';
  }

  onDrop(event): void {
    event.preventDefault();
    this.addNewFiles(event.dataTransfer.files);
  }

  tokensChange(change: string[]): void {
    this.tokens = change;
    this._fileService.fileList.forEach(file => {
      let found: boolean = false;

      this.tokens.forEach(token => {
        if (file.name === token) {
          found = true;
        }
      });
      if (!found) {
        this._fileService.deleteFileName(file.name);
      }
    });
    this.valueChange.emit(this._fileService.fileList);
  }
}
