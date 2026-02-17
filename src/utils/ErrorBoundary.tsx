import { Component, type ErrorInfo, type ReactNode } from "react";

interface IProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(`${error}: ${errorInfo}`);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div>Упс! Похоже мы ошиблись... Уже работаем над исправлением</div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
