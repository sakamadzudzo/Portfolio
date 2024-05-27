/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import jakarta.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Brand;
import zw.co.techtrendz.techtrendzapi.entity.ContactType;
import zw.co.techtrendz.techtrendzapi.entity.OrderStatus;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.entity.Salutation;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.service.AddressService;
import zw.co.techtrendz.techtrendzapi.service.BrandService;
import zw.co.techtrendz.techtrendzapi.service.ContactTypeService;
import zw.co.techtrendz.techtrendzapi.service.OrderStatusService;
import zw.co.techtrendz.techtrendzapi.service.RoleService;
import zw.co.techtrendz.techtrendzapi.service.SalutationService;
import zw.co.techtrendz.techtrendzapi.service.UserService;

/**
 *
 * @author smadzudzo
 */
@Service
public class DummyDataServiceImpl {

    @Autowired
    private UserService userService;
    @Autowired
    private ContactTypeService contactTypeService;
    @Autowired
    private SalutationService salutationService;
    @Autowired
    private BrandService brandService;
    @Autowired
    private RoleService roleService;
    @Autowired
    private OrderStatusService orderStatusService;
    @Autowired
    private AddressService addressService;
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private record UsersRole(int userId, int roleId) {

    }

    private record UsersAddress(int addressId, int userId) {

    }

    @PostConstruct
    private void insertDummyData() {
        salutationService.saveSalutation(new Salutation(null, "Mr", "Mr"));
        salutationService.saveSalutation(new Salutation(null, "Miss", "Miss"));
        salutationService.saveSalutation(new Salutation(null, "Mrs", "Mrs"));
        salutationService.saveSalutation(new Salutation(null, "Dr", "Dr"));

        List<Brand> brands = Arrays.asList(
                new Brand(1L, "Sony", "Sony"),
                new Brand(2L, "LG", "LG"),
                new Brand(3L, "Samsung", "Samsung"),
                new Brand(4L, "Phillips", "Phillips"),
                new Brand(5L, "Bosch", "Bosch"),
                new Brand(6L, "Capri", "Capri"),
                new Brand(7L, "Defy", "Defy"),
                new Brand(8L, "Apple", "Apple"),
                new Brand(9L, "Amazon", "Amazon"),
                new Brand(10L, "Ryobi", "Ryobi"),
                new Brand(11L, "Miele", "Miele"),
                new Brand(12L, "Maytag", "Maytag"),
                new Brand(13L, "HP", "HP"),
                new Brand(14L, "Lenovo", "Lenovo"),
                new Brand(15L, "Dell", "Dell"),
                new Brand(16L, "Xiomi", "Xiomi"),
                new Brand(17L, "Acer", "Acer"),
                new Brand(18L, "Asus", "Asus"),
                new Brand(19L, "Microsoft", "Microsoft"),
                new Brand(20L, "Huawei", "Huawei"),
                new Brand(21L, "Google", "Google"),
                new Brand(22L, "Forge", "Forge"),
                new Brand(23L, "Nintendo", "Nintendo"),
                new Brand(24L, "JBL", "JBL"),
                new Brand(25L, "Oculus", "Oculus"),
                new Brand(26L, "Garmin", "Garmin"),
                new Brand(27L, "Logitech", "Logitech"),
                new Brand(28L, "Canon", "Canon"),
                new Brand(29L, "MSI", "MSI")
        );
        brandService.saveBrands(brands);

        List<ContactType> contactTypes = Arrays.asList(
                new ContactType(null, "EMAIL", "Email address"),
                new ContactType(null, "MESSENGER", "Instant messenger"),
                new ContactType(null, "PHONE", "Phone number (with country code)"),
                new ContactType(null, "SKYPE", "Skype ID"),
                new ContactType(null, "WHATSAPP", "WhatsApp number")
        );
        contactTypeService.saveContactTypes(contactTypes);

        List<Role> roles = Arrays.asList(
                new Role(1L, "Role for purchasing customer.", "CUSTOMER"),
                new Role(2L, "Role for site administrator.", "ADMINISTRATOR"),
                new Role(3L, "Role for maintaining site products, prices, and all other shop data.", "MAINTAINER")
        );
        roleService.saveRoles(roles);

        orderStatusService.saveOrderStatus(new OrderStatus(1L, "Order placed", "ORDERED"));
        orderStatusService.saveOrderStatus(new OrderStatus(2L, "Order pending", "PENDING"));
        orderStatusService.saveOrderStatus(new OrderStatus(3L, "Order being processed", "PROCESSING"));
        orderStatusService.saveOrderStatus(new OrderStatus(4L, "Order approved", "APPROVED"));
        orderStatusService.saveOrderStatus(new OrderStatus(5L, "Purchase successful", "PURCHASED"));

        List<Users> users = Arrays.asList(
                new Users(null, new Salutation(1L), "Erick", "Leonard", "Abraham", "test", "elabraham", null, null, null),
                new Users(null, new Salutation(1L), "Gretchen", null, "Proctor", "test", "gproctor", null, null, null),
                new Users(null, new Salutation(1L), "Robbie", "Wilkins", "Erich", "test", "rwerich", null, null, null),
                new Users(null, new Salutation(1L), "Heath", "Dickson", "Cherie", "test", "hdcherie", null, null, null),
                new Users(null, new Salutation(1L), "Brandie", "Finley", "Arthur", "test", "bfarthur", null, null, null),
                new Users(null, new Salutation(1L), "Robinson", null, "Lara", "test", "rlara", null, null, null),
                new Users(null, new Salutation(1L), "Randal", null, "Dickerson", "test", "rdickerson", null, null, null),
                new Users(null, new Salutation(2L), "Keri", null, "Lesley", "test", "klesley", null, null, null),
                new Users(null, new Salutation(1L), "Roberta", null, "Morse", "test", "rmorse", null, null, null),
                new Users(null, new Salutation(1L), "Cornelius", "Herring", "Emily", "test", "chemily", null, null, null),
                new Users(null, new Salutation(1L), "Saka", "Shingirai", "Madzudzo", "test", "ssmadzudzo", null, null, null)
        );
        userService.saveUsers(users);

        StringBuilder usersRoleSql = new StringBuilder("INSERT INTO users_roles( users_id, roles_id ) VALUES ( :userId, :roleId )");
        StringBuilder usersAddressSql = new StringBuilder("INSERT INTO useraddress( address_id, user_id ) VALUES ( :addressId, :userId )");
        List<UsersRole> usersRoles = new ArrayList<>();
        usersRoles.add(new UsersRole(1, 1));
        usersRoles.add(new UsersRole(2, 1));
        usersRoles.add(new UsersRole(3, 1));
        usersRoles.add(new UsersRole(4, 1));
        usersRoles.add(new UsersRole(5, 1));
        usersRoles.add(new UsersRole(6, 1));
        usersRoles.add(new UsersRole(7, 1));
        usersRoles.add(new UsersRole(8, 1));
        usersRoles.add(new UsersRole(9, 1));
        usersRoles.add(new UsersRole(10, 1));
        usersRoles.add(new UsersRole(11, 1));
        usersRoles.add(new UsersRole(11, 2));
        usersRoles.add(new UsersRole(11, 3));

        List<UsersAddress> usersAddresses = new ArrayList<>();
        usersAddresses.add(new UsersAddress(34, 1));
        usersAddresses.add(new UsersAddress(68, 1));
        usersAddresses.add(new UsersAddress(75, 1));
        usersAddresses.add(new UsersAddress(87, 1));
        usersAddresses.add(new UsersAddress(72, 2));
        usersAddresses.add(new UsersAddress(58, 3));
        usersAddresses.add(new UsersAddress(18, 4));
        usersAddresses.add(new UsersAddress(31, 4));
        usersAddresses.add(new UsersAddress(26, 5));
        usersAddresses.add(new UsersAddress(62, 6));
        usersAddresses.add(new UsersAddress(73, 8));
        usersAddresses.add(new UsersAddress(72, 11));
        usersAddresses.add(new UsersAddress(84, 11));

        usersRoles.forEach(item -> {
            SqlParameterSource namedParameters = new MapSqlParameterSource()
                    .addValue("userId", item.userId)
                    .addValue("roleId", item.roleId);
            namedParameterJdbcTemplate.update(usersRoleSql.toString(), namedParameters);
        });

        usersAddresses.forEach(item -> {
            SqlParameterSource namedParameters = new MapSqlParameterSource()
                    .addValue("addressId", item.addressId)
                    .addValue("userId", item.userId);
            namedParameterJdbcTemplate.update(usersAddressSql.toString(), namedParameters);
        });

        List<String> bankAccountSqls = Arrays.asList(
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 74, '2008-09-24 12:23:41.568000', 1, 1, 66527445610001, 'CBZ', 'Jeanine', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 11, '2008-04-17 07:01:08.992000', 2, 2, 66527445610002, 'CBZ', 'Tabatha', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 42, '2008-11-25 20:18:55.872000', 3, 3, 66527445610003, 'CBZ', 'Clinton', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 41, '2008-01-02 10:30:24.376000', 4, 4, 66527445610004, 'CBZ', 'Casey', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 21, '2008-06-30 18:05:21.024000', 5, 5, 66527445610005, 'CBZ', 'Alexis', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 4, '2008-11-08 17:31:00.736000', 6, 6, 66527445610006, 'CBZ', 'Orlando', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 34, '2008-12-26 17:56:34.688000', 7, 7, 66527445610007, 'CBZ', 'Autumn', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 66, '2008-01-13 02:22:41.728000', 8, 8, 66527445610008, 'CBZ', 'Kendall', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 97, '2008-11-09 14:58:39.488000', 9, 9, 66527445610009, 'CBZ', 'Brad', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 72, '2008-12-03 18:43:35.808000', 10, 10, 66527445610010, 'CBZ', 'Sharon', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 1, '2008-12-27 07:30:14.912000', 11, 2, 66527445610011, 'CBZ', 'Ted', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 16, '2008-06-14 15:53:15.264000', 12, 3, 66527445610012, 'CBZ', 'Curtis', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 97, '2008-03-24 10:08:19.712000', 13, 8, 66527445610013, 'CBZ', 'Alissa', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 16, '2008-07-09 05:15:01.760000', 14, 7, 66527445610014, 'CBZ', 'Terry', '')",
                "INSERT INTO bankaccount( accountHolderAddress, dateTimeOpened, id, userId, accountNumber, bankName, branchName, ifscCode ) VALUES ( 94, '2008-01-28 06:59:19.936000', 15, 3, 66527445610015, 'CBZ', 'Cecil', '')"
        );
        bankAccountSqls.forEach(sql -> {
            SqlParameterSource namedParameters = new MapSqlParameterSource();
            namedParameterJdbcTemplate.update(sql, namedParameters);
        });

        List<String> productSqls = Arrays.asList(
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-performance laptop with a sleek design and long battery life.', 'Acer Aspire E15', '1AA12345XYZ67')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Powerful laptop for professionals, featuring a stunning display and compact design.', 'Dell XPS 13', '2BC23456LMN78')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium convertible laptop with 360-degree hinge and high-resolution display.', 'HP Spectre x360', '3CD34567OPQ89')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Flagship laptop from Apple with powerful performance and Retina display.', 'MacBook Pro', '4DE45678RST90')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Business ultrabook known for its durability, security features, and performance.', 'Lenovo ThinkPad X1 Carbon', '5EF56789UVW01')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Dual-screen laptop with innovative design and powerful specifications.', 'Asus ZenBook Pro Duo', '6FG67890WXY12')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium laptop with a sleek design and vibrant touchscreen display.', 'Microsoft Surface Laptop', '7GH78901XYZ23')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Thin and light laptop with powerful performance and long battery life.', 'Huawei MateBook X Pro', '8HI89012ABC34')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Gaming laptop with high-refresh-rate display and powerful GPU.', 'Razer Blade 15', '9IJ90123CDE45')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-end Chromebook with premium build quality and powerful internals.', 'Google Pixelbook', '0JK01234EFG56')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Latest flagship smartphone from Apple with advanced camera and performance.', 'iPhone 13 Pro', '1KL12345GHI67')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium Android smartphone with powerful features and impressive camera.', 'Samsung Galaxy S22 Ultra', '2LM23456IJK78')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Google''s latest flagship smartphone with pure Android experience.', 'Google Pixel 7', '3MN34567JKL89')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Powerful tablet with large display and support for Apple Pencil.', 'iPad Pro', '4NO45678KLM90')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced smartwatch with fitness and health tracking features.', 'Apple Watch Series 7', '5OP56789LMN01')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium smartwatch with stylish design and advanced health monitoring.', 'Samsung Galaxy Watch 4', '6PQ67890MNO12')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Next-generation gaming console from Sony with powerful hardware.', 'Sony PlayStation 5', '7QR78901NOP23')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Latest gaming console from Microsoft offering high-resolution gaming experience.', 'Xbox Series X', '8RS89012OPQ34')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact drone with 4K camera and intelligent flight modes.', 'DJI Mavic Air 2', '9ST90123PQR45')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Flagship action camera known for its rugged build and advanced features.', 'GoPro Hero 10 Black', '0TU01234QRS56')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart display with rotating screen and Alexa integration.', 'Amazon Echo Show 10', '1UV12345RST67')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced fitness tracker with built-in GPS and health monitoring features.', 'Fitbit Charge 5', '2VW23456STU78')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium noise-canceling headphones with immersive sound quality.', 'Bose QuietComfort 45', '3WX34567TUV89')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-quality wireless headphones with industry-leading noise cancellation.', 'Sony WH-1000XM4 Headphones', '4XY45678UVW90')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Upgraded version of Nintendo Switch with OLED display.', 'Nintendo Switch OLED', '5YZ56789VWX01')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced wireless mouse with customizable buttons and ergonomic design.', 'Logitech MX Master 3 Mouse', '6ZA67890WXY12')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium multisport GPS smartwatch with rugged design and advanced features.', 'Garmin Fenix 7', '7AB78901XYZ23')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'All-in-one virtual reality headset with wireless freedom and immersive experiences.', 'Oculus Quest 2', '8BC89012ABC34')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Portable Bluetooth speaker with powerful sound and waterproof design.', 'JBL Flip 6 Portable Speaker', '9CD90123BCD45')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-resolution mirrorless camera with advanced autofocus and image stabilization.', 'Canon EOS R5 Camera', '0DE01234CDE56')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Versatile laptop with powerful performance for everyday computing tasks.', 'HP Pavilion 15', '1EF12345LMN67')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Ultra-portable laptop with long battery life and sleek design.', 'Lenovo IdeaPad Slim 7', '2FG23456OPQ78')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Gaming laptop with high-refresh-rate display and RGB keyboard.', 'Alienware m15 R6', '3GH34567QRS89')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Affordable laptop with decent performance and ample storage.', 'Acer Aspire 5', '4HI45678STU90')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Convertible laptop with touchscreen display and stylus support.', 'HP Envy x360', '5IJ56789UVW01')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Sleek and lightweight laptop for professionals on the go.', 'Dell Latitude 14', '6JK67890XYZ12')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Portable laptop with durable design and all-day battery life.', 'Lenovo Chromebook Flex 5', '7KL78901ABC23')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Budget-friendly laptop with adequate performance for everyday use.', 'Acer Swift 3', '8LM89012BCD34')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Gaming laptop with powerful specs and customizable RGB lighting.', 'MSI GE76 Raider', '9MN90123CDE45')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Ultra-slim laptop with stunning display and premium build quality.', 'LG Gram 17', '0NO01234DEF56')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact smartphone with impressive camera capabilities and 5G support.', 'OnePlus 10 Pro', '1OP12345EFG67')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Flagship smartphone with innovative camera features and stylish design.', 'Xiaomi Mi 12', '2PQ23456FGH78')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Budget-friendly smartphone with large display and decent performance.', 'Motorola Moto G Power', '3QR34567GHI89')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact tablet with long battery life and vibrant display.', 'Samsung Galaxy Tab S7', '4RS45678HIJ90')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Budget-friendly tablet with basic features and decent performance.', 'Amazon Fire HD 10', '5ST56789IJK01')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium fitness tracker with heart rate monitoring and GPS functionality.', 'Garmin Venu 2', '6TU67890JKL12')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced smart scale with body composition analysis and Wi-Fi connectivity.', 'Withings Body Cardio', '7UV78901KLM23')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Noise-canceling true wireless earbuds with long battery life and sweat resistance.', 'Samsung Galaxy Buds Pro', '8VW89012LMN34')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Wireless gaming headset with 3D spatial audio and long-lasting battery.', 'SteelSeries Arctis 7', '9WX90123MNO45')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Portable SSD with fast data transfer speeds and rugged design.', 'SanDisk Extreme Portable SSD', '0XY01234NOP56')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'External hard drive with large storage capacity and USB 3.0 connectivity.', 'Seagate Backup Plus Slim', '1YZ12345OPQ67')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact photo printer for printing photos directly from smartphones and cameras.', 'Canon IVY Mini Photo Printer', '2ZA23456PQR78')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact instant camera with vintage design and automatic exposure control.', 'Fujifilm Instax Mini 11', '3AB34567QRS89')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-resolution document scanner with automatic document feeder.', 'Epson WorkForce ES-500W', '4BC45678RST90')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Wireless charging pad with fast charging support for smartphones and other devices.', 'Anker PowerWave Pad', '5CD56789STU01')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart thermostat with energy-saving features and smartphone app control.', 'Nest Learning Thermostat', '6DE67890TUV12')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart security camera with 1080p HD video and two-way audio.', 'Ring Indoor Cam', '7EF78901UVW23')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart doorbell with motion detection and night vision.', 'Arlo Essential Video Doorbell', '8FG89012VWX34')",
                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Robot vacuum cleaner with mapping technology and voice control.', 'iRobot Roomba i7+', '9GH90123WXY45')"
        );
        productSqls.forEach(sql -> {
            SqlParameterSource namedParameters = new MapSqlParameterSource();
            namedParameterJdbcTemplate.update(sql, namedParameters);
        });
    }
}
