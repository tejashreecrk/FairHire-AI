-- ======================================
-- FairHire AI Database Schema
-- ======================================

-- Drop tables if already exist
DROP TABLE IF EXISTS applications;
DROP TABLE IF EXISTS candidates;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS recruiters;


-- =========================
-- Recruiters Table
-- =========================
CREATE TABLE recruiters (
    recruiter_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    company VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================
-- Candidates Table
-- =========================
CREATE TABLE candidates (
    candidate_id SERIAL PRIMARY KEY,
    candidate_name VARCHAR(150),
    email VARCHAR(150) UNIQUE,
    skills TEXT,
    experience_years INT,
    resume_path TEXT,
    gender VARCHAR(20),
    university VARCHAR(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- =========================
-- Jobs Table
-- =========================
CREATE TABLE jobs (
    job_id SERIAL PRIMARY KEY,
    recruiter_id INT,
    job_title VARCHAR(200),
    job_description TEXT,
    required_skills TEXT,
    min_experience INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (recruiter_id)
    REFERENCES recruiters(recruiter_id)
    ON DELETE CASCADE
);


-- =========================
-- Applications Table
-- =========================
CREATE TABLE applications (
    application_id SERIAL PRIMARY KEY,
    candidate_id INT,
    job_id INT,
    skill_match_score FLOAT,
    bias_score FLOAT,
    final_rank INT,
    status VARCHAR(50) DEFAULT 'Applied',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (candidate_id)
    REFERENCES candidates(candidate_id)
    ON DELETE CASCADE,

    FOREIGN KEY (job_id)
    REFERENCES jobs(job_id)
    ON DELETE CASCADE
);


-- =========================
-- Bias Audit Table
-- =========================
CREATE TABLE bias_audit (
    audit_id SERIAL PRIMARY KEY,
    job_id INT,
    gender_bias_score FLOAT,
    university_bias_score FLOAT,
    experience_bias_score FLOAT,
    audit_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (job_id)
    REFERENCES jobs(job_id)
    ON DELETE CASCADE
);