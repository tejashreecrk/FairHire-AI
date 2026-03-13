def compute_score(candidate_skills, job_skills, experience):

    skill_match = len(set(candidate_skills) & set(job_skills)) / len(job_skills)

    experience_score = min(experience / 5, 1)

    final_score = (0.7 * skill_match) + (0.3 * experience_score)

    return round(final_score, 2)


# ---------------------------------
# Counterfactual Bias Testing
# ---------------------------------
def counterfactual_test(candidate_data, job_skills):

    original_score = compute_score(
        candidate_data["skills"],
        job_skills,
        candidate_data["experience_years"]
    )

    # Simulate alternate scenario
    # In real systems this may change gender/college proxies
    simulated_candidate = candidate_data.copy()

    simulated_score = compute_score(
        simulated_candidate["skills"],
        job_skills,
        simulated_candidate["experience_years"]
    )

    score_difference = abs(original_score - simulated_score)

    if score_difference > 0.05:
        bias_flag = True
    else:
        bias_flag = False

    return {
        "original_score": original_score,
        "counterfactual_score": simulated_score,
        "difference": score_difference,
        "bias_detected": bias_flag
    }