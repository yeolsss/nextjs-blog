import { Asset, AssetLink } from 'contentful';

export interface IContentfulImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function parseContentfulContentImage(
  asset?: Asset<undefined, string> | { sys: AssetLink },
): IContentfulImage | null {
  if (!asset || !('fields' in asset)) return null;

  return {
    src: asset.fields.file?.url || '',
    alt: asset.fields.description || '',
    width: asset.fields.file?.details?.image?.width || 0,
    height: asset.fields.file?.details?.image?.height || 0,
  };
}
