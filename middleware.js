// Vercel Edge Middleware — HTTP Basic Auth for the admin portal.
//
// Credentials are read from environment variables (never hardcoded):
//   ADMIN_USERNAME
//   ADMIN_PASSWORD
//
// Configure them in Vercel → Project → Settings → Environment Variables,
// then redeploy. See README for the full setup.

export const config = {
  matcher: ['/admin', '/admin.html', '/admin/:path*'],
};

export default function middleware(request) {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPass = process.env.ADMIN_PASSWORD;

  if (!expectedUser || !expectedPass) {
    return new Response(
      'Admin portal is not configured.\n\n' +
        'Set ADMIN_USERNAME and ADMIN_PASSWORD in\n' +
        'Vercel → Project → Settings → Environment Variables, then redeploy.',
      {
        status: 503,
        headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
      }
    );
  }

  const header = request.headers.get('authorization') || '';
  if (header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice(6).trim());
      const sep = decoded.indexOf(':');
      if (sep > -1) {
        const user = decoded.slice(0, sep);
        const pass = decoded.slice(sep + 1);
        if (timingSafeEqual(user, expectedUser) && timingSafeEqual(pass, expectedPass)) {
          return;
        }
      }
    } catch {
      // fall through to 401
    }
  }

  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'www-authenticate': 'Basic realm="HireNeuronX Admin", charset="UTF-8"',
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return result === 0;
}
