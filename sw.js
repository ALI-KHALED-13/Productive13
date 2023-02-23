const self = this;


self.addEventListener('install', (ev)=> {
  console.log('sw installed');
})

self.addEventListener('activate', (ev)=> {
  console.log('sw installed');
})

self.addEventListener('fetch', (ev)=> {
  console.log(ev);
})