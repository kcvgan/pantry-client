import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import TextField from '../../src/components/commons/input/TextField';

storiesOf('Text Field', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <TextField 
    disabled={boolean('Disabled', false)}
    placeholder={text('Placeholder', 'Placeholder')} />
  ));
