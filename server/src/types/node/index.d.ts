import fetch from "node-fetch";

declare global {
  namespace Node {
    interface Global {
      fetch: typeof fetch;
    }
  }
}
