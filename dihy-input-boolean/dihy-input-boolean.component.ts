import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  'selector': 'dihy-input-boolean',
  'templateUrl': './dihy-input-boolean.component.html',
  'styleUrls': ['./dihy-input-boolean.component.css']
})
export class DihyInputBooleanComponent implements OnInit {
  private _baseDisabled: boolean = false;
  private _baseValue: boolean = true;

  @Input() disabled: boolean = null;
  @Input() placeholder: string;
  @Input() value: boolean = null;

  private _inputClick: boolean = false;
  @Output() inputClickChange: EventEmitter<boolean> = new EventEmitter();
  @Input() get inputClick(): boolean {
    return this._inputClick;
  }
  set inputClick(bool: boolean) {
    if (bool === true) {
      this._myEl.nativeElement.querySelector('input').click();
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
}
