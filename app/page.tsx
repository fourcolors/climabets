import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: '< Cat 3',
    },
    {
      label: '> Cat 4',
      // action: 'tx',
      // label: 'Send Base Sepolia',
      // target: `${NEXT_PUBLIC_URL}/api/tx`,
      // postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/h.png`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'zizzamia.xyz',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>zizzamia.xyz</h1>
    </>
  );
}
