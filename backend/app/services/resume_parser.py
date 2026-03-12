import PyPDF2

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
    }