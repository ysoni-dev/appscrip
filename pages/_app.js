import '../styles/globals.css';

const MyApp = ({ Component, pageProps, auth }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
