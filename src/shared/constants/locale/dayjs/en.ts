import type ILocale from './interface';

/**
 * Represents the English locale configuration for the picker.
 */
export default {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months:
    'January_February_March_April_May_June_July_August_September_October_November_December'.split(
      '_',
    ),
  ordinal: function (e: number) {
    const n = ['th', 'st', 'nd', 'rd'],
      t = e % 100;
    return '[' + e + (n[(t - 20) % 10] || n[t] || n[0]) + ']';
  },
} as ILocale;
