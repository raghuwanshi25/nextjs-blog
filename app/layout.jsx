import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
      </head>
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
