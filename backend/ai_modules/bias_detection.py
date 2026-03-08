bias_words = ["male", "female", "young", "old", "he", "she"]

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