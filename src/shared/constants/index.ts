export * from './api';
export * from './link';
export * from './locale';
export * from './metadata';
/**
 * The key used for user authentication.
 */
export const KEY_USER = 'm8nvn*&hKwcgb^D-D#Hz^5CXfKySpY';
/**
 * The key token used for authentication.
 */
export const KEY_TOKEN = KEY_USER + '1c82558a-29e2-42ba-b14a-47544a4542d7';
/**
 * The refresh token key used for authentication.
 */
export const KEY_REFRESH_TOKEN = KEY_USER + '15c665b7-592f-4b60-b31f-a252579a3bd0';
/**
 * The name of the application.
 */
export const APP_NAME = process.env.APP_NAME;
/**
 * The URL of the API endpoint.
 */
export const LINK_API = process.env.URL_API;
/**
 * The format of the date used in the application.
 */
export const FORMAT_DATE = process.env.FORMAT_DATE;

/**
 * Represents the constant value for full text search.
 */
export const FULL_TEXT_SEARCH = 'fullTextSearch';

/**
 * The temporary key used for something.
 */
export const KEY_TEMP = 'fbb36f54-abcb-4674-9635-b4b57ccf2e49';
