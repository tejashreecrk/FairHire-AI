


import spacy

nlp = spacy.load("en_core_web_sm")

def parse_resume(text):
    doc = nlp(text)

    skills = []
    experience_years = 0

    skill_keywords = ["python", "machine learning", "data analysis", "sql"]

    for token in doc:
        if token.text.lower() in skill_keywords:
            skills.append(token.text)

    for ent in doc.ents:
        if ent.label_ == "DATE":
            if "year" in ent.text:
                experience_years += 1

    return {
        "skills": list(set(skills)),
        "experience_years": experience_years
    }