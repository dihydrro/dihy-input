import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  'selector': 'dihy-input',
  'templateUrl': './dihy-input.component.html',
  'styleUrls': ['./dihy-input.component.css']
})
export class DihyInputComponent implements OnInit {
  private _baseBackgroundColor: string = '#fcfcfc';
  private _baseBackgroundDisabled: string = '#eaeaea';
  private _baseColorFocusIn: string = 'blue';
  private _baseColorFocusOut: string = '#dcdcdc';
  private _baseColorSelected: string = 'green';
  private _baseColorText: string = 'black';

  // each of the Input here can be defined from the options Input below
  @Input() options;
  @Input() accept: string = null;
  @Input() backgroundColor: string = null;
  @Input() backgroundDisabled: string = null;
  @Input() colorFocusIn: string = null;
  @Input() colorFocusOut: string = null;
  @Input() colorSelected: string = null;
  @Input() colorText: string = null;
  @Input() disabled: boolean = null;
  @Input() inputType: string = null;
  @Input() label: string = null;
  @Input() max: number = null;
  @Input() min: number = null;
  @Input() multiple: boolean = null;
  @Input() placeholder: string = null;
  @Input() possibleTokens: string[] = null;
  @Input() split: string = null;
  @Input() textarea: boolean = null;
  @Input() token: boolean = null;
  @Input() tokens: any[] = null;
  @Input() value: any = null;

  @Output() valueChange: EventEmitter<string[]> = new EventEmitter;

  private _inputClick: boolean = false;
  @Output() inputClickChange: EventEmitter<boolean> = new EventEmitter();
  @Input() get inputClick(): boolean {
    return this._inputClick;
  }
  set inputClick(bool: boolean) {
    if (this.disabled) {
      return ;
    }
    if (bool === false) {
      this.inputBorderColor = this.colorFocusOut;
    } else {
      this.inputBorderColor = this.colorFocusIn;
    }
    this._inputClick = bool;
    this.inputClickChange.emit(this._inputClick);
  }

  inputBorderColor: string;
  inputBackgroundColor: string;


  ngOnInit() {
    this._setFromOptions(this.options);
  }


  private _setBaseOptions(): void {
    this._setIfUnset('backgroundColor', this._baseBackgroundColor);
    this._setIfUnset('backgroundDisabled', this._baseBackgroundDisabled);
    this._setIfUnset('colorFocusIn', this._baseColorFocusIn);
    this._setIfUnset('colorFocusOut', this._baseColorFocusOut);
    this._setIfUnset('colorSelected', this._baseColorSelected);
    this._setIfUnset('colorText', this._baseColorText);
    this.inputBorderColor = this.colorFocusOut;
    if (this.disabled) {
      this.inputBackgroundColor = this.backgroundDisabled;
    } else {
      this.inputBackgroundColor = this.backgroundColor;
    }
  }

  private _setFromOptions(options: any): void {
    if (typeof(options) === 'object') {
      Object.keys(options).forEach(option => {
        this._setIfUnset(option, options[option]);
      });
    }
    this._setBaseOptions();
  }

  private _setIfUnset(key: string, value: any): boolean {
    if (this[key] === null) {
      this[key] = value;
      return true;
    }
    return false;
  }

  onChange(change): void {
    this.valueChange.emit(change);
  }
}
