import {serve} from "https://deno.land/std@0.181.0/http/server.ts"

serve((req) => new Response("HOLA"), {port: 8080});
serve((req) => new Response("BRO"), {port: 8081});