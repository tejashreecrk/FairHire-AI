def explain_selection(resume_skills, job_skills):

    matched = list(set(resume_skills) & set(job_skills))

    return {
        "matched_skills": matched,
        "reason": "Skills match job requirements"
    }


if __name__ == "__main__":

    # Get user input
    resume_input = input("Enter resume skills separated by commas: ")
    job_input = input("Enter job skills separated by commas: ")

    # Convert input to list
    resume = [skill.strip().lower() for skill in resume_input.split(",")]
    job = [skill.strip().lower() for skill in job_input.split(",")]

    # Call existing function
    result = explain_selection(resume, job)

    print("\nExplainability Result:")
    print(result)