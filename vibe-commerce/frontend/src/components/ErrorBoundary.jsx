import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-center">
          <h2 className="text-lg font-medium mb-2">Something went wrong</h2>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 border border-black text-sm hover:bg-gray-100"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}