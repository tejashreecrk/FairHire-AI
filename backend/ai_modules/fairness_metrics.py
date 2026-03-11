"""def calculate_fairness(male, female):

    if male + female == 0:
        return 0

    score = min(male, female) / max(male, female)

    return score


if __name__ == "__main__":
    print(calculate_fairness(6,4))"""

def compute_fairness(disparate_impact):

    if 0.8 <= disparate_impact <= 1.25:
        fairness = "Fair Hiring"
    else:
        fairness = "Bias Detected"

    return {
        "fairness_status": fairness
    }