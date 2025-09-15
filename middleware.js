// middleware.js
import { NextResponse } from "next/server";

export default function middleware(req, res, next){
    // Middleware logic can be added here if needed in the future

    return NextResponse.next();
}