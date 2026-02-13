---
description: Build an ATS-Optimized Resume
---

# Build Optimized ATS Compatible Resume

This workflow guides you through creating an optimized resume using the FAANGPath template.

## Prerequisites
- User's professional history (experience, education, skills, projects).
- Target job description (optional, but recommended for optimization).

## Steps

### 1. Information Gathering
- [ ] Ask the user for their current resume or professional details.
- [ ] Ask for a target job description (if available).

### 2. Analysis & Strategy
- [ ] specific instructions: checking specific instruction in @[CV/Template] (if available).
- [ ] Analyze the user's experience against the target role (if provided).
- [ ] Identify key skills and keywords to highlight.
- [ ] Refine bullet points using "Action Verb + Task + Result" format.

### 3. Template Generation
- [ ] Use the `ats-resume-builder` skill to generate the `.tex` content.
- [ ] Ensure the structure matches the FAANGPath template.
- [ ] **Critical:** Provide the `resume.cls` file content if the user doesn't have it.

### 4. Review & Finalization
- [ ] Present the generated LaTeX code to the user.
- [ ] Advise the user on how to compile it (e.g., Overleaf, local LaTeX).
- [ ] Offer to refine specific sections based on user feedback.

## Next Steps
- Once the resume is finalized, suggest working on a cover letter.
