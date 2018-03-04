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

  @Input() accept: string = '*';
  @Input() multiple: boolean = true;
  @Input() placeholder: string;

  @Output() valueChange: EventEmitter<any[]> = new EventEmitter();

  private _inputClick: boolean = false;
  @Output() inputClickChange: EventEmitter<boolean> = new EventEmitter();
  @Input() get inputClick(): boolean {
    return this._inputClick;
  }
  set inputClick(bool: boolean) {
    if (bool === true) {
      (<HTMLElement>document.querySelector('#fileInput')).click();
    }
    this._inputClick = bool;
    this.inputClickChange.emit(this._inputClick);
  }

  tokens: string[] = [];


  private _deleteDuplicateFile(): void {
    this._fileService.fileList.forEach(file1 => {
      let found: boolean = false;

      this._fileService.fileList.forEach(file2 => {
        if (file1.name === file2.name) {
          if (found === true) {
            this._fileService.deleteFileName(file1.name);
            return ;
          }
          found = true;
        }
      });
    });
  }

  onChange(change): void {
    this._fileService.addFileList(change.target.files);
    this._deleteDuplicateFile();
    this.tokens = this._fileService.filesname;
    this.valueChange.emit(this._fileService.fileList);
    this.inputClick = false;
    change.target.value = '';
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
  }
}
