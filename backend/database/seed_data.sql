-- ======================================
-- FairHire AI Demo Data
-- ======================================

-- Recruiters
INSERT INTO recruiters (name, email, company)
VALUES
('Arjun Kumar', 'arjun@techcorp.com', 'TechCorp'),
('Meena Iyer', 'meena@innovateai.com', 'InnovateAI');


-- Candidates
INSERT INTO candidates (candidate_name, email, skills, experience_years, gender, university)
VALUES
('Priya Sharma', 'priya@gmail.com',
 'Python, Machine Learning, Data Analysis',
 3, 'Female', 'Anna University'),

('Rahul Verma', 'rahul@gmail.com',
 'Java, Spring Boot, Microservices',
 4, 'Male', 'IIT Delhi'),

('Aisha Khan', 'aisha@gmail.com',
 'Python, Deep Learning, NLP',
 2, 'Female', 'VIT Vellore'),

('Karthik Raj', 'karthik@gmail.com',
 'React, Node.js, MongoDB',
 3, 'Male', 'SRM University');


-- Jobs
INSERT INTO jobs (recruiter_id, job_title, job_description, required_skills, min_experience)
VALUES
(1,
 'Machine Learning Engineer',
 'Develop ML models and AI systems',
 'Python, Machine Learning, Deep Learning',
 2),

(2,
 'Backend Developer',
 'Build scalable backend APIs',
 'Java, Spring Boot, Microservices',
 3);


-- Applications
INSERT INTO applications (candidate_id, job_id, skill_match_score, bias_score, final_rank, status)
VALUES
(1, 1, 0.89, 0.02, 1, 'Shortlisted'),
(3, 1, 0.82, 0.03, 2, 'Shortlisted'),
(2, 2, 0.91, 0.01, 1, 'Shortlisted'),
(4, 2, 0.78, 0.05, 2, 'Under Review');


-- Bias Audit Results
INSERT INTO bias_audit (job_id, gender_bias_score, university_bias_score, experience_bias_score)
VALUES
(1, 0.03, 0.05, 0.02),
(2, 0.01, 0.04, 0.03);