export interface MediaQuery {
  MOBILE_S: number;
  MOBILE: number;
  TABLET: number;
  LAPTOP: number;
  LAPTOP_L: number;
}

export interface DeviceSize {
  MOBILE_S: string;
  MOBILE: string;
  TABLET: string;
  LAPTOP: string;
  LAPTOP_L: string;
}

export const MEDIA_QUERY: MediaQuery = {
  MOBILE_S: 320,
  MOBILE: 425,
  TABLET: 768,
  LAPTOP: 1024,
  LAPTOP_L: 1280,
};

export const DEVICE_SIZE: DeviceSize = {
  MOBILE_S: `(min-width: ${MEDIA_QUERY.MOBILE_S}px)`,
  MOBILE: `(min-width: ${MEDIA_QUERY.MOBILE}px)`,
  TABLET: `(min-width: ${MEDIA_QUERY.TABLET}px)`,
  LAPTOP: `(min-width: ${MEDIA_QUERY.LAPTOP}px)`,
  LAPTOP_L: `(min-width: ${MEDIA_QUERY.LAPTOP_L}px)`,
};
