import { ImageEndpoints } from 'utils/constants/ImageEndpoints';

export const ThumbImageHelper = (fileName) => {
  return `${ImageEndpoints.THUMB}/${fileName}`;
}

export const FullImageHelper = (fileName) => {
  return `${ImageEndpoints.FULL}/${fileName}`;
  
}