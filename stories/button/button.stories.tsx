import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from '../../src/components/commons/button/Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Button 
      disabled={boolean('Disabled', false)}
      type={select('Type', ['default', 'subtle'])}>
    {text('Button text', 'Button')}
    </Button>
  ));