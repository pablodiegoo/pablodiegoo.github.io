---
name: ats-resume-builder
description: Comprehensive guide for creating ATS-optimized resumes using the LaTeX template. Use when Claude needs to: (1) Structure user experience for a resume, (2) Generate LaTeX code for a resume, (3) Optimize resume content for ATS (Applicant Tracking Systems), (4) Provide resume templates.
---

# ATS Resume Builder

This skill guides you through the process of creating a high-quality, ATS-friendly resume using the LaTeX template.

## When to Use This Skill

Use this skill when the user:
- Wants to create a new resume or update an existing one.
- Explicitly asks for an "ATS-friendly" or "FAANG" style resume.
- Needs to convert their resume data into a structured LaTeX format.
- Needs advice on how to phrase bullet points for maximum impact.

## Workflow

### 1. Analyze User Information

First, gather and analyze the user's professional information. If the user hasn't provided a current resume, ask for:
- Contact Information (Name, Phone, Email, LinkedIn, Github/Portfolio)
- Education (University, Degree, Graduation Date, GPA/Coursework if relevant)
- Skills (Technical, Soft, Tools/Frameworks)
- Professional Experience (Company, Role, Dates, Locations, Bullet points)
- Projects (Name, Description, Technologies used)

**Crucial Step:** Review the bullet points. Ensure they follow the "Action Verb + Task + Result" formula. If they don't, suggest rewrites or rewrite them (with user permission).

### 2. Map to Template Structure

The template uses the `resume.cls` class. Structure the data as follows:

#### Preamble & Contact
```latex
\name{Firstname Lastname}
\address{Phone \\ Location}
\address{\href{mailto:email}{email} \\ \href{linkedin_url}{linkedin} \\ \href{portfolio_url}{portfolio}}
```

#### Education
```latex
\begin{rSection}{Education}
{\bf Degree}, University \hfill {Date}\\
Relevant Coursework: A, B, C.
\end{rSection}
```

#### Skills
```latex
\begin{rSection}{SKILLS}
\begin{tabular}{ @{} >{\bfseries}l @{\hspace{6ex}} l }
Category & Item 1, Item 2, Item 3 \\
Category & Item 1, Item 2, Item 3 \\
\end{tabular}
\end{rSection}
```

#### Experience
```latex
\begin{rSection}{EXPERIENCE}
\textbf{Role} \hfill Dates\\
Company \hfill \textit{Location}
 \begin{itemize}
    \itemsep -3pt {}
     \item Action verb... resulting in...
     \item Led... which improved...
 \end{itemize}
\end{rSection}
```

#### Projects
```latex
\begin{rSection}{PROJECTS}
\vspace{-1.25em}
\item \textbf{Project Name.} {Description... \href{link}{(Try it here)}}
\end{rSection}
```

### 3. Generate Output

Provide the user with two files:
1.  **`resume.tex`**: The content file containing their specific data.
2.  **`resume.cls`**: The class file (located in `assets/resume.cls`), which is required to compile the `.tex` file.

**Important:** ALWAYS check if the user has the `resume.cls` file. If not, provide it. The `.tex` file WILL NOT COMPILE without it.

## ATS Optimization Guidelines

- **Simplicity is Key:** The template is designed to be parsed easily. Do not add columns, graphics, or icons that aren't in the template.
- **Keywords:** Use keywords from the job description (if provided) in the bullet points and skills section.
- **Standard Headings:** Keep the standard section headings (Education, Skills, Experience, Projects) as they are standard for parsers.
- **No Typos:** ATS can reject applications based on spelling errors. Triple-check everything.

## Assets

This skill includes:
- `assets/resume.tex`: The reference template file.
- `assets/resume.cls`: The required class file.
