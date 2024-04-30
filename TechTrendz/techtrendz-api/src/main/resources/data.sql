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
INSERT INTO BRAND(name, description) VALUES('Asus','Asus');
INSERT INTO BRAND(name, description) VALUES('Microsoft','Microsoft');
INSERT INTO BRAND(name, description) VALUES('Huawei','Huawei');
INSERT INTO BRAND(name, description) VALUES('Google','Google');
INSERT INTO BRAND(name, description) VALUES('Forge','Forge');
INSERT INTO BRAND(name, description) VALUES('Nintendo','Nintendo');
INSERT INTO BRAND(name, description) VALUES('JBL','JBL');
INSERT INTO BRAND(name, description) VALUES('Oculus','Oculus');
INSERT INTO BRAND(name, description) VALUES('Garmin','Garmin');
INSERT INTO BRAND(name, description) VALUES('Logitech','Logitech');
INSERT INTO BRAND(name, description) VALUES('Canon','Canon');
INSERT INTO BRAND(name, description) VALUES('MSI','MSI');

INSERT INTO Address (houseNumber, city, country, line1, line2, postalCode, province, state, street) VALUES
(123, 'Harare', 'Zimbabwe', '123 Main Street', 'Newlands', '12345', 'Harare', NULL, 'Main Street'),
(456, 'Bulawayo', 'Zimbabwe', '456 High Street', 'Hillside', '67890', 'Bulawayo', NULL, 'High Street'),
(789, 'Mutare', 'Zimbabwe', '789 Market Road', NULL, '54321', 'Manicaland', NULL, 'Market Road'),
(101, 'Gweru', 'Zimbabwe', '101 Park Avenue', 'Senga', '98765', 'Midlands', NULL, 'Park Avenue'),
(112, 'Masvingo', 'Zimbabwe', '112 Church Street', 'Rhodene', '45678', 'Masvingo', NULL, 'Church Street'),
(131, 'Kwekwe', 'Zimbabwe', '131 Industrial Road', 'Gaika', '23456', 'Midlands', NULL, 'Industrial Road'),
(151, 'Chitungwiza', 'Zimbabwe', '151 Oxford Street', 'Zengeza', '87654', 'Harare', NULL, 'Oxford Street'),
(171, 'Epworth', 'Zimbabwe', '171 Riverside Drive', 'Sunway City', '76543', 'Harare', NULL, 'Riverside Drive'),
(192, 'Bindura', 'Zimbabwe', '192 Railway Avenue', NULL, '32109', 'Mashonaland Central', NULL, 'Railway Avenue'),
(201, 'Victoria Falls', 'Zimbabwe', '201 Victoria Avenue', 'Mosi-oa-Tunya', '10987', 'Matabeleland North', NULL, 'Victoria Avenue'),
(221, 'Chinhoyi', 'Zimbabwe', '221 Freedom Avenue', 'Chikonohono', '54321', 'Mashonaland West', NULL, 'Freedom Avenue'),
(241, 'Karoi', 'Zimbabwe', '241 Independence Street', 'Chiedza', '98765', 'Mashonaland West', NULL, 'Independence Street'),
(261, 'Chipinge', 'Zimbabwe', '261 Liberty Lane', 'Gaza', '23456', 'Manicaland', NULL, 'Liberty Lane'),
(281, 'Beitbridge', 'Zimbabwe', '281 Unity Road', 'Dulivhadzimu', '87654', 'Matabeleland South', NULL, 'Unity Road'),
(301, 'Chiredzi', 'Zimbabwe', '301 Victory Crescent', 'Chiredzi North', '76543', 'Masvingo', NULL, 'Victory Crescent'),
(321, 'Norton', 'Zimbabwe', '321 Hope Street', 'Makuvaza', '32109', 'Mashonaland West', NULL, 'Hope Street'),
(341, 'Marondera', 'Zimbabwe', '341 Faith Lane', 'Dombotombo', '10987', 'Mashonaland East', NULL, 'Faith Lane'),
(361, 'Ruwa', 'Zimbabwe', '361 Grace Avenue', 'Damafalls', '21098', 'Mashonaland East', NULL, 'Grace Avenue'),
(381, 'Gwanda', 'Zimbabwe', '381 Joy Road', 'Phelandaba', '54321', 'Matabeleland South', NULL, 'Joy Road'),
(401, 'Shurugwi', 'Zimbabwe', '401 Peace Street', 'Zvamahande', '87654', 'Midlands', NULL, 'Peace Street'),
(421, 'Chegutu', 'Zimbabwe', '421 Liberty Lane', 'Chaminuka', '32109', 'Mashonaland West', NULL, 'Liberty Lane'),
(441, 'Gokwe', 'Zimbabwe', '441 Unity Avenue', 'Nembudziya', '10987', 'Midlands', NULL, 'Unity Avenue'),
(461, 'Zvishavane', 'Zimbabwe', '461 Victory Crescent', 'Mabuto', '54321', 'Midlands', NULL, 'Victory Crescent'),
(481, 'Mvuma', 'Zimbabwe', '481 Hope Street', 'Chirumanzi', '87654', 'Midlands', NULL, 'Hope Street'),
(501, 'Banket', 'Zimbabwe', '501 Faith Lane', 'Chakari', '32109', 'Mashonaland West', NULL, 'Faith Lane'),
(521, 'Chitungwiza', 'Zimbabwe', '521 Grace Avenue', 'Zengeza', '10987', 'Harare', NULL, 'Grace Avenue'),
(541, 'Epworth', 'Zimbabwe', '541 Joy Road', 'Sunway City', '54321', 'Harare', NULL, 'Joy Road'),
(561, 'Rusape', 'Zimbabwe', '561 Peace Street', 'Vengere', '87654', 'Manicaland', NULL, 'Peace Street'),
(581, 'Kariba', 'Zimbabwe', '581 Liberty Lane', 'Mahombekombe', '32109', 'Mashonaland West', NULL, 'Liberty Lane'),
(601, 'Murehwa', 'Zimbabwe', '601 Unity Avenue', 'Madziwa', '10987', 'Mashonaland East', NULL, 'Unity Avenue'),
(621, 'Nyanga', 'Zimbabwe', '621 Victory Crescent', 'Dendera', '54321', 'Manicaland', NULL, 'Victory Crescent'),
(641, 'Bindura', 'Zimbabwe', '641 Hope Street', 'Chipadze', '87654', 'Mashonaland Central', NULL, 'Hope Street'),
(661, 'Norton', 'Zimbabwe', '661 Faith Lane', 'Norton Town', '32109', 'Mashonaland West', NULL, 'Faith Lane'),
(681, 'Beitbridge', 'Zimbabwe', '681 Grace Avenue', 'Beitbridge Town', '10987', 'Matabeleland South', NULL, 'Grace Avenue'),
(701, 'Chiredzi', 'Zimbabwe', '701 Joy Road', 'Chiredzi Town', '54321', 'Masvingo', NULL, 'Joy Road'),
(721, 'Karoi', 'Zimbabwe', '721 Peace Street', 'Karoi Town', '87654', 'Mashonaland West', NULL, 'Peace Street'),
(741, 'Gwanda', 'Zimbabwe', '741 Liberty Lane', 'Gwanda Town', '32109', 'Matabeleland South', NULL, 'Liberty Lane'),
(761, 'Chipinge', 'Zimbabwe', '761 Unity Avenue', 'Chipinge Town', '10987', 'Manicaland', NULL, 'Unity Avenue'),
(781, 'Mvuma', 'Zimbabwe', '781 Victory Crescent', 'Mvuma Town', '54321', 'Midlands', NULL, 'Victory Crescent'),
(801, 'Chinhoyi', 'Zimbabwe', '801 Hope Street', 'Chinhoyi Town', '87654', 'Mashonaland West', NULL, 'Hope Street'),
(821, 'Zvishavane', 'Zimbabwe', '821 Faith Lane', 'Zvishavane Town', '32109', 'Midlands', NULL, 'Faith Lane'),
(841, 'Chitungwiza', 'Zimbabwe', '841 Grace Avenue', 'Chitungwiza Town', '10987', 'Harare', NULL, 'Grace Avenue'),
(861, 'Shurugwi', 'Zimbabwe', '861 Peace Street', 'Shurugwi Town', '54321', 'Midlands', NULL, 'Peace Street'),
(881, 'Marondera', 'Zimbabwe', '881 Liberty Lane', 'Marondera Town', '87654', 'Mashonaland East', NULL, 'Liberty Lane'),
(901, 'Ruwa', 'Zimbabwe', '901 Unity Avenue', 'Ruwa Town', '32109', 'Mashonaland East', NULL, 'Unity Avenue'),
(123, 'Harare', 'Zimbabwe', '123 Main Street', 'Central District', '12345', 'Harare', 'Harare', 'Main Street'),
(456, 'Bulawayo', 'Zimbabwe', '456 Second Avenue', 'Western District', '67890', 'Bulawayo', 'Bulawayo', 'Second Avenue'),
(789, 'Mutare', 'Zimbabwe', '789 Third Street', 'Eastern District', '54321', 'Manicaland', 'Manicaland', 'Third Street'),
(101, 'Gweru', 'Zimbabwe', '101 Fourth Road', 'Midlands District', '13579', 'Midlands', 'Midlands', 'Fourth Road'),
(202, 'Masvingo', 'Zimbabwe', '202 Fifth Close', 'Southern District', '97531', 'Masvingo', 'Masvingo', 'Fifth Close'),
(303, 'Kwekwe', 'Zimbabwe', '303 Sixth Lane', 'Central District', '24680', 'Midlands', 'Midlands', 'Sixth Lane'),
(404, 'Chitungwiza', 'Zimbabwe', '404 Seventh Avenue', 'Harare Metropolitan', '08642', 'Harare', 'Harare', 'Seventh Avenue'),
(505, 'Bindura', 'Zimbabwe', '505 Eighth Road', 'Mashonaland Central', '96420', 'Mashonaland Central', 'Mashonaland Central', 'Eighth Road'),
(606, 'Marondera', 'Zimbabwe', '606 Ninth Street', 'Mashonaland East', '02876', 'Mashonaland East', 'Mashonaland East', 'Ninth Street'),
(707, 'Gwanda', 'Zimbabwe', '707 Tenth Close', 'Matabeleland South', '50712', 'Matabeleland South', 'Matabeleland South', 'Tenth Close'),
(808, 'Kadoma', 'Zimbabwe', '808 Eleventh Lane', 'Mashonaland West', '38496', 'Mashonaland West', 'Mashonaland West', 'Eleventh Lane'),
(909, 'Kariba', 'Zimbabwe', '909 Twelfth Avenue', 'Mashonaland West', '03572', 'Mashonaland West', 'Mashonaland West', 'Twelfth Avenue'),
(111, 'Hwange', 'Zimbabwe', '111 Thirteenth Road', 'Matabeleland North', '92035', 'Matabeleland North', 'Matabeleland North', 'Thirteenth Road'),
(222, 'Chipinge', 'Zimbabwe', '222 Fourteenth Street', 'Manicaland', '72504', 'Manicaland', 'Manicaland', 'Fourteenth Street'),
(333, 'Chinhoyi', 'Zimbabwe', '333 Fifteenth Close', 'Mashonaland West', '16928', 'Mashonaland West', 'Mashonaland West', 'Fifteenth Close'),
(444, 'Beitbridge', 'Zimbabwe', '444 Sixteenth Lane', 'Matabeleland South', '40389', 'Matabeleland South', 'Matabeleland South', 'Sixteenth Lane'),
(555, 'Norton', 'Zimbabwe', '555 Seventeenth Avenue', 'Mashonaland West', '70836', 'Mashonaland West', 'Mashonaland West', 'Seventeenth Avenue'),
(666, 'Victoria Falls', 'Zimbabwe', '666 Eighteenth Road', 'Matabeleland North', '92540', 'Matabeleland North', 'Matabeleland North', 'Eighteenth Road'),
(777, 'Ruwa', 'Zimbabwe', '777 Nineteenth Street', 'Mashonaland East', '13870', 'Mashonaland East', 'Mashonaland East', 'Nineteenth Street'),
(888, 'Chegutu', 'Zimbabwe', '888 Twentieth Close', 'Mashonaland West', '24597', 'Mashonaland West', 'Mashonaland West', 'Twentieth Close'),
(999, 'Rusape', 'Zimbabwe', '999 Twenty-First Lane', 'Manicaland', '83245', 'Manicaland', 'Manicaland', 'Twenty-First Lane'),
(121, 'Zvishavane', 'Zimbabwe', '121 Twenty-Second Avenue', 'Midlands', '67024', 'Midlands', 'Midlands', 'Twenty-Second Avenue'),
(232, 'Murehwa', 'Zimbabwe', '232 Twenty-Third Road', 'Mashonaland East', '92647', 'Mashonaland East', 'Mashonaland East', 'Twenty-Third Road'),
(343, 'Epworth', 'Zimbabwe', '343 Twenty-Fourth Street', 'Harare Metropolitan', '34791', 'Harare', 'Harare', 'Twenty-Fourth Street'),
(454, 'Chiredzi', 'Zimbabwe', '454 Twenty-Fifth Close', 'Masvingo', '51063', 'Masvingo', 'Masvingo', 'Twenty-Fifth Close'),
(565, 'Shurugwi', 'Zimbabwe', '565 Twenty-Sixth Lane', 'Midlands', '02548', 'Midlands', 'Midlands', 'Twenty-Sixth Lane'),
(676, 'Gokwe', 'Zimbabwe', '676 Twenty-Seventh Avenue', 'Midlands', '68394', 'Midlands', 'Midlands', 'Twenty-Seventh Avenue'),
(787, 'Kwekwe', 'Zimbabwe', '787 Twenty-Eighth Road', 'Midlands', '47291', 'Midlands', 'Midlands', 'Twenty-Eighth Road'),
(898, 'Karoi', 'Zimbabwe', '898 Twenty-Ninth Street', 'Mashonaland West', '62540', 'Mashonaland West', 'Mashonaland West', 'Twenty-Ninth Street'),
(909, 'Zhombe', 'Zimbabwe', '909 Thirtieth Close', 'Midlands', '87394', 'Midlands', 'Midlands', 'Thirtieth Close'),
(110, 'Mvurwi', 'Zimbabwe', '110 Thirty-First Lane', 'Mashonaland Central', '40296', 'Mashonaland Central', 'Mashonaland Central', 'Thirty-First Lane'),
(221, 'Nkayi', 'Zimbabwe', '221 Thirty-Second Avenue', 'Matabeleland North', '69382', 'Matabeleland North', 'Matabeleland North', 'Thirty-Second Avenue'),
(332, 'Mvuma', 'Zimbabwe', '332 Thirty-Third Road', 'Midlands', '52049', 'Midlands', 'Midlands', 'Thirty-Third Road'),
(443, 'Gutu', 'Zimbabwe', '443 Thirty-Fourth Street', 'Masvingo', '83519', 'Masvingo', 'Masvingo', 'Thirty-Fourth Street'),
(554, 'Raffingora', 'Zimbabwe', '554 Thirty-Fifth Close', 'Mashonaland West', '63058', 'Mashonaland West', 'Mashonaland West', 'Thirty-Fifth Close'),
(665, 'Chivhu', 'Zimbabwe', '665 Thirty-Sixth Lane', 'Mashonaland East', '19475', 'Mashonaland East', 'Mashonaland East', 'Thirty-Sixth Lane'),
(776, 'Centenary', 'Zimbabwe', '776 Thirty-Seventh Avenue', 'Mashonaland Central', '83946', 'Mashonaland Central', 'Mashonaland Central', 'Thirty-Seventh Avenue'),
(887, 'Plumtree', 'Zimbabwe', '887 Thirty-Eighth Road', 'Matabeleland South', '57294', 'Matabeleland South', 'Matabeleland South', 'Thirty-Eighth Road'),
(998, 'Headlands', 'Zimbabwe', '998 Thirty-Ninth Street', 'Manicaland', '30495', 'Manicaland', 'Manicaland', 'Thirty-Ninth Street'),
(123, 'Shamva', 'Zimbabwe', '123 Fortieth Close', 'Mashonaland Central', '93856', 'Mashonaland Central', 'Mashonaland Central', 'Fortieth Close'),
(234, 'Chimanimani', 'Zimbabwe', '234 Forty-First Lane', 'Manicaland', '50297', 'Manicaland', 'Manicaland', 'Forty-First Lane'),
(345, 'Concession', 'Zimbabwe', '345 Forty-Second Avenue', 'Mashonaland Central', '72094', 'Mashonaland Central', 'Mashonaland Central', 'Forty-Second Avenue'),
(456, 'Nyanga', 'Zimbabwe', '456 Forty-Third Road', 'Manicaland', '39047', 'Manicaland', 'Manicaland', 'Forty-Third Road'),
(567, 'Guruve', 'Zimbabwe', '567 Forty-Fourth Street', 'Mashonaland Central', '64023', 'Mashonaland Central', 'Mashonaland Central', 'Forty-Fourth Street'),
(678, 'Chirumanzu', 'Zimbabwe', '678 Forty-Fifth Close', 'Midlands', '85039', 'Midlands', 'Midlands', 'Forty-Fifth Close'),
(789, 'Rushinga', 'Zimbabwe', '789 Forty-Sixth Lane', 'Mashonaland Central', '32058', 'Mashonaland Central', 'Mashonaland Central', 'Forty-Sixth Lane'),
(890, 'Mazowe', 'Zimbabwe', '890 Forty-Seventh Avenue', 'Mashonaland Central', '97340', 'Mashonaland Central', 'Mashonaland Central', 'Forty-Seventh Avenue'),
(901, 'Uzumba-Maramba-Pfungwe', 'Zimbabwe', '901 Forty-Eighth Road', 'Mashonaland East', '64072', 'Mashonaland East', 'Mashonaland East', 'Forty-Eighth Road'),
(112, 'Norton', 'Zimbabwe', '112 Forty-Ninth Street', 'Mashonaland West', '30894', 'Mashonaland West', 'Mashonaland West', 'Forty-Ninth Street'),
(223, 'Binga', 'Zimbabwe', '223 Fiftieth Close', 'Matabeleland North', '54023', 'Matabeleland North', 'Matabeleland North', 'Fiftieth Close'),
(334, 'Buhera', 'Zimbabwe', '334 Fiftieth Lane', 'Manicaland', '67382', 'Manicaland', 'Manicaland', 'Fiftieth Lane'),
(445, 'Goromonzi', 'Zimbabwe', '445 Fiftieth Avenue', 'Mashonaland East', '98235', 'Mashonaland East', 'Mashonaland East', 'Fiftieth Avenue'),
(556, 'Gwanda', 'Zimbabwe', '556 Fiftieth Road', 'Matabeleland South', '50382', 'Matabeleland South', 'Matabeleland South', 'Fiftieth Road'),
(667, 'Gweru', 'Zimbabwe', '667 Fifty-First Street', 'Midlands', '82064', 'Midlands', 'Midlands', 'Fifty-First Street'),
(778, 'Hurungwe', 'Zimbabwe', '778 Fifty-Second Close', 'Mashonaland West', '54028', 'Mashonaland West', 'Mashonaland West', 'Fifty-Second Close'),
(889, 'Hwange', 'Zimbabwe', '889 Fifty-Third Lane', 'Matabeleland North', '82093', 'Matabeleland North', 'Matabeleland North', 'Fifty-Third Lane'),
(900, 'Kariba', 'Zimbabwe', '900 Fifty-Fourth Avenue', 'Mashonaland West', '64093', 'Mashonaland West', 'Mashonaland West', 'Fifty-Fourth Avenue');

INSERT INTO role( id, description, name ) VALUES ( 1, 'Role for purchasing customer.', 'CUSTOMER'); 
INSERT INTO role( id, description, name ) VALUES ( 2, 'Role for site administrator.', 'ADMINISTRATOR'); 
INSERT INTO role( id, description, name ) VALUES ( 3, 'Role for maintaining site products, prices, and all other shop data.', 'MAINTAINER'); 

INSERT INTO orderstatus( id, description, name ) VALUES ( 1, 'Order placed', 'ORDERED' ); 
INSERT INTO orderstatus( id, description, name ) VALUES ( 2, 'Order pending', 'PENDING' ); 
INSERT INTO orderstatus( id, description, name ) VALUES ( 3, 'Order being processed', 'PROCESSING' ); 
INSERT INTO orderstatus( id, description, name ) VALUES ( 4, 'Order approved', 'APPROVED' ); 
INSERT INTO orderstatus( id, description, name ) VALUES ( 5, 'Purchase successful', 'PURCHASED' ); 

INSERT INTO productstatus( id, description, name ) VALUES ( 1, 'Product is free', 'FREE');
INSERT INTO productstatus( id, description, name ) VALUES ( 2, 'Product has been put in a cart', 'CARTED');
INSERT INTO productstatus( id, description, name ) VALUES ( 3, 'Product has been ordered by someone', 'ORDERED');
INSERT INTO productstatus( id, description, name ) VALUES ( 4, 'Product has been purchased', 'PURCHASED');

INSERT INTO producttype( id, description, name ) VALUES ( 1, 'REFRIDGERATOR', 'REFRIDGERATOR');
INSERT INTO producttype( id, description, name ) VALUES ( 2, 'TELEVISION', 'TELEVISION');
INSERT INTO producttype( id, description, name ) VALUES ( 3, 'LEPTOP', 'LAPTOP');
INSERT INTO producttype( id, description, name ) VALUES ( 4, 'SMARTPHONE', 'SMARTPHONE');
INSERT INTO producttype( id, description, name ) VALUES ( 5, 'PRINTER', 'PRINTER');

INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 1, 'Erick', 'Leonard', 'Abraham', 'test', 'elabraham');
INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 2, 'Gretchen', null, 'Proctor', 'test', 'gproctor');
INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 3, 'Robbie', 'Wilkins', 'Erich', 'test', 'rwerich');
INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 4, 'Heath', 'Dickson', 'Cherie', 'test', 'hdcherie');
INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 5, 'Brandie', 'Finley', 'Arthur', 'test', 'bfarthur');
INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 6, 'Robinson', null, 'Lara', 'test', 'rlara');
INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 7, 'Randal', null, 'Dickerson', 'test', 'rdickerson');
INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 8, 'Keri', null, 'Lesley', 'test', 'klesley');
INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 9, 'Roberta', null, 'Morse', 'test', 'rmorse');
INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 10, 'Cornelius', 'Herring', 'Emily', 'test', 'chemily');
INSERT INTO users( id, forename, lastname, otherNames, password, username ) VALUES ( 11, 'Saka', 'Shingirai', 'Madzudzo', 'test', 'ssmadzudzo');

INSERT INTO users_roles( users_id, roles_id ) VALUES ( 1, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 2, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 3, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 4, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 5, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 6, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 7, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 8, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 9, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 10, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 11, 1 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 11, 2 );
INSERT INTO users_roles( users_id, roles_id ) VALUES ( 11, 3 );

INSERT INTO useraddress( address_id, user_id ) VALUES ( 34, 1 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 68, 1 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 75, 1 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 87, 1 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 72, 2 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 58, 3 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 18, 4 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 31, 4 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 26, 5 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 62, 6 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 73, 8 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 72, 11 ); 
INSERT INTO useraddress( address_id, user_id ) VALUES ( 84, 11 ); 

INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 74, '2008-09-24 12:23:41.568000', 1, 1, 66527445610001, 'CBZ', 'Jeanine', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 11, '2008-04-17 07:01:08.992000', 2, 2, 66527445610002, 'CBZ', 'Tabatha', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 42, '2008-11-25 20:18:55.872000', 3, 3, 66527445610003, 'CBZ', 'Clinton', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 41, '2008-01-02 10:30:24.376000', 4, 4, 66527445610004, 'CBZ', 'Casey', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 21, '2008-06-30 18:05:21.024000', 5, 5, 66527445610005, 'CBZ', 'Alexis', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 4, '2008-11-08 17:31:00.736000', 6, 6, 66527445610006, 'CBZ', 'Orlando', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 34, '2008-12-26 17:56:34.688000', 7, 7, 66527445610007, 'CBZ', 'Autumn', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 66, '2008-01-13 02:22:41.728000', 8, 8, 66527445610008, 'CBZ', 'Kendall', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 97, '2008-11-09 14:58:39.488000', 9, 9, 66527445610009, 'CBZ', 'Brad', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 72, '2008-12-03 18:43:35.808000', 10, 10, 66527445610010, 'CBZ', 'Sharon', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 1, '2008-12-27 07:30:14.912000', 11, 2, 66527445610011, 'CBZ', 'Ted', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 16, '2008-06-14 15:53:15.264000', 12, 3, 66527445610012, 'CBZ', 'Curtis', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 97, '2008-03-24 10:08:19.712000', 13, 8, 66527445610013, 'CBZ', 'Alissa', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 16, '2008-07-09 05:15:01.760000', 14, 7, 66527445610014, 'CBZ', 'Terry', '');
INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 94, '2008-01-28 06:59:19.936000', 15, 3, 66527445610015, 'CBZ', 'Cecil', '');

INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-performance laptop with a sleek design and long battery life.', 'Acer Aspire E15', '1AA12345XYZ67');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Powerful laptop for professionals, featuring a stunning display and compact design.', 'Dell XPS 13', '2BC23456LMN78');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium convertible laptop with 360-degree hinge and high-resolution display.', 'HP Spectre x360', '3CD34567OPQ89');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Flagship laptop from Apple with powerful performance and Retina display.', 'MacBook Pro', '4DE45678RST90');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Business ultrabook known for its durability, security features, and performance.', 'Lenovo ThinkPad X1 Carbon', '5EF56789UVW01');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Dual-screen laptop with innovative design and powerful specifications.', 'Asus ZenBook Pro Duo', '6FG67890WXY12');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium laptop with a sleek design and vibrant touchscreen display.', 'Microsoft Surface Laptop', '7GH78901XYZ23');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Thin and light laptop with powerful performance and long battery life.', 'Huawei MateBook X Pro', '8HI89012ABC34');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Gaming laptop with high-refresh-rate display and powerful GPU.', 'Razer Blade 15', '9IJ90123CDE45');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-end Chromebook with premium build quality and powerful internals.', 'Google Pixelbook', '0JK01234EFG56');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Latest flagship smartphone from Apple with advanced camera and performance.', 'iPhone 13 Pro', '1KL12345GHI67');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium Android smartphone with powerful features and impressive camera.', 'Samsung Galaxy S22 Ultra', '2LM23456IJK78');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Google''s latest flagship smartphone with pure Android experience.', 'Google Pixel 7', '3MN34567JKL89');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Powerful tablet with large display and support for Apple Pencil.', 'iPad Pro', '4NO45678KLM90');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced smartwatch with fitness and health tracking features.', 'Apple Watch Series 7', '5OP56789LMN01');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium smartwatch with stylish design and advanced health monitoring.', 'Samsung Galaxy Watch 4', '6PQ67890MNO12');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Next-generation gaming console from Sony with powerful hardware.', 'Sony PlayStation 5', '7QR78901NOP23');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Latest gaming console from Microsoft offering high-resolution gaming experience.', 'Xbox Series X', '8RS89012OPQ34');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact drone with 4K camera and intelligent flight modes.', 'DJI Mavic Air 2', '9ST90123PQR45');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Flagship action camera known for its rugged build and advanced features.', 'GoPro Hero 10 Black', '0TU01234QRS56');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart display with rotating screen and Alexa integration.', 'Amazon Echo Show 10', '1UV12345RST67');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced fitness tracker with built-in GPS and health monitoring features.', 'Fitbit Charge 5', '2VW23456STU78');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium noise-canceling headphones with immersive sound quality.', 'Bose QuietComfort 45', '3WX34567TUV89');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-quality wireless headphones with industry-leading noise cancellation.', 'Sony WH-1000XM4 Headphones', '4XY45678UVW90');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Upgraded version of Nintendo Switch with OLED display.', 'Nintendo Switch OLED', '5YZ56789VWX01');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced wireless mouse with customizable buttons and ergonomic design.', 'Logitech MX Master 3 Mouse', '6ZA67890WXY12');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium multisport GPS smartwatch with rugged design and advanced features.', 'Garmin Fenix 7', '7AB78901XYZ23');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'All-in-one virtual reality headset with wireless freedom and immersive experiences.', 'Oculus Quest 2', '8BC89012ABC34');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Portable Bluetooth speaker with powerful sound and waterproof design.', 'JBL Flip 6 Portable Speaker', '9CD90123BCD45');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-resolution mirrorless camera with advanced autofocus and image stabilization.', 'Canon EOS R5 Camera', '0DE01234CDE56');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Versatile laptop with powerful performance for everyday computing tasks.', 'HP Pavilion 15', '1EF12345LMN67');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Ultra-portable laptop with long battery life and sleek design.', 'Lenovo IdeaPad Slim 7', '2FG23456OPQ78');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Gaming laptop with high-refresh-rate display and RGB keyboard.', 'Alienware m15 R6', '3GH34567QRS89');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Affordable laptop with decent performance and ample storage.', 'Acer Aspire 5', '4HI45678STU90');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Convertible laptop with touchscreen display and stylus support.', 'HP Envy x360', '5IJ56789UVW01');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Sleek and lightweight laptop for professionals on the go.', 'Dell Latitude 14', '6JK67890XYZ12');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Portable laptop with durable design and all-day battery life.', 'Lenovo Chromebook Flex 5', '7KL78901ABC23');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Budget-friendly laptop with adequate performance for everyday use.', 'Acer Swift 3', '8LM89012BCD34');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Gaming laptop with powerful specs and customizable RGB lighting.', 'MSI GE76 Raider', '9MN90123CDE45');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Ultra-slim laptop with stunning display and premium build quality.', 'LG Gram 17', '0NO01234DEF56');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact smartphone with impressive camera capabilities and 5G support.', 'OnePlus 10 Pro', '1OP12345EFG67');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Flagship smartphone with innovative camera features and stylish design.', 'Xiaomi Mi 12', '2PQ23456FGH78');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Budget-friendly smartphone with large display and decent performance.', 'Motorola Moto G Power', '3QR34567GHI89');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact tablet with long battery life and vibrant display.', 'Samsung Galaxy Tab S7', '4RS45678HIJ90');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Budget-friendly tablet with basic features and decent performance.', 'Amazon Fire HD 10', '5ST56789IJK01');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium fitness tracker with heart rate monitoring and GPS functionality.', 'Garmin Venu 2', '6TU67890JKL12');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced smart scale with body composition analysis and Wi-Fi connectivity.', 'Withings Body Cardio', '7UV78901KLM23');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Noise-canceling true wireless earbuds with long battery life and sweat resistance.', 'Samsung Galaxy Buds Pro', '8VW89012LMN34');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Wireless gaming headset with 3D spatial audio and long-lasting battery.', 'SteelSeries Arctis 7', '9WX90123MNO45');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Portable SSD with fast data transfer speeds and rugged design.', 'SanDisk Extreme Portable SSD', '0XY01234NOP56');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'External hard drive with large storage capacity and USB 3.0 connectivity.', 'Seagate Backup Plus Slim', '1YZ12345OPQ67');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact photo printer for printing photos directly from smartphones and cameras.', 'Canon IVY Mini Photo Printer', '2ZA23456PQR78');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact instant camera with vintage design and automatic exposure control.', 'Fujifilm Instax Mini 11', '3AB34567QRS89');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-resolution document scanner with automatic document feeder.', 'Epson WorkForce ES-500W', '4BC45678RST90');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Wireless charging pad with fast charging support for smartphones and other devices.', 'Anker PowerWave Pad', '5CD56789STU01');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart thermostat with energy-saving features and smartphone app control.', 'Nest Learning Thermostat', '6DE67890TUV12');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart security camera with 1080p HD video and two-way audio.', 'Ring Indoor Cam', '7EF78901UVW23');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart doorbell with motion detection and night vision.', 'Arlo Essential Video Doorbell', '8FG89012VWX34');
INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Robot vacuum cleaner with mapping technology and voice control.', 'iRobot Roomba i7+', '9GH90123WXY45');