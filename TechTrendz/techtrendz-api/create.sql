create table Address (
   houseNumber bigint not null,
   id bigint not null auto_increment,
   city varchar(255) not null,
   country varchar(255) not null,
   line1 varchar(255),
   line2 varchar(255),
   postalCode varchar(255),
   province varchar(255),
   state varchar(255),
   street varchar(255),
   primary key (id)
) engine = InnoDB;

create table Address_AUD (
   REV integer not null,
   REVTYPE tinyint,
   houseNumber bigint,
   id bigint not null,
   city varchar(255),
   country varchar(255),
   line1 varchar(255),
   line2 varchar(255),
   postalCode varchar(255),
   province varchar(255),
   state varchar(255),
   street varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table BankAccount (
   accountHolderAddress bigint not null,
   dateTimeOpened datetime(6) not null,
   id bigint not null auto_increment,
   userId bigint not null,
   accountNumber varchar(255) not null,
   bankName varchar(255) not null,
   branchName varchar(255) not null,
   ifscCode varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table BankAccount_AUD (
   REV integer not null,
   REVTYPE tinyint,
   accountHolderAddress bigint,
   dateTimeOpened datetime(6),
   id bigint not null,
   userId bigint,
   accountNumber varchar(255),
   bankName varchar(255),
   branchName varchar(255),
   ifscCode varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table Brand (
   id bigint not null auto_increment,
   description TEXT,
   name varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table Brand_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   description TEXT,
   name varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table Cart (
   id bigint not null auto_increment,
   primary key (id)
) engine = InnoDB;

create table Cart_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   primary key (REV, id)
) engine = InnoDB;

create table cartProduct (
   deleted bit,
   cartId bigint not null auto_increment,
   id bigint not null,
   productId bigint not null,
   primary key (cartId, id, productId)
) engine = InnoDB;

create table cartProduct_AUD (
   REV integer not null,
   REVTYPE tinyint,
   deleted bit,
   cartId bigint not null,
   id bigint not null,
   productId bigint not null,
   primary key (REV, cartId, productId)
) engine = InnoDB;

create table Order (
   id bigint not null auto_increment,
   primary key (id)
) engine = InnoDB;

create table Order_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   primary key (REV, id)
) engine = InnoDB;

create table orderProduct (
   orderId bigint not null,
   productId bigint not null,
   primary key (orderId, productId)
) engine = InnoDB;

create table orderProduct_AUD (
   REV integer not null,
   REVTYPE tinyint,
   orderId bigint not null,
   productId bigint not null,
   primary key (REV, orderId, productId)
) engine = InnoDB;

create table OrderStatus (
   id bigint not null auto_increment,
   description TEXT,
   name varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table OrderStatus_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   description TEXT,
   name varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table Product (
   `brand.id` bigint not null,
   id bigint not null auto_increment,
   `productStatus.id` bigint not null,
   `productType.id` bigint not null,
   description TEXT,
   name varchar(255) not null,
   serialNumber varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table Product_AUD (
   REV integer not null,
   REVTYPE tinyint,
   `brand.id` bigint,
   id bigint not null,
   `productStatus.id` bigint,
   `productType.id` bigint,
   description TEXT,
   name varchar(255),
   serialNumber varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table ProductStatus (
   id bigint not null auto_increment,
   description TEXT,
   name varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table ProductStatus_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   description TEXT,
   name varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table ProductType (
   id bigint not null auto_increment,
   description TEXT,
   name varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table ProductType_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   description TEXT,
   name varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table REVINFO (
   REV integer not null auto_increment,
   REVTSTMP bigint,
   primary key (REV)
) engine = InnoDB;

create table Role (
   id bigint not null auto_increment,
   description TEXT,
   name varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table Role_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   description TEXT,
   name varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table User (
   id bigint not null auto_increment,
   forename varchar(255),
   lastname varchar(255),
   otherNames varchar(255),
   password varchar(255) not null,
   username varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table User_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   forename varchar(255),
   lastname varchar(255),
   otherNames varchar(255),
   password varchar(255),
   username varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table User_roles (
   User_id bigint not null,
   roles_id bigint not null,
   primary key (User_id, roles_id)
) engine = InnoDB;

create table User_roles_AUD (
   REV integer not null,
   REVTYPE tinyint,
   User_id bigint not null,
   roles_id bigint not null,
   primary key (REV, User_id, roles_id)
) engine = InnoDB;

create table userAddress (
   `address.id` bigint not null,
   `user.id` bigint not null,
   primary key (`address.id`, `user.id`)
) engine = InnoDB;

create table userAddress_AUD (
   REV integer not null,
   REVTYPE tinyint,
   `address.id` bigint not null,
   `user.id` bigint not null,
   primary key (REV, `address.id`, `user.id`)
) engine = InnoDB;

alter table
   BankAccount
add
   constraint UK_90ko9t820qubfibrfrqwfxoek unique (accountNumber);

alter table
   Brand
add
   constraint UK_b14lvebnt5suo43obgxmgwaim unique (name);

alter table
   OrderStatus
add
   constraint UK_idq2mnsc8st595ttgpkh3xgn4 unique (name);

alter table
   Product
add
   constraint UK_6u32qml8f12hd64qomjc7ovpb unique (`brand.id`);

alter table
   Product
add
   constraint UK_ifyjp9wp7kmnhtxi2rsfivvwk unique (`productStatus.id`);

alter table
   Product
add
   constraint UK_n65fpko9fqrqf4xwodccu5ia9 unique (`productType.id`);

alter table
   Product
add
   constraint UK_dfghk6i56rvywbcb1uh4sbord unique (serialNumber);

alter table
   ProductStatus
add
   constraint UK_r3a3i93qeerp31oyeijt4g67c unique (name);

alter table
   ProductType
add
   constraint UK_bce1ecokcg8uxc2t45u7duerl unique (name);

alter table
   Address_AUD
add
   constraint FKgwp5sek4pjb4awy66sp184hrv foreign key (REV) references REVINFO (REV);

alter table
   BankAccount
add
   constraint FK798i4y9f16jss00jwb1wrg37w foreign key (accountHolderAddress) references Address (id);

alter table
   BankAccount
add
   constraint FKt8y90gmusya9w09yg0t5e6uf2 foreign key (userId) references User (id);

alter table
   BankAccount_AUD
add
   constraint FKsgeieea8tj4lu7bgvldpfvayt foreign key (REV) references REVINFO (REV);

alter table
   Brand_AUD
add
   constraint FKfqbk6xjm0cd4o0def8pjr2429 foreign key (REV) references REVINFO (REV);

alter table
   Cart_AUD
add
   constraint FKe7kv1utft06jgmi1ywoy9ibls foreign key (REV) references REVINFO (REV);

alter table
   cartProduct
add
   constraint FKmjwynww43fddkqcmfbc3v38pj foreign key (productId) references Product (id);

alter table
   cartProduct
add
   constraint FKb7puie63jwwiclvam3amy8elk foreign key (cartId) references Cart (id);

alter table
   cartProduct_AUD
add
   constraint FKllfoymheh15mu70ykeho37u05 foreign key (REV) references REVINFO (REV);

alter table
   Order_AUD
add
   constraint FKd0w1ay1u9nypppjt4wxosbkn7 foreign key (REV) references REVINFO (REV);

alter table
   orderProduct
add
   constraint FKesq1h26gmvx348rcrol2h6r13 foreign key (productId) references Product (id);

alter table
   orderProduct
add
   constraint FKgcomi0k66rg00ubuqgyau1427 foreign key (orderId) references Order (id);

alter table
   orderProduct_AUD
add
   constraint FK7igopkliarvt5jv4xx810tciq foreign key (REV) references REVINFO (REV);

alter table
   OrderStatus_AUD
add
   constraint FK7yxh0yus5lrfqs9oto6t5kso0 foreign key (REV) references REVINFO (REV);

alter table
   Product
add
   constraint FKbcq6cvgg99dh8ava837s9ykre foreign key (`brand.id`) references Brand (id);

alter table
   Product
add
   constraint FK9a96bxwdq1ca4ynuvk7qdpahs foreign key (`productStatus.id`) references ProductStatus (id);

alter table
   Product
add
   constraint FKjft01ap9wh8xfslvggsqwp77k foreign key (`productType.id`) references ProductType (id);

alter table
   Product_AUD
add
   constraint FKp73097aw36gagqga8oghg24hc foreign key (REV) references REVINFO (REV);

alter table
   ProductStatus_AUD
add
   constraint FK2u1d09duppfm56b07akuiu2jx foreign key (REV) references REVINFO (REV);

alter table
   ProductType_AUD
add
   constraint FKrwcxvuqg3u7g210ces04tb599 foreign key (REV) references REVINFO (REV);

alter table
   Role_AUD
add
   constraint FKq02270329rrba8msuv461km7h foreign key (REV) references REVINFO (REV);

alter table
   User_AUD
add
   constraint FKilft2rdosb65jocpcoan7xnjq foreign key (REV) references REVINFO (REV);

alter table
   User_roles
add
   constraint FKc6dfc5scokvhdj4by38b9ghvj foreign key (roles_id) references Role (id);

alter table
   User_roles
add
   constraint FKi81fp6mx433heb7dvbxqaqvpv foreign key (User_id) references User (id);

alter table
   User_roles_AUD
add
   constraint FKtp2sn5s5g099y1at5y0d6ykiu foreign key (REV) references REVINFO (REV);

alter table
   userAddress
add
   constraint FK1j0s65l8i5mems3m3uu6en99c foreign key (`user.id`) references User (id);

alter table
   userAddress
add
   constraint FK7shtksvcfn527ehm2ehuaqtbu foreign key (`address.id`) references Address (id);

alter table
   userAddress_AUD
add
   constraint FKpr4419yamc3u0vmfvn0gsumhn foreign key (REV) references REVINFO (REV);

create table Address (
   houseNumber bigint not null,
   id bigint not null auto_increment,
   city varchar(255) not null,
   country varchar(255) not null,
   line1 varchar(255),
   line2 varchar(255),
   postalCode varchar(255),
   province varchar(255),
   state varchar(255),
   street varchar(255),
   primary key (id)
) engine = InnoDB;

create table Address_AUD (
   REV integer not null,
   REVTYPE tinyint,
   houseNumber bigint,
   id bigint not null,
   city varchar(255),
   country varchar(255),
   line1 varchar(255),
   line2 varchar(255),
   postalCode varchar(255),
   province varchar(255),
   state varchar(255),
   street varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table BankAccount (
   accountHolderAddress bigint not null,
   dateTimeOpened datetime(6) not null,
   id bigint not null auto_increment,
   userId bigint not null,
   accountNumber varchar(255) not null,
   bankName varchar(255) not null,
   branchName varchar(255) not null,
   ifscCode varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table BankAccount_AUD (
   REV integer not null,
   REVTYPE tinyint,
   accountHolderAddress bigint,
   dateTimeOpened datetime(6),
   id bigint not null,
   userId bigint,
   accountNumber varchar(255),
   bankName varchar(255),
   branchName varchar(255),
   ifscCode varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table Brand (
   id bigint not null auto_increment,
   description TEXT,
   name varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table Brand_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   description TEXT,
   name varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table Cart (
   id bigint not null auto_increment,
   primary key (id)
) engine = InnoDB;

create table Cart_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   primary key (REV, id)
) engine = InnoDB;

create table cartProduct (
   deleted bit,
   cartId bigint not null auto_increment,
   id bigint not null,
   productId bigint not null,
   primary key (cartId, id, productId)
) engine = InnoDB;

create table cartProduct_AUD (
   REV integer not null,
   REVTYPE tinyint,
   deleted bit,
   cartId bigint not null,
   id bigint not null,
   productId bigint not null,
   primary key (REV, cartId, productId)
) engine = InnoDB;

create table Order (
   id bigint not null auto_increment,
   primary key (id)
) engine = InnoDB;

create table Order_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   primary key (REV, id)
) engine = InnoDB;

create table orderProduct (
   orderId bigint not null,
   productId bigint not null,
   primary key (orderId, productId)
) engine = InnoDB;

create table orderProduct_AUD (
   REV integer not null,
   REVTYPE tinyint,
   orderId bigint not null,
   productId bigint not null,
   primary key (REV, orderId, productId)
) engine = InnoDB;

create table OrderStatus (
   id bigint not null auto_increment,
   description TEXT,
   name varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table OrderStatus_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   description TEXT,
   name varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table Product (
   `brand.id` bigint not null,
   id bigint not null auto_increment,
   `productStatus.id` bigint not null,
   `productType.id` bigint not null,
   description TEXT,
   name varchar(255) not null,
   serialNumber varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table Product_AUD (
   REV integer not null,
   REVTYPE tinyint,
   `brand.id` bigint,
   id bigint not null,
   `productStatus.id` bigint,
   `productType.id` bigint,
   description TEXT,
   name varchar(255),
   serialNumber varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table ProductStatus (
   id bigint not null auto_increment,
   description TEXT,
   name varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table ProductStatus_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   description TEXT,
   name varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table ProductType (
   id bigint not null auto_increment,
   description TEXT,
   name varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table ProductType_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   description TEXT,
   name varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table REVINFO (
   REV integer not null auto_increment,
   REVTSTMP bigint,
   primary key (REV)
) engine = InnoDB;

create table Role (
   id bigint not null auto_increment,
   description TEXT,
   name varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table Role_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   description TEXT,
   name varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table User (
   id bigint not null auto_increment,
   forename varchar(255),
   lastname varchar(255),
   otherNames varchar(255),
   password varchar(255) not null,
   username varchar(255) not null,
   primary key (id)
) engine = InnoDB;

create table User_AUD (
   REV integer not null,
   REVTYPE tinyint,
   id bigint not null,
   forename varchar(255),
   lastname varchar(255),
   otherNames varchar(255),
   password varchar(255),
   username varchar(255),
   primary key (REV, id)
) engine = InnoDB;

create table User_roles (
   User_id bigint not null,
   roles_id bigint not null,
   primary key (User_id, roles_id)
) engine = InnoDB;

create table User_roles_AUD (
   REV integer not null,
   REVTYPE tinyint,
   User_id bigint not null,
   roles_id bigint not null,
   primary key (REV, User_id, roles_id)
) engine = InnoDB;

create table userAddress (
   `address.id` bigint not null,
   `user.id` bigint not null,
   primary key (`address.id`, `user.id`)
) engine = InnoDB;

create table userAddress_AUD (
   REV integer not null,
   REVTYPE tinyint,
   `address.id` bigint not null,
   `user.id` bigint not null,
   primary key (REV, `address.id`, `user.id`)
) engine = InnoDB;

alter table
   BankAccount
add
   constraint UK_90ko9t820qubfibrfrqwfxoek unique (accountNumber);

alter table
   Brand
add
   constraint UK_b14lvebnt5suo43obgxmgwaim unique (name);

alter table
   OrderStatus
add
   constraint UK_idq2mnsc8st595ttgpkh3xgn4 unique (name);

alter table
   Product
add
   constraint UK_6u32qml8f12hd64qomjc7ovpb unique (`brand.id`);

alter table
   Product
add
   constraint UK_ifyjp9wp7kmnhtxi2rsfivvwk unique (`productStatus.id`);

alter table
   Product
add
   constraint UK_n65fpko9fqrqf4xwodccu5ia9 unique (`productType.id`);

alter table
   Product
add
   constraint UK_dfghk6i56rvywbcb1uh4sbord unique (serialNumber);

alter table
   ProductStatus
add
   constraint UK_r3a3i93qeerp31oyeijt4g67c unique (name);

alter table
   ProductType
add
   constraint UK_bce1ecokcg8uxc2t45u7duerl unique (name);

alter table
   Address_AUD
add
   constraint FKgwp5sek4pjb4awy66sp184hrv foreign key (REV) references REVINFO (REV);

alter table
   BankAccount
add
   constraint FK798i4y9f16jss00jwb1wrg37w foreign key (accountHolderAddress) references Address (id);

alter table
   BankAccount
add
   constraint FKt8y90gmusya9w09yg0t5e6uf2 foreign key (userId) references User (id);

alter table
   BankAccount_AUD
add
   constraint FKsgeieea8tj4lu7bgvldpfvayt foreign key (REV) references REVINFO (REV);

alter table
   Brand_AUD
add
   constraint FKfqbk6xjm0cd4o0def8pjr2429 foreign key (REV) references REVINFO (REV);

alter table
   Cart_AUD
add
   constraint FKe7kv1utft06jgmi1ywoy9ibls foreign key (REV) references REVINFO (REV);

alter table
   cartProduct
add
   constraint FKmjwynww43fddkqcmfbc3v38pj foreign key (productId) references Product (id);

alter table
   cartProduct
add
   constraint FKb7puie63jwwiclvam3amy8elk foreign key (cartId) references Cart (id);

alter table
   cartProduct_AUD
add
   constraint FKllfoymheh15mu70ykeho37u05 foreign key (REV) references REVINFO (REV);

alter table
   Order_AUD
add
   constraint FKd0w1ay1u9nypppjt4wxosbkn7 foreign key (REV) references REVINFO (REV);

alter table
   orderProduct
add
   constraint FKesq1h26gmvx348rcrol2h6r13 foreign key (productId) references Product (id);

alter table
   orderProduct
add
   constraint FKgcomi0k66rg00ubuqgyau1427 foreign key (orderId) references Order (id);

alter table
   orderProduct_AUD
add
   constraint FK7igopkliarvt5jv4xx810tciq foreign key (REV) references REVINFO (REV);

alter table
   OrderStatus_AUD
add
   constraint FK7yxh0yus5lrfqs9oto6t5kso0 foreign key (REV) references REVINFO (REV);

alter table
   Product
add
   constraint FKbcq6cvgg99dh8ava837s9ykre foreign key (`brand.id`) references Brand (id);

alter table
   Product
add
   constraint FK9a96bxwdq1ca4ynuvk7qdpahs foreign key (`productStatus.id`) references ProductStatus (id);

alter table
   Product
add
   constraint FKjft01ap9wh8xfslvggsqwp77k foreign key (`productType.id`) references ProductType (id);

alter table
   Product_AUD
add
   constraint FKp73097aw36gagqga8oghg24hc foreign key (REV) references REVINFO (REV);

alter table
   ProductStatus_AUD
add
   constraint FK2u1d09duppfm56b07akuiu2jx foreign key (REV) references REVINFO (REV);

alter table
   ProductType_AUD
add
   constraint FKrwcxvuqg3u7g210ces04tb599 foreign key (REV) references REVINFO (REV);

alter table
   Role_AUD
add
   constraint FKq02270329rrba8msuv461km7h foreign key (REV) references REVINFO (REV);

alter table
   User_AUD
add
   constraint FKilft2rdosb65jocpcoan7xnjq foreign key (REV) references REVINFO (REV);

alter table
   User_roles
add
   constraint FKc6dfc5scokvhdj4by38b9ghvj foreign key (roles_id) references Role (id);

alter table
   User_roles
add
   constraint FKi81fp6mx433heb7dvbxqaqvpv foreign key (User_id) references User (id);

alter table
   User_roles_AUD
add
   constraint FKtp2sn5s5g099y1at5y0d6ykiu foreign key (REV) references REVINFO (REV);

alter table
   userAddress
add
   constraint FK1j0s65l8i5mems3m3uu6en99c foreign key (`user.id`) references User (id);

alter table
   userAddress
add
   constraint FK7shtksvcfn527ehm2ehuaqtbu foreign key (`address.id`) references Address (id);

alter table
   userAddress_AUD
add
   constraint FKpr4419yamc3u0vmfvn0gsumhn foreign key (REV) references REVINFO (REV);