import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './configs/routes';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#fff',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#f5f5f5',
  $darkText: '#343434'
})

export default () => <Navigator />