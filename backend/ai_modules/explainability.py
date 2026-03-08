def explain_selection(resume_skills, job_skills):

    matched = list(set(resume_skills) & set(job_skills))

    return {
        "matched_skills": matched,
        "reason": "Skills match job requirements"
    }


if __name__ == "__main__":
    resume = ["python", "sql", "machine learning"]
    job = ["python", "react", "sql"]

    print(explain_selection(resume, job))