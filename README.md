# sec-posture-analyzer
Advanced Password Security Analyzer — a web app with a Python backend that evaluates passwords across multiple cybersecurity criteria, flags vulnerabilities, estimates crack time, and assigns a clear threat level with actionable recommendations.

What it doesBasic Strength Grading (if/elif/else):

CRITICAL: < 8 chars
WEAK: 8–11 chars, only letters
MODERATE: 12–15 chars with mixed case + numbers
STRONG: 16+ chars with mixed case, numbers, symbols
FORTRESS: 20+ chars with all character types and no dictionary words

Vulnerability Detection (nested ifs):
Username/email substrings (case-insensitive)
Common patterns: 123, abc, qwerty, password
Keyboard runs: asdf, zxcv, 1234567890
Date patterns: 2023, 2024, current year
Optional cross-check against a common-passwords list

Threat Level Assignment (complex elif chain):
MAXIMUM: any critical weakness or < 8 chars
HIGH: ≥ 2 vulnerabilities or weak strength
MEDIUM: 1 vulnerability and moderate strength
LOW: strong strength, no vulnerabilities
MINIMAL: fortress strength, no vulnerabilities

Breach Risk & Crack Time (if/else + math):
Estimates based on length and character set size
Survival checks against brute-force, dictionary, and hybrid attacks
