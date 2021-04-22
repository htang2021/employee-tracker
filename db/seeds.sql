INSERT INTO department (dept_name)
VALUES ('Human Resources'),
    ('Marketing'),
    ('Engineering'),
    ('Quality Assurance'),
    ('Operations & Procurement'),
    ('Sales'),
    ('Legal'),
    ('Product Management'),
    ('Accounting'),
    ('Professional Services');

INSERT INTO role (title, salary, department_id)
VALUES ('Marketing Manager', 90000, 2),
    ('HR Associate', 80000, 1),
    ('Senior Engineer', 140000, 3),
    ('Staff Engineer', 160000, 3),
    ('Sales Manager', 80000, 6),
    ('Engineering Manager', 180000, 3),
    ('Director, Product Management', 220000, 8),
    ('Vice President, Procurement', 250000, 5),
    ('Chief Executive Officer', 320000, 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Sam', 'Marketing', 2),
    ('John', 'Hrassociate', 1),
    ('Cindy', 'Srengineer', 3),
    ('Kyle', 'Sales', 6),
    ('Joe', 'Product', 8),
    ('Liz', 'Procurement', 5),
    ('Hung', 'CEO', 6);
