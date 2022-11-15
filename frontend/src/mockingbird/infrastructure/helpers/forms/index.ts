import type { FieldErrors, FieldError } from 'react-hook-form';

export function extractError(name: string, errors: FieldErrors) {
  const error = errors[name];
  const errorMessage = getErrorMessage(error);
  if (!errorMessage) return null;
  return {
    error: true,
    errorMessage,
  };
}

function getErrorMessage(error: FieldError) {
  if (!error) return '';
  const { type, message } = error;
  switch (type) {
    case 'required':
      return 'Поле обязательное';
    case 'validate':
      return message;
  }
}

export function validateJSON(value: string) {
  const message = 'Невалидный json-объект';
  if (!value) return;
  try {
    if (!isObject(JSON.parse(value))) return message;
  } catch (e) {
    return message;
  }
}

export function validateJSONArray(value: string) {
  const message = 'Невалидный json-массив';
  if (!value) return;
  try {
    if (!Array.isArray(JSON.parse(value))) return message;
  } catch (e) {
    return message;
  }
}

function isObject(item: any) {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
}

export function mapSelectItem(value: string) {
  return {
    title: value,
    value,
  };
}

export function mapSelectValue(value: string | any) {
  return typeof value === 'string' ? value : value.value;
}
