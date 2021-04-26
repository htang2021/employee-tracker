INSERT INTO department (dept_name)
VALUES ('Executive Office'),
    ('Sales'),
    ('Human Resources'),
    ('Engineering');

INSERT INTO role (title, salary, department_id)
VALUES ('CEO', 250000, 1),
    ('VP, Sales', 150000, 2),
    ('Manager, HR', 120000, 3),
    ('Director, Engineering', 230000, 4),
    ('Sr Engineer', 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Hung', 'CEO', 1, 1),
    ('Jimmy', 'SalesVP', 2, 1),
    ('John', 'HRManager', 3, 1),
    ('Erica', 'EngineeringDir', 4, 1),
    ('Beth', 'SrEngineer', 5, 4);
