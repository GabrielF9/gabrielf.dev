import Head from 'next/head';
import styled from 'styled-components';

const IframeContainer = styled.div`
  width: 500px;
  height: 500px;
`;

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

      <IframeContainer>
        <iframe
          src="https://s1.gabrielf.dev"
          width="100%"
          height="100%"
        ></iframe>
      </IframeContainer>
    </>
  );
};

export default HomePage;
