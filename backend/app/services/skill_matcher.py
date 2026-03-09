from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def match_skills(job_desc, resume):

    vectorizer = TfidfVectorizer()

    vectors = vectorizer.fit_transform([job_desc, resume])

    similarity = cosine_similarity(vectors)

    return float(similarity[0][1])