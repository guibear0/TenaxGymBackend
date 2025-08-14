<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $origin = $request->headers->get('Origin');

        $response = $next($request);

        // Solo permitir tu frontend
        if (in_array($origin, ['http://localhost:5173', 'https://tenax-gym.vercel.app/'])) {
            $response->headers->set('Access-Control-Allow-Origin', $origin);
            $response->headers->set('Access-Control-Allow-Credentials', 'true');
            $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
        }

        // Responder OPTIONS para preflight
        if ($request->getMethod() === "OPTIONS") {
            $response->setStatusCode(200);
            return $response;
        }

        return $response;
    }
}
