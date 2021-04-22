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
    ('Marketing Associate', 70000, 2),
    ('HR Associate', 80000, 1),
    ('Senior Engineer', 140000, 3),
    ('Staff Engineer', 160000, 3),
    ('Sales Manager', 80000, 6),
    ('Engineering Manager', 180000, 3),
    ('Director, Product Management', 220000, 8),
    ('Vice President, Procurement', 250000, 5),
    ('Chief Executive Officer', 320000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Sam', 'MarketingVP', 2, 13),
    ('Phil', 'MarketingAssociate', 2, 1),
    ('Ahmad', 'ProductDirector', 8, 13),
    ('John', 'Hrassociate', 1, 6),
    ('Amy', 'ProcurementHead', 5, 13),
    ('Samantha', 'HRManager', 1, 13),
    ('Cindy', 'Srengineer', 3, 8),
    ('Beth', 'EngrManager', 3, 13),
    ('Jimmy', 'SalesVP', 6, 13),
    ('Kyle', 'SalesMgr', 6, 9),
    ('Joe', 'ProductMgr', 8, 3),
    ('Liz', 'ProcurementAssoc', 5, 5),
    ('Hung', 'CEO', 6, 6);
