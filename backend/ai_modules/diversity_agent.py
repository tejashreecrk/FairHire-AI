def promote_diversity(candidates):

    groups = set()
    diverse = []

    for c in candidates:
        gender = c["gender"]

        if gender not in groups:
            groups.add(gender)
            diverse.append(c)

    return diverse


# Test example for hackathon demo
if __name__ == "__main__":

    candidates = [
        {"name": "John", "gender": "male"},
        {"name": "Alex", "gender": "male"},
        {"name": "Sara", "gender": "female"}
    ]

    result = promote_diversity(candidates)

    print("Diverse Candidates:")
    print(result)