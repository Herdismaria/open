import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    return this.state.hasError ? (
      <h3>Úpps eitthvað fór úrskeiðis</h3>
    ) : (
      this.props.children
    );
  }
}
export default ErrorBoundary;
