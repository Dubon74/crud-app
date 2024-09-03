create databse railways
use railways 

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    birthdate DATE,
    phone VARCHAR(20)
);
