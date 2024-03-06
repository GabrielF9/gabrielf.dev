import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Teste Hand Talk</title>
      </Head>

      <h1>Testando hand talk</h1>
      <p>
        Eiusmod magna ea aute do cillum incididunt ullamco do voluptate quis
        commodo reprehenderit amet.
      </p>

      <script
        src="https://plugin.handtalk.me/web/latest/handtalk.min.js"
        async
      ></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `window.onload = function () {
          window.ht = new HT({
            token: "60bd6bbdd8bafe72d88f6864bbfcb7f7",
            avatar: "HUGO",
            maxTextSize: 800,
          });
        };`,
        }}
      ></script>
    </>
  );
};

export default HomePage;
