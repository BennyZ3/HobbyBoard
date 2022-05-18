\c hobbyboard_dev;

INSERT INTO testTable(content) VALUES
('This is our database''s test data');

INSERT INTO users(username, password, email, date, details) VALUES 
('BZ', 'password', 'email@email.com', '05/13/2022', 'Can type gud.'),
('JD', 'password', 'email@email.com', '05/14/2022', 'Can type gud.'),
('RS', 'password', 'email@email.com', '05/15/2022', 'Can type gudder.'),
('DL', 'password', 'email@email.com', '05/16/2022', 'Can type gud.');

INSERT INTO projects(name, details, project_image, archived, creator) VALUES
('T -1Hour','This is an idea for a video game that begins about an hour before the downfall of society..', null, false, 'RS'),
('Rohan''s Gamer Dating App', 'something something games', null, false, 'RS'),
('Noob game devs', 'Help me make a game.', null, false, 'JD'),
('Backflippers', 'and we do be hittin backflips 4real', null, false, 'DL'),
('Legal Drive', 'An illegal racing game that takes place in New York city, where racers can coordinate street racing events using an underground App. This App will track winners and transfer money to participants.', null, false, 'BZ');

INSERT INTO connections (username, project_id, permissions) VALUES
('BZ', 5, 'owner'),
('JD', 3, 'owner'),
('RS', 1, 'owner'),
('DL', 4, 'owner'),
('RS', 2, 'owner');
-- ('BZ', 4, 'collaborator'),
-- ('BZ', 3, 'follower');