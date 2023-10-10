import React from 'react';

export type WrapPageElementProps = {
  children: React.ReactNode;
};

export type NonNullableFields<T extends object> = {
  [K in keyof T]: NonNullable<T[K]>;
};

export type NonUndefinedFields<T extends object> = {
  [K in keyof T]-?: T[K];
};
