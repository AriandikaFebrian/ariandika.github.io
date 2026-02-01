# Hydration Fix Plan

## Task: Fix Initial Load Delay (Hydration Errors)

### Root Causes Identified:
1. `new Date().getFullYear()` in Footer.tsx - server/client mismatch
2. Components with Framer Motion, useState, useEffect need `'use client'` directive
3. Dynamic content causing hydration warnings

## Implementation Steps

### Step 1: Create ClientOnly Wrapper Component
- [x] Create `src/components/ClientOnly.tsx`

### Step 2: Fix Footer.tsx
- [x] Add `'use client'` directive
- [x] Fix `new Date().getFullYear()` hydration mismatch using useState/useEffect

### Step 3: Add 'use client' to Animation Components
- [x] Add `'use client'` to HeroSection.tsx
- [x] Add `'use client'` to AboutSection.tsx
- [x] Add `'use client'` to ProjectsSection.tsx
- [x] Add `'use client'` to ExperienceSection.tsx
- [x] Add `'use client'` to FloatingNav.tsx

### Step 4: Add Hydration Suppression
- [x] Add `suppressHydrationWarning` to body in index.html

### Step 5: Test & Deploy
- [ ] Run build to verify no errors
- [ ] Deploy to Vercel

