def calculate_fairness(male, female):

    if male + female == 0:
        return 0

    score = min(male, female) / max(male, female)

    return score


if __name__ == "__main__":
    print(calculate_fairness(6,4))