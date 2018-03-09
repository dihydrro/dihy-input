import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  'selector': 'dihy-input-token',
  'templateUrl': './dihy-input-token.component.html',
  'styleUrls': ['./dihy-input-token.component.css']
})
export class DihyInputTokenComponent {
  private _baseColorSelect: string = 'green';
  private _baseMultiple: boolean = true;
  private _basePossibleTokens: any[] = [];
  private _baseTokens: string[] = [];
  private _objectKeys = Object.keys;

  @Input() colorSelected: string = null;
  @Input() inputType: string;
  @Input() multiple: boolean = null;
  @Input() placeholder: string;
  @Input() possibleTokens: any[] = null;
  @Input() tokens: string[] = null;

  @Output() tokensChange: EventEmitter<string[]> = new EventEmitter();

  private _inputClick: boolean = false;
  @Output() inputClickChange: EventEmitter<boolean> = new EventEmitter();
  @Input() get inputClick(): boolean {
    return this._inputClick;
  }
  set inputClick(bool: boolean) {
    this.showPossibleTokens = bool;
    this._inputClick = bool;
    this.inputClickChange.emit(this._inputClick);
  }

  showPossibleTokens: boolean = false;


  ngOnInit() {
    this._setBaseOptions();
  }


  private _setBaseOptions(): void {
    this._setIfUnset('colorSelect', this._baseColorSelect);
    this._setIfUnset('multiple', this._baseMultiple);
    this._setIfUnset('possibleTokens', this._basePossibleTokens);
    this._setIfUnset('tokens', this._baseTokens);
  }

  private _setIfUnset(key: string, value: any): boolean {
    if (this[key] === null) {
      this[key] = value;
      return true;
    }
    return false;
  }

  addToken(token: string): void {
    if (this.inputType === 'token') {
      if (this.isSelected(token)) {
        this.deleteToken(token);
      } else {
        if (this.multiple === false) {
          this.tokens = [];
        }
        this.tokens.push(token);
      }
    } else {
      this.tokens.push(token);
    }
    this.tokensChange.emit(this.tokens);
  }

  deleteToken(token: string, emit: boolean = true): void {
    this.tokens = this.filterToken(token);
    this.tokensChange.emit(this.tokens);
  }

  filterToken(filter: string): string[] {
    return this.tokens.filter(token => {
      if (token === filter) {
        return false;
      }
      return true;
    });
  }

  isSelected(isSel: string): boolean {
    const isSelected = this.tokens.filter(token => {
      return token === isSel ? true : false;
    });

    if (isSelected.length) {
      return true;
    }
    return false;
  }
}
