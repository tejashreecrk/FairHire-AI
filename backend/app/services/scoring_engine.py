def compute_score(candidate_skills, job_skills, experience):

    skill_match = len(set(candidate_skills) & set(job_skills)) / len(job_skills)

    experience_score = min(experience / 5, 1)

    final_score = (0.7 * skill_match) + (0.3 * experience_score)

    return round(final_score, 2)