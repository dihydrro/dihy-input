import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  'selector': 'dihy-input-number',
  'templateUrl': './dihy-input-number.component.html',
  'styleUrls': ['./dihy-input-number.component.css']
})
export class DihyInputNumberComponent implements OnInit {
  private _baseDisabled: boolean = false;
  private _baseMaxVal: number = null;
  private _baseMinVal: number = null;
  private _baseValue: number = 0;
  private _timeoutHandler = null;

  @Input() disabled: boolean = null;
  @Input() maxVal: number = null;
  @Input() minVal: number = null;
  @Input() placeholder: string;
  @Input() value: number = null;

  @Output() valueChange: EventEmitter<number> = new EventEmitter();

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
    this._setIfUnset('value', this._baseValue);
  }

  private _setIfUnset(key: string, value: any): boolean {
    if (this[key] === null) {
      this[key] = value;
      return true;
    }
    return false;
  }

  checkNewValue(): void {
    if (this.value < this.minVal) {
      this.value = Number(this.minVal);
    } else if (this.value > this.maxVal) {
      this.value = Number(this.maxVal);
    }
  }

  changeValue(upper: boolean): void {
    this.value = upper ? ++this.value : --this.value;
    this.checkNewValue();
    this.valueChange.emit(this.value);
  }

  inputFocusOut(): void {
    this.inputClick = false;
  }

  mouseDown(upper: boolean): void {
    this.inputClick = true;
    if (this._timeoutHandler) {
      clearTimeout(this._timeoutHandler);
    }
    this._timeoutHandler = setInterval(() => {
      this.changeValue(upper);
    }, 100);
  }

  mouseUp(): void {
    this.inputFocusOut();
    clearTimeout(this._timeoutHandler);
    this._timeoutHandler = null;
  }

  onChange(change): void {
    this.value = Number(change.target.value);
    this.checkNewValue();
    this.valueChange.emit(this.value);
  }
}
