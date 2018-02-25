import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import { Options }  from './model/options';

@Component({
  'selector': 'dihy-input',
  'templateUrl': './dihy-input.component.html',
  'styleUrls': ['./dihy-input.component.css']
})
export class DihyInputComponent implements OnInit {
  // base value for options
  private _baseBackgroundColor: string = '#fcfcfc';
  private _baseColorFocusIn: string = 'blue';
  private _baseColorFocusOut: string = '#dcdcdc';
  private _baseColorSelect: string = 'green';
  private _baseColorText: string = 'black';
  private _baseMultiple: string = 'true';
  private _baseTextarea: boolean = false;
  private _baseInputType: string = 'text';
  // define input border color
  private _inputBorderColor: string;
  private _inputStyles;
  // access object.keys into html
  private _objectKeys: Function = Object.keys;
  // display options div
  private _showTokensPropose: boolean = false;

  // each of the Input here can be defined from the options Input below
  @Input() options;
  @Input() backgroundColor: string;
  // border color when the input is focus or not
  @Input() colorFocusIn: string;
  @Input() colorFocusOut: string;
  // background color used for tokens selected in the options list
  @Input() colorSelect: string;
  @Input() colorText: string;
  @Input() label: string;
  // can we select multiple tokens? ('true' or 'false' as a string)
  @Input() multiple: string;
  @Input() placeholder: string;
  // by default the input is a text one so tokens are seperate by space
  // if you want to be able to take tokens with space we can use the textarea
  // to seperate tokens with carriage return
  // TODO: later on i want to catch the user input event and personalize the ux
  @Input() textarea: boolean;
  // each key represent a possible value the content of the key is emitted if specified
  @Input() tokens: any[];
  // specify the input type (file, number, text, ...)
  @Input() inputType: string;

  @Output() tokensSelectedChange: EventEmitter<string[]> = new EventEmitter;
  private _tokensSelected: string[] = [];

  constructor() {
    this.backgroundColor = this._baseBackgroundColor;
    this.colorFocusIn = this._baseColorFocusIn;
    this.colorFocusOut = this._baseColorFocusOut;
    this.colorSelect = this._baseColorSelect;
    this.colorText = this._baseColorText;
    this.multiple = this._baseMultiple;
    this.textarea = this._baseTextarea;
    this.inputType = this._baseInputType;
  }

  ngOnInit() {
    this._inputStyles = {};
    if (typeof(this.options) === 'object') {
      Object.keys(new Options()).forEach(option => {
        if (this.options[option]) {
          this[option] = this.options[option];
        }
      });
    }
    this._inputBorderColor = this.colorFocusOut;
  }


  addToken(token: string, simpleAdd: boolean = true): void {
    if (!this.isSelected(token)) {
      if (this.multiple === 'false') {
        this._tokensSelected = [];
      }
      this._tokensSelected.push(token);
      if (simpleAdd) {
        this.emitSelectedTokens();
      }
    } else if (this.inputType === 'none') {
      this.deleteToken(token);
    }
  }

  cancelFilter(): void {
    this._tokensSelected = [];
    this.emitSelectedTokens();
  }

  deleteToken(toDel: string): void {
    this._tokensSelected = this._tokensSelected.filter(token => {
      return token === toDel ? false : true;
    });
    this.emitSelectedTokens();
  }

   displayCancel(inputType: string): boolean {
    if (this.textarea && inputType !== 'textarea') {
      return false;
    }
    if (!this.textarea && inputType !== 'text') {
      return false;
    }
    if (this._tokensSelected.length && this.multiple === 'true') {
      return true;
    }
    return false;
  }

  emitSelectedTokens(): void {
    const selectedTokens = [];

    this._tokensSelected.forEach(token => {
      if (this.tokens) {
        selectedTokens.push(this.tokens[token]);
      } else {
        selectedTokens.push(token);
      }
    });
    this.tokensSelectedChange.emit(selectedTokens);
  }

  inputClick(event): void {
    if (this.inputType === 'text') {
      event.srcElement.nextElementSibling.focus();
      this._inputBorderColor = this.colorFocusIn;
    } else if (this.tokens) {
      this._showTokensPropose = !this._showTokensPropose;
    } else {
      (<HTMLElement>document.querySelector('#fileInput')).click();
    }
  }

  inputFocusOut(): void {
    this._inputBorderColor = this.colorFocusOut;
  }

  isSelected(token: string): boolean {
    const findToken = (selected) => {
      return selected === token ? true : false;
    };
    if (this._tokensSelected.find(findToken) === undefined) {
      return false;
    }
    return true;
  }

  isShownOptions() {
    if (this.inputType) {
      return false;
    }
    if (this._showTokensPropose) {
      return true;
    }
    return false;
  }

  showInputText(): boolean {
    if (this.textarea) {
      return false;
    }
    if (this.inputType === 'file' || this.inputType === 'none') {
      return false;
    }
    return true;
  }

  textChange(change): void {
    const splitSeparator: string = this.textarea ? '\n' : ' ';

    change.srcElement.value.split(splitSeparator).forEach(token => {
      token = token.trim();
      if (token) {
        this.addToken(token, false);
      }
    });
    this.emitSelectedTokens();
    change.srcElement.value = '';
  }
}
