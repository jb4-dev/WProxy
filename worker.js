export default {
  async fetch(request, env, ctx) {
    try {
      // Extract URL parameter
      const url = new URL(request.url).searchParams.get("url");
      if (!url) {
        return new Response(JSON.stringify({ error: "Missing 'url' query parameter." }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Validate URL
      let target;
      try {
        target = new URL(url);
      } catch (err) {
        return new Response(JSON.stringify({ error: "Invalid URL provided." }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Clone request and forward headers/body
      const init = {
        method: request.method,
        headers: new Headers(request.headers),
      };

      if (request.method !== "GET" && request.method !== "HEAD") {
        init.body = request.body;
      }

      const response = await fetch(target.toString(), init);

      // Create response with security headers
      const proxiedResponse = new Response(response.body, response);
      proxiedResponse.headers.set("X-Powered-By", "PGN WProxy");
      proxiedResponse.headers.set("Access-Control-Allow-Origin", "*");
      proxiedResponse.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

      return proxiedResponse;
    } catch (error) {
      return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
