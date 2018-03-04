export class Options {
  private _baseBackgroundColor: string = '#fcfcfc';
  private _baseColorFocusIn: string = 'blue';
  private _baseColorFocusOut: string = '#dcdcdc';
  private _baseColorSelected: string = 'green';
  private _baseColorText: string = 'text';
  private _baseDisabled: boolean = false;
  private _baseMultiple: boolean = true;

  accept: string = null;
  backgroundColor: string = null;
  // border color when the input is focus or not
  colorFocusIn: string = null;
  colorFocusOut: string = null;
  // background color used for tokens selected in the options list
  colorSelected: string = null;
  colorText: string = null;
  disabled: boolean = null;
  // specify the input type (file, number, text, ...)
  inputType: string = null;
  // can we select multiple tokens? ('true' or 'false' as a string)
  multiple: boolean = null;
  // by default the input is a text one so tokens are seperate by space
  // if you want to be able to take tokens with space we can use the textarea
  // to seperate tokens with carriage return
  // TODO: later on i want to catch the user input event and personalize the ux
  textarea: boolean = null;
  // each key represent a possible value the content of the key is emitted if specified
  tokens: any[] = null;
  value: any = null;

  private _setIfUnset(key: string, value: any): boolean {
    if (this[key] === null) {
      this[key] = value;
      return true;
    }
    return false;
  }

  setBaseOptions(): void {
    this._setIfUnset('backgroundColor', this._baseBackgroundColor);
    this._setIfUnset('colorFocusIn', this._baseColorFocusIn);
    this._setIfUnset('colorFocusOut', this._baseColorFocusOut);
    this._setIfUnset('colorSelected', this._baseColorSelected);
    this._setIfUnset('colorText', this._baseColorText);
    this._setIfUnset('disabled', this._baseDisabled);
    this._setIfUnset('multiple', this._baseMultiple);
  }

  setFromObject(options: any): void {
    if (typeof(options) === 'object') {
      Object.keys(options).forEach(option => {
        if (!this._setIfUnset(option, options[option])) {
          options[option] = this[option];
        }
      });
    }
    this.setBaseOptions();
  }
}
