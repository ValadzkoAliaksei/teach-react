import React from 'react';

type ErrorBoundaryStateType = {
  hasError: boolean;
};

type ErrorBoundaryPropsType = {
  children: JSX.Element;
};

interface Error {
  stack?: string;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
  constructor(props: ErrorBoundaryPropsType) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
  // this.setState({ hasError: true });
  // }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>Что-то пошло не так.</h1>;
    }

    return children;
  }
}
