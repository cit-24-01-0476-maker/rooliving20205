import React from "react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  message?: string;
  stack?: string;
};

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: unknown): State {
    const msg =
      error instanceof Error ? error.message : "Unknown error occurred";
    return { hasError: true, message: msg };
  }

  componentDidCatch(error: unknown) {
    // Console එකට full error එක යවනවා
    // eslint-disable-next-line no-console
    console.error("App crashed:", error);

    if (error instanceof Error) {
      this.setState({ stack: error.stack });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "#0a0a0a",
            color: "#f5f5f5",
            padding: "24px",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
          }}
        >
          <h2 style={{ marginBottom: 12 }}>Something went wrong ⚠️</h2>
          <p style={{ marginBottom: 12 }}>
            Error: <b>{this.state.message}</b>
          </p>

          <p style={{ marginBottom: 8, opacity: 0.85 }}>
            Fix idea (common): undefined <code>.map()</code> / wrong import /
            missing route component.
          </p>

          <details style={{ whiteSpace: "pre-wrap", opacity: 0.9 }}>
            <summary>Show stack</summary>
            {this.state.stack || "No stack available"}
          </details>

          <div style={{ marginTop: 16 }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: "#f97316",
                border: "none",
                padding: "10px 14px",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
