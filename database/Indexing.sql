
CREATE INDEX idx_primaryName ON person(primaryname);
CREATE INDEX idx_job ON personassociation(job);
CREATE INDEX idx_titleName ON titleakas(titlename);
CREATE INDEX idx_word ON wi(word);