def simulate_counterfactual(candidate):

    # original candidate attributes
    original_college = candidate.get("college", "unknown")
    original_score = candidate.get("score", 0)

    # simulate change
    modified_candidate = candidate.copy()
    modified_candidate["college"] = "IIT"

    # simulate score change
    modified_score = original_score

    if original_college != "IIT":
        modified_score = original_score + 5

    bias_detected = modified_score != original_score

    return {
        "original_college": original_college,
        "counterfactual_college": modified_candidate["college"],
        "original_score": original_score,
        "counterfactual_score": modified_score,
        "bias_detected": bias_detected
    }