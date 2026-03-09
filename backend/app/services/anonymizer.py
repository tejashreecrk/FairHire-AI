import re

def anonymize_resume(text):

    text = re.sub(r"[A-Z][a-z]+ [A-Z][a-z]+", "Candidate_Name", text)

    text = re.sub(r"\b(Male|Female)\b", "Gender_Hidden", text)

    return text