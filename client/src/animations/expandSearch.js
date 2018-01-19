import React from 'react';
import { Motion, spring, presets } from 'react-motion';

const expandSearch = Target => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { open: false };
    }

    onClick = () =>
      this.setState(prev => ({
        open: !prev.open,
      }));

    render() {
      const style = {
        width: this.state.open ? spring(60, presets.wobbly) : spring(11),
        opacity: this.state.open ? spring(1, presets.wobbly) : spring(0),
      };

      console.log(this.state.open);

      return (
        <Motion style={style}>
          {({ width, opacity }) => (
            <Target
              onFocus={this.onClick}
              onfocusout={this.onClick}
              width={width}
              opacity={opacity}
            />
          )}
        </Motion>
      );
    }
  };
};

export default expandSearch;
