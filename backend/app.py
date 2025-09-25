# backend/app.py
from typing import Any, Dict
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="sec-posture-analyzer (basic)")

# Allow your Next.js dev server to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # change for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/healthz")
def healthz():
    return {"status": "ok"}

# Accept ANY JSON and echo it back
@app.post("/api/analyze")
async def analyze(body: Dict[str, Any]):
    return {"ok": True, "received": body}