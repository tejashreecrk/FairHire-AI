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