/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface TaroAudio {
    'controls': boolean;
    'loop': boolean;
    'src': string;
  }
  interface TaroBlock {}
  interface TaroButton {
    'class': string;
    'disabled': boolean;
    'hoverClass': string;
    'hoverStartTime': number;
    'hoverStayTime': number;
    'loading': boolean;
    'plain': boolean;
    'size': string;
    'type': string;
  }
  interface TaroCamera {}
  interface TaroInput {
    'confirmType': string;
    'disabled': boolean;
    'maxLength': number;
    'password': string;
    'placeholder': string;
    'type': string;
    'value': string;
  }
}

declare global {


  interface HTMLTaroAudioElement extends Components.TaroAudio, HTMLStencilElement {}
  var HTMLTaroAudioElement: {
    prototype: HTMLTaroAudioElement;
    new (): HTMLTaroAudioElement;
  };

  interface HTMLTaroBlockElement extends Components.TaroBlock, HTMLStencilElement {}
  var HTMLTaroBlockElement: {
    prototype: HTMLTaroBlockElement;
    new (): HTMLTaroBlockElement;
  };

  interface HTMLTaroButtonElement extends Components.TaroButton, HTMLStencilElement {}
  var HTMLTaroButtonElement: {
    prototype: HTMLTaroButtonElement;
    new (): HTMLTaroButtonElement;
  };

  interface HTMLTaroCameraElement extends Components.TaroCamera, HTMLStencilElement {}
  var HTMLTaroCameraElement: {
    prototype: HTMLTaroCameraElement;
    new (): HTMLTaroCameraElement;
  };

  interface HTMLTaroInputElement extends Components.TaroInput, HTMLStencilElement {}
  var HTMLTaroInputElement: {
    prototype: HTMLTaroInputElement;
    new (): HTMLTaroInputElement;
  };
  interface HTMLElementTagNameMap {
    'taro-audio': HTMLTaroAudioElement;
    'taro-block': HTMLTaroBlockElement;
    'taro-button': HTMLTaroButtonElement;
    'taro-camera': HTMLTaroCameraElement;
    'taro-input': HTMLTaroInputElement;
  }
}

declare namespace LocalJSX {
  interface TaroAudio {
    'controls'?: boolean;
    'loop'?: boolean;
    'onEnded'?: (event: CustomEvent<any>) => void;
    'onError'?: (event: CustomEvent<any>) => void;
    'onPause'?: (event: CustomEvent<any>) => void;
    'onPlay'?: (event: CustomEvent<any>) => void;
    'onTimeupdate'?: (event: CustomEvent<any>) => void;
    'src'?: string;
  }
  interface TaroBlock {}
  interface TaroButton {
    'class'?: string;
    'disabled'?: boolean;
    'hoverClass'?: string;
    'hoverStartTime'?: number;
    'hoverStayTime'?: number;
    'loading'?: boolean;
    'onClick'?: (event: CustomEvent<any>) => void;
    'onTouchend'?: (event: CustomEvent<any>) => void;
    'onTouchstart'?: (event: CustomEvent<any>) => void;
    'plain'?: boolean;
    'size'?: string;
    'type'?: string;
  }
  interface TaroCamera {}
  interface TaroInput {
    'confirmType'?: string;
    'disabled'?: boolean;
    'maxLength'?: number;
    'onBlur'?: (event: CustomEvent<any>) => void;
    'onChange'?: (event: CustomEvent<any>) => void;
    'onConfirm'?: (event: CustomEvent<any>) => void;
    'onFocus'?: (event: CustomEvent<any>) => void;
    'onInput'?: (event: CustomEvent<any>) => void;
    'onKeydown'?: (event: CustomEvent<any>) => void;
    'password'?: string;
    'placeholder'?: string;
    'type'?: string;
    'value'?: string;
  }

  interface IntrinsicElements {
    'taro-audio': TaroAudio;
    'taro-block': TaroBlock;
    'taro-button': TaroButton;
    'taro-camera': TaroCamera;
    'taro-input': TaroInput;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'taro-audio': LocalJSX.TaroAudio & JSXBase.HTMLAttributes<HTMLTaroAudioElement>;
      'taro-block': LocalJSX.TaroBlock & JSXBase.HTMLAttributes<HTMLTaroBlockElement>;
      'taro-button': LocalJSX.TaroButton & JSXBase.HTMLAttributes<HTMLTaroButtonElement>;
      'taro-camera': LocalJSX.TaroCamera & JSXBase.HTMLAttributes<HTMLTaroCameraElement>;
      'taro-input': LocalJSX.TaroInput & JSXBase.HTMLAttributes<HTMLTaroInputElement>;
    }
  }
}


