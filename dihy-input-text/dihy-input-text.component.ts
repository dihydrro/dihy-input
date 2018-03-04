import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  'selector': 'dihy-input-text',
  'templateUrl': './dihy-input-text.component.html',
  'styleUrls': [
    './dihy-input-text.component.css',
    '../dihy-input.component.css'
  ]
})
export class DihyInputTextComponent implements OnInit {
  private _baseDisabled: boolean = false;
  private _baseMultiple: boolean = true;
  private _basePossibleTokens: string[] = [];
  private _baseSplit: string = '';
  private _baseToken: boolean = false;
  private _baseValue: string[] = [];

  @Input() disabled: boolean = null;
  @Input() multiple: boolean = null;
  @Input() placeholder: string;
  @Input() possibleTokens: string[] = null;
  @Input() split: string = null;
  @Input() token: boolean = null;
  @Input() value: any = null;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  private _inputClick: boolean = false;
  @Output() inputClickChange: EventEmitter<boolean> = new EventEmitter();
  @Input() get inputClick(): boolean {
    return this._inputClick;
  }
  set inputClick(bool: boolean) {
    if (bool === true) {
      this._myEl.nativeElement.querySelector('input').focus();
    }
    this._inputClick = bool;
    this.inputClickChange.emit(this._inputClick);
  }


  constructor(private _myEl: ElementRef) { }

  ngOnInit() {
    this._setBaseOptions();
  }


  private _setBaseOptions(): void {
    this._setIfUnset('disabled', this._baseDisabled);
    this._setIfUnset('multiple', this._baseMultiple);
    this._setIfUnset('possibleTokens', this._basePossibleTokens);
    this._setIfUnset('split', this._baseSplit);
    this._setIfUnset('token', this._baseToken);
    this._setIfUnset('value', this._baseValue);
    if (!this.token) {
      this._myEl.nativeElement.querySelector('input').value = this.value;
    }
  }

  private _setIfUnset(key: string, value: any): boolean {
    if (this[key] === null) {
      this[key] = value;
      return true;
    }
    return false;
  }

  addValue(val: string): void {
    if (this.multiple === false) {
      this.value = [];
    }
    this.value.push(val);
  }

  cancelInput(): void {
    if (!this.token) {
      this._myEl.nativeElement.querySelector('input').value = '';
    }
    this.value = [];
    this.valueChange.emit(this.value);
  }

  inputFocusOut(): void {
    this.inputClick = false;
  }

  onChange(change): void {
    if (this.token) {
      change.target.value.split(this.split).forEach(val => {
        val = val.trim();
        if (val) {
          this.addValue(val);
        }
      });
      change.target.value = '';
    } else {
      this.value = change.target.value.trim();
    }
    this.valueChange.emit(this.value);
  }

  tokensChange(change): void {
    this.value = change;
    this.valueChange.emit(this.value);
  }
}
