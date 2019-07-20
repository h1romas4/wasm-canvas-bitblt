# wasm-canvas-bitblt 🦀🕸

## build

Rust and [wasm-pack](https://rustwasm.github.io/wasm-pack) setup

```
rustup target add wasm32-unknown-unknown
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

Compile

```
git clone https://github.com/h1romas4/wasm-canvas-bitblt.git
cd wasm-canvas-bitblt
wasm-pack build
cd www
npm install
npm run start
```

## Run

```
http://localhost:8080/
```
