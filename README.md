# dechess-org-peerjs

Live PeerJS signaling server for dechess. The runtime is [`peerjs-server-vercel`](https://github.com/jose-compu/peerjs-server-vercel) 1.0.4, commit `16f1fb5`.

Production URL: `https://dechess-org-peerjs.vercel.app`

Signaling URL: `wss://dechess-org-peerjs.vercel.app/peerjs?key=peerjs`

This deployment uses the Vercel Hobby plan: Fluid compute, one Node function capped at 300 seconds, and the free Upstash Redis database. Postgres, Blob, Cron, and Queues are not used.

```js
const peer = new Peer({
  host: 'dechess-org-peerjs.vercel.app',
  port: 443,
  path: '/',
  secure: true,
  key: 'peerjs'
});
```
