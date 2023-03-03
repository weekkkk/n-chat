export const API_URL = 'ws://localhost:4000/api/ws';

export function openWs() {
  const ws = new WebSocket(API_URL);

  ws.onopen = (event) => {
    console.log('onopen', event);
};

  ws.onclose = (event) => {
    console.log('onclose', event);
  };


  return ws;
}
