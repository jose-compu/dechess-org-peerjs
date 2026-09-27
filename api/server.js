import { createPeerServer } from 'peerjs-server-vercel';

const peer = await createPeerServer();

export const config = {
  maxDuration: 300
};

export default peer.httpServer;
