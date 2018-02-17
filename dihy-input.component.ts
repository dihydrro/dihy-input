import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'dihy-input',
  templateUrl: './dihy-input.component.html',
  styleUrls: ['./dihy-input.component.css']
})
export class DihyInputComponent implements OnInit {
  private _objectKeys: Function = Object.keys;
  private _textFocus: string = '#dcdcdc';
  private _showOptions: boolean = false;

  @Input() colorSelect: string = 'green';
  @Input() inputFile: boolean = false;
  @Input() label: string;
  @Input() multiple: string = 'true';
  @Input() placeholder: string;
  @Input() type: string;
  @Input() tokenfields: any[];

  @Output() tokensSelectedChange: EventEmitter<string[]> = new EventEmitter;
  private _tokensSelected: string[] = [];

  constructor() { }

  ngOnInit() { }


  addTokenfield(tokenfield: string, simpleAdd: boolean = true): void {
    if (!this.isSelected(tokenfield)) {
      if (this.multiple == 'false')
        this._tokensSelected = [];
      this._tokensSelected.push(tokenfield);
      if (simpleAdd)
        this.emitSelectedTokens();
    } else if (!this.type)
      this.deleteTokenfield(tokenfield);
  }

  deleteTokenfield(tokenfield: string): void {
    this._tokensSelected = this._tokensSelected.filter(token => {
      return token == tokenfield ? false : true;
    });
    this.emitSelectedTokens();
  }

  emitSelectedTokens(): void {
    let selectedTokens = [];

    this._tokensSelected.forEach(token => {
      if (this.tokenfields)
        selectedTokens.push(this.tokenfields[token]);
      else
        selectedTokens.push(token);
    });
    this.tokensSelectedChange.emit(selectedTokens);
  }

  isSelected(tokenfield: string) {
    var findToken = (selected) => {
      return selected == tokenfield ? true : false
    }
    if (this._tokensSelected.find(findToken) == undefined)
      return false;
    return true;
  }

  isShownOptions() {
    if (this.type)
      return false;
    if (this._showOptions)
      return true;
    return false;
  }

  hideOptions(): void {
    this._showOptions = false;
  }

  textChange(change): void {
    change.srcElement.value.split(' ').forEach(token => {
      this.addTokenfield(token, false);
    });
    this.emitSelectedTokens();
    change.srcElement.value = "";
  }

  textFocusOut(): void {
    this._textFocus = '#dcdcdc';
  }

  tokenfieldClick(event): void {
    if (this.type == 'text') {
      event.srcElement.nextElementSibling.focus();
      this._textFocus = 'blue';
    } else if (this.tokenfields)
      this._showOptions = !this._showOptions;
    else
      (<HTMLElement>document.querySelector('#fileInput')).click();
  }

}
