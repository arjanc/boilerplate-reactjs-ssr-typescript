import { css } from 'styled-components';

type MediaKeys = 'desktop' | 'tablet' | 'phone';
type Temp = { readonly [T in MediaKeys]?: any };

interface IMedia extends Temp {}

export enum sizes {
  desktop = 992,
  tablet = 768,
  phone = 576,
}

/**
 * Iterate through the sizes and create a media template
 *
 * Usage:
 *
 * ${media.desktop`background: blue;`}
 *
 */
export const media:IMedia = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args:any[]) => css`
    @media(min-width: ${sizes[label] / 16}em) {
    // @ts-ignore
    ${css(...args)}
    }
  `;

  return acc
}, {});