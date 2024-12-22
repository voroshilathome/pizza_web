'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="987fc114eebb221c775c95e5a3f201ccbc35c03f"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};