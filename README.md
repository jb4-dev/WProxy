# PGN WProxy

PGN WProxy is a lightweight proxy service built on **Cloudflare Workers**. It allows you to forward HTTP requests to any target URL while adding security headers and CORS support.

---

## Features

* Simple query-based proxy (`?url=`)
* Forwards headers and body (supports all methods)
* Adds security and CORS headers automatically
* Built-in error handling
* Lightweight, serverless, and deployable on **Cloudflare Workers**

---

## Setup Instructions

### 1. Open Cloudflare Workers Dashboard

* Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
* Navigate to **Workers & Pages** > **Create application** > **Create Worker**

### 2. Replace Default Code

* Copy the contents of `proxy.js` (this repo) into the Cloudflare Workers editor.
* Save & Deploy.

### 3. Test Deployment

* After deployment, your Worker will have a URL like:

  ```
  https://your-worker-name.username.workers.dev
  ```
* Use it by passing a `url` parameter:

  ```
  https://your-worker-name.username.workers.dev?url=https://example.com
  ```

### 4. (Optional) Configure Custom Domain

* In the Worker settings, add a **Route** and bind it to your custom domain (e.g. `proxy.mydomain.com`).

---

## Usage Examples

### GET Request

```bash
curl "https://your-worker.workers.dev?url=https://jsonplaceholder.typicode.com/todos/1"
```

### POST Request

```bash
curl -X POST "https://your-worker.workers.dev?url=https://httpbin.org/post" \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello from PGN WProxy"}'
```

---

## Security Notes

* Always validate what URLs you allow. If deploying in production, consider restricting to specific domains.
* The Worker sets `Access-Control-Allow-Origin: *` by default. Modify this for stricter CORS control.

---

## License



Copyright 2025 PGN-Tech

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

