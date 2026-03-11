"""bias_words = ["male", "female", "young", "old", "he", "she"]

def detect_bias(text):
    text = text.lower()

    found_words = []

    for word in bias_words:
        if word in text:
            found_words.append(word)

    return {
        "bias_detected": len(found_words) > 0,
        "bias_words": found_words
    }


if __name__ == "__main__":
    test_text = "Looking for a young male developer"
    print(detect_bias(test_text))

"""
def detect_bias(candidates):

    male_selected = 0
    female_selected = 0
    male_total = 0
    female_total = 0

    for c in candidates:
        if c["gender"] == "male":
            male_total += 1
            if c["selected"]:
                male_selected += 1

        if c["gender"] == "female":
            female_total += 1
            if c["selected"]:
                female_selected += 1

    male_rate = male_selected / male_total if male_total else 0
    female_rate = female_selected / female_total if female_total else 0

    disparate_impact = female_rate / male_rate if male_rate else 0

    return {
        "male_selection_rate": male_rate,
        "female_selection_rate": female_rate,
        "disparate_impact": round(disparate_impact, 2)
    }