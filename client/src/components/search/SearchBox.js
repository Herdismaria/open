import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {  } from 'components'

import React from 'react'

class SearchBox extends React.Component {
  render () {
    return (
      <div></div>
    )
  }
}
export default SearchBox
function mapStateToProps (state, props) {
  return {
  }
}
function mapDispatchToProps (dispatch, props) {
  return bindActionCreators( , dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)()
