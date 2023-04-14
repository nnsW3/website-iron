import {
  Box,
  Flex,
  Hero,
  HeroImageUtil,
  LocalImage,
} from '@ironfish/website/ui';
import { NewsletterSignUp } from '../../../components/NewsletterSignUp/NewsletterSignUp';
import eel from '../../../assets/heroImages/wallet/eel.svg';
import octopus from '../../../assets/heroImages/wallet/octopus.svg';
import wallet from '../../../assets/heroImages/wallet/wallet.svg';
import { WalletUIImage } from '../../../components/WalletUIImage/WalletUIImage';
import { useIsClient } from 'usehooks-ts';

const eelImage = eel as LocalImage;
const octopusImage = octopus as LocalImage;
const walletImage = wallet as LocalImage;

export default function Wallet() {
  const isClient = useIsClient();
  return (
    <Box bg="orange.500">
      <Hero
        bg="orange.500"
        heading="Wallet"
        subheading="Built for everyone"
        description="Our desktop wallet is launching soon! Sign up for our newsletter to be informed for its launch."
        borderBottom="none"
        textContainerProps={{
          pb: {
            base: '48px',
            md: '48px',
          },
        }}
        images={
          <>
            <HeroImageUtil
              image={eelImage}
              top={{
                md: '0px',
                xl: '20px',
              }}
              left={{
                md: '-120px',
                xl: '30px',
                '2xl': `calc(50vw - 700px)`,
              }}
            />
            <HeroImageUtil
              image={walletImage}
              bottom={{
                md: '20px',
                xl: '15px',
              }}
              left={{
                md: '-50px',
                xl: '-20px',
                '2xl': `calc(50vw - 850px)`,
              }}
            />
            <HeroImageUtil
              image={octopusImage}
              top={{
                md: '20px',
                xl: '85px',
              }}
              right={{
                md: '-120px',
                xl: '-20px',
                '2xl': `calc(50vw - 700px)`,
              }}
            />
          </>
        }
      >
        <Flex mb="64px" justifyContent="center">
          <NewsletterSignUp bordered />
        </Flex>
      </Hero>
      <Box px={8}>{isClient && <WalletUIImage />}</Box>
    </Box>
  );
}