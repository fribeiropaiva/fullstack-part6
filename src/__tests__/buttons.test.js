import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react'
import { App } from '../App';

import counterReducer from '../reducer';
import { store } from '../App';

describe('feedback buttons', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  let component = null;

  beforeEach(() => {
    const action = {
      type: 'ZERO'
    }

    store.dispatch(action)

    component = render(
      <App />
    );
  })

  test('on good button click, it increments good feedback', async () => {
    const goodButton = component.getByText('good');
    fireEvent.click(goodButton);

    expect(store.getState()).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  });

  test('on ok button click, it increments ok feedback', async () => {
    const okButton = component.getByText('ok');
    fireEvent.click(okButton);

    expect(store.getState()).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })

  test('on bad button click, it increments bad feedback', async () => {
    const badButton = component.getByText('bad');
    fireEvent.click(badButton);

    expect(store.getState()).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })
})