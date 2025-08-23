import type { FormApi, FormAsyncValidateOrFn, FormValidateOrFn } from '@tanstack/react-form';

export type TForm<T> = FormApi<
  T,
  FormValidateOrFn<T> | undefined,
  FormValidateOrFn<T> | undefined,
  FormAsyncValidateOrFn<T> | undefined,
  FormValidateOrFn<T> | undefined,
  FormAsyncValidateOrFn<T> | undefined,
  FormValidateOrFn<T> | undefined,
  FormAsyncValidateOrFn<T> | undefined,
  FormAsyncValidateOrFn<T> | undefined,
  unknown
>;
