import React from 'react'
import { Text } from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'

import styles from './styles'

const LastConverted = ({ date, base, quote, convertionRate }) => {
  convertDate = moment(date).format('DD MMM YYYY')
  return (
    <Text style={styles.smallText}>
      1 { base } = { convertionRate } { quote } as of { convertDate }
    </Text>
  )
}

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  convertionRate: PropTypes.number
}

export default LastConverted