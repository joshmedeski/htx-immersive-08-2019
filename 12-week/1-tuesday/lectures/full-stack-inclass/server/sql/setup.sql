CREATE DATABASE full_stack_blog_sample;
\c full_stack_blog_sample;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  createdAt DATE
);
