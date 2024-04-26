/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/SQLTemplate.sql to edit this template
 */
/**
 * Author:  smadzudzo
 * Created: Apr 26, 2024
 */

INSERT INTO BRAND(name, description) VALUES('Sony','Sony');
INSERT INTO BRAND(name, description) VALUES('LG','LG');
INSERT INTO BRAND(name, description) VALUES('Samsung','Samsung');
INSERT INTO BRAND(name, description) VALUES('Phillips','Phillips');
INSERT INTO BRAND(name, description) VALUES('Bosch','Bosch');
INSERT INTO BRAND(name, description) VALUES('Capri','Capri');
INSERT INTO BRAND(name, description) VALUES('Defy','Defy');
INSERT INTO BRAND(name, description) VALUES('Apple','Apple');
INSERT INTO BRAND(name, description) VALUES('Amazon','Amazon');
INSERT INTO BRAND(name, description) VALUES('Ryobi','Ryobi');
INSERT INTO BRAND(name, description) VALUES('Miele','Miele');
INSERT INTO BRAND(name, description) VALUES('Maytag','Maytag');
INSERT INTO BRAND(name, description) VALUES('HP','HP');
INSERT INTO BRAND(name, description) VALUES('Lenovo','Lenovo');
INSERT INTO BRAND(name, description) VALUES('Dell','Dell');
INSERT INTO BRAND(name, description) VALUES('Xiomi','Xiomi');
INSERT INTO BRAND(name, description) VALUES('Acer','Acer');
INSERT INTO BRAND(name, description) VALUES('Forge','Forge');

-- INSERT INTO Address (houseNumber, city, country, line1, line2, postalCode, province, state, street)
-- VALUES
-- (123, 'New York', 'USA', '123 Main St', 'Apt 1', '10001', 'New York', 'New York', 'Main Street'),
-- (456, 'Los Angeles', 'USA', '456 Elm St', NULL, '90001', 'California', 'California', 'Elm Street'),
-- (789, 'Chicago', 'USA', '789 Oak St', NULL, '60601', 'Illinois', 'Illinois', 'Oak Street'),
-- (101, 'Houston', 'USA', '101 Pine St', NULL, '77002', 'Texas', 'Texas', 'Pine Street'),
-- (202, 'Miami', 'USA', '202 Maple St', NULL, '33101', 'Florida', 'Florida', 'Maple Street'),
-- (303, 'San Francisco', 'USA', '303 Cedar St', 'Apt 2B', '94101', 'California', 'California', 'Cedar Street'),
-- (404, 'Seattle', 'USA', '404 Birch St', NULL, '98101', 'Washington', 'Washington', 'Birch Street'),
-- (505, 'Boston', 'USA', '505 Walnut St', 'Suite 100', '02101', 'Massachusetts', 'Massachusetts', 'Walnut Street'),
-- (606, 'Atlanta', 'USA', '606 Pine St', NULL, '30301', 'Georgia', 'Georgia', 'Pine Street'),
-- (707, 'Denver', 'USA', '707 Oak St', NULL, '80202', 'Colorado', 'Colorado', 'Oak Street'),
-- (808, 'Philadelphia', 'USA', '808 Elm St', NULL, '19101', 'Pennsylvania', 'Pennsylvania', 'Elm Street'),
-- (909, 'Dallas', 'USA', '909 Maple St', NULL, '75201', 'Texas', 'Texas', 'Maple Street'),
-- (111, 'Phoenix', 'USA', '111 Cedar St', NULL, '85001', 'Arizona', 'Arizona', 'Cedar Street'),
-- (222, 'Las Vegas', 'USA', '222 Birch St', 'Suite 200', '89101', 'Nevada', 'Nevada', 'Birch Street'),
-- (333, 'San Diego', 'USA', '333 Walnut St', NULL, '92101', 'California', 'California', 'Walnut Street'),
-- (444, 'Austin', 'USA', '444 Pine St', NULL, '73301', 'Texas', 'Texas', 'Pine Street'),
-- (555, 'Portland', 'USA', '555 Oak St', NULL, '97201', 'Oregon', 'Oregon', 'Oak Street'),
-- (666, 'Nashville', 'USA', '666 Elm St', NULL, '37201', 'Tennessee', 'Tennessee', 'Elm Street'),
-- (777, 'Orlando', 'USA', '777 Maple St', NULL, '32801', 'Florida', 'Florida', 'Maple Street'),
-- (888, 'Minneapolis', 'USA', '888 Cedar St', NULL, '55401', 'Minnesota', 'Minnesota', 'Cedar Street'),
-- (999, 'Detroit', 'USA', '999 Birch St', NULL, '48201', 'Michigan', 'Michigan', 'Birch Street'),
-- (121, 'San Antonio', 'USA', '121 Walnut St', NULL, '78201', 'Texas', 'Texas', 'Walnut Street'),
-- (232, 'Salt Lake City', 'USA', '232 Pine St', NULL, '84101', 'Utah', 'Utah', 'Pine Street'),
-- (343, 'Charlotte', 'USA', '343 Oak St', NULL, '28201', 'North Carolina', 'North Carolina', 'Oak Street'),
-- (454, 'Indianapolis', 'USA', '454 Elm St', NULL, '46201', 'Indiana', 'Indiana', 'Elm Street'),
-- (565, 'San Jose', 'USA', '565 Maple St', NULL, '95101', 'California', 'California', 'Maple Street'),
-- (676, 'Columbus', 'USA', '676 Cedar St', NULL, '43201', 'Ohio', 'Ohio', 'Cedar Street'),
-- (787, 'Fort Worth', 'USA', '787 Birch St', NULL, '76101', 'Texas', 'Texas', 'Birch Street'),
-- (898, 'Jacksonville', 'USA', '898 Walnut St', NULL, '32201', 'Florida', 'Florida', 'Walnut Street');
-- 
-- INSERT INTO BankAccount (accountHolderAddress, dateTimeOpened, userId, accountNumber, bankName, branchName, ifscCode)
-- VALUES
-- (1, '2023-04-23 09:15:00', 1, '1234567890', 'Chase Bank', 'Downtown Branch', 'CHASUS33XXX'),
-- (2, '2023-04-23 10:30:00', 2, '2345678901', 'Bank of America', 'Main Street Branch', 'BOFAUS6SXXX'),
-- (3, '2023-04-23 11:45:00', 3, '3456789012', 'Wells Fargo', 'Financial District Branch', 'WELLSF4SXXX'),
-- (4, '2023-04-23 12:00:00', 4, '4567890123', 'Citibank', 'Midtown Branch', 'CITIUS33XXX'),
-- (5, '2023-04-23 13:15:00', 5, '5678901234', 'JP Morgan Chase', 'Uptown Branch', 'CHASUS33XXX'),
-- (6, '2023-04-23 14:30:00', 6, '6789012345', 'TD Bank', 'City Center Branch', 'TDOMC4XXXXX'),
-- (7, '2023-04-23 15:45:00', 7, '7890123456', 'HSBC Bank', 'Financial District Branch', 'HSBCUS33XXX'),
-- (8, '2023-04-23 16:00:00', 8, '8901234567', 'PNC Bank', 'Downtown Branch', 'PNCCUS33XXX'),
-- (9, '2023-04-23 17:15:00', 9, '9012345678', 'US Bank', 'Main Street Branch', 'USBKUS44XXX'),
-- (10, '2023-04-23 18:30:00', 10, '0123456789', 'SunTrust Bank', 'Financial District Branch', 'SNTRUS3AXXX'),
-- (11, '2023-04-23 19:45:00', 11, '9876543210', 'Capital One', 'Uptown Branch', 'NFBKUS33XXX'),
-- (12, '2023-04-23 20:00:00', 12, '8765432109', 'BB&T Bank', 'City Center Branch', 'BRBTUS33XXX'),
-- (13, '2023-04-23 21:15:00', 13, '7654321098', 'Regions Bank', 'Midtown Branch', 'UPNBUS4TXXX'),
-- (14, '2023-04-23 22:30:00', 14, '6543210987', 'Ally Bank', 'Downtown Branch', 'MNTRUS4XXXX'),
-- (15, '2023-04-23 23:45:00', 15, '5432109876', 'Fifth Third Bank', 'Main Street Branch', 'FTBCUS3CXXX'),
-- (16, '2023-04-24 00:00:00', 16, '4321098765', 'KeyBank', 'Financial District Branch', 'KEYBUS33XXX'),
-- (17, '2023-04-24 01:15:00', 17, '3210987654', 'Huntington Bank', 'Uptown Branch', 'HBANUS3XXXX'),
-- (18, '2023-04-24 02:30:00', 18, '2109876543', 'M&T Bank', 'City Center Branch', 'MANTUS33XXX'),
-- (19, '2023-04-24 03:45:00', 19, '1098765432', 'Santander Bank', 'Midtown Branch', 'SVRNUS33XXX'),
-- (20, '2023-04-24 04:00:00', 20, '0987654321', 'Comerica Bank', 'Downtown Branch', 'CBOMUS44XXX'),
-- (21, '2023-04-24 05:15:00', 21, '9876543210', 'Discover Bank', 'Main Street Branch', 'DSVRUS4X'),
-- (22, '2023-04-24 06:30:00', 22, '8765432109', 'Citizens Bank', 'Financial District Branch', 'CTZIUS33XXX'),
-- (23, '2023-04-24 07:45:00', 23, '7654321098', 'Union Bank', 'Uptown Branch', 'UNNBUS44XXX'),
-- (24, '2023-04-24 08:00:00', 24, '6543210987', 'BBVA Compass', 'City Center Branch', 'CPASUS44XXX'),
-- (25, '2023-04-24 09:15:00', 25, '5432109876', 'First Republic Bank', 'Midtown Branch', 'FRBBUS6SXXX'),
-- (26, '2023-04-24 10:30:00', 26, '4321098765', 'BMO Harris Bank', 'Downtown Branch', 'HATRUS44XXX'),
-- (27, '2023-04-24 11:45:00', 27, '3210987654', 'Citizens Equity First Credit Union', 'Main Street Branch', 'CEFCUS33XXX'),
-- (28, '2023-04-24 12:00:00', 28, '2109876543', 'State Employees Credit Union', 'Financial District Branch', 'SECUUS33XXX'),
-- (29, '2023-04-24 13:15:00', 29, '1098765432', 'Golden 1 Credit Union', 'Uptown Branch', 'GOLNUS66XXX'),
-- (30, '2023-04-24 14:30:00', 30, '0987654321', 'Navy Federal Credit Union', 'City Center Branch', 'NFCUUS33XXX');
