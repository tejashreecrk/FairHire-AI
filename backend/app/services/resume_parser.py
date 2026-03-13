"""import PyPDF2

def parse_resume(file_path):

    text = ""

    with open(file_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)

        for page in reader.pages:
            text += page.extract_text()

    text = text.lower()

    skills_list = ["python", "machine learning", "sql", "java", "react"]

    found_skills = []

    for skill in skills_list:
        if skill in text:
            found_skills.append(skill)

    # simple experience detection
    experience_years = 0
    if "year" in text:
        experience_years = 2

    return {
        "skills": found_skills,
        "experience_years": experience_years
    }"""

"""
import PyPDF2


# -------------------------------
# Gender Detection Function
# -------------------------------
def detect_gender(text):

    text = text.lower()

    if "female" in text:
        return "female"

    elif "male" in text:
        return "male"

    else:
        return "unknown"


# -------------------------------
# Resume Parsing Function
# -------------------------------
def parse_resume(file_path):

    text = ""

    # Extract text from PDF
    with open(file_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)

        for page in reader.pages:
            page_text = page.extract_text()

            if page_text:
                text += page_text

    text = text.lower()

    # -------------------------------
    # Skill Detection
    # -------------------------------
    skills_list = ["python", "machine learning", "sql", "java", "react"]

    found_skills = []

    for skill in skills_list:
        if skill in text:
            found_skills.append(skill)

    # -------------------------------
    # Experience Detection
    # -------------------------------
    experience_years = 0

    if "year" in text or "years" in text:
        experience_years = 2

    # -------------------------------
    # Gender Detection
    # -------------------------------
    gender = detect_gender(text)

    # -------------------------------
    # Final Parsed Data
    # -------------------------------
    return {
        "skills": found_skills,
        "experience_years": experience_years,
        "gender": gender
    }
"""

import PyPDF2
import re


# -------------------------------
# Gender Detection Function
# -------------------------------
def detect_gender(text):

    text = text.lower()

    if "female" in text:
        return "female"

    elif "male" in text:
        return "male"

    else:
        return "unknown"


# -------------------------------
# Experience Extraction
# -------------------------------
def extract_experience(text):

    text = text.lower()

    # match patterns like "3 years", "5+ years", "2 year"
    matches = re.findall(r'(\d+)\+?\s*(?:year|years)', text)

    if matches:
        years = [int(x) for x in matches]
        return max(years)

    return 0


# -------------------------------
# Inclusive Profile Detection
# -------------------------------

# Portfolio Detection
def detect_portfolio(text):

    portfolio_keywords = [
        "github.com",
        "portfolio",
        "kaggle",
        "behance",
        "dribbble"
    ]

    for word in portfolio_keywords:
        if word in text:
            return True

    return False


# Freelance Detection
def detect_freelance(text):

    freelance_keywords = [
        "freelance",
        "self employed",
        "contract work",
        "independent developer"
    ]

    for word in freelance_keywords:
        if word in text:
            return True

    return False


# Career Gap Detection
def detect_career_gap(text):

    gap_keywords = [
        "career break",
        "gap year",
        "career pause",
        "personal sabbatical"
    ]

    for word in gap_keywords:
        if word in text:
            return True

    return False


# -------------------------------
# Resume Parsing Function
# -------------------------------
def parse_resume(file_path):

    text = ""

    # Extract text from PDF
    with open(file_path, "rb") as file:

        reader = PyPDF2.PdfReader(file)

        for page in reader.pages:

            page_text = page.extract_text()

            if page_text:
                text += page_text

    text = text.lower()

    # -------------------------------
    # Skill Detection
    # -------------------------------
    skills_list = ["python", "machine learning", "sql", "java", "react"]

    found_skills = []

    for skill in skills_list:
        if skill in text:
            found_skills.append(skill)

    # -------------------------------
    # Experience Detection
    # -------------------------------
    experience_years = extract_experience(text)

    # -------------------------------
    # Gender Detection
    # -------------------------------
    gender = detect_gender(text)

    # -------------------------------
    # Inclusive Profile Detection
    # -------------------------------
    portfolio = detect_portfolio(text)
    freelance = detect_freelance(text)
    career_gap = detect_career_gap(text)

    # -------------------------------
    # Final Parsed Data
    # -------------------------------
    return {
        "skills": found_skills,
        "experience_years": experience_years,
        "gender": gender,
        "portfolio": portfolio,
        "freelance": freelance,
        "career_gap": career_gap
    }