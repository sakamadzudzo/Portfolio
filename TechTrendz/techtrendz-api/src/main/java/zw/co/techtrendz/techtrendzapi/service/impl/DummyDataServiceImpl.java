/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import jakarta.annotation.PostConstruct;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Address;
import zw.co.techtrendz.techtrendzapi.entity.Brand;
import zw.co.techtrendz.techtrendzapi.entity.ContactType;
import zw.co.techtrendz.techtrendzapi.entity.OrderStatus;
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.entity.ProductItem;
import zw.co.techtrendz.techtrendzapi.entity.ProductStatus;
import zw.co.techtrendz.techtrendzapi.entity.ProductType;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.entity.Salutation;
import zw.co.techtrendz.techtrendzapi.entity.Tag;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.service.AddressService;
import zw.co.techtrendz.techtrendzapi.service.BrandService;
import zw.co.techtrendz.techtrendzapi.service.ContactTypeService;
import zw.co.techtrendz.techtrendzapi.service.OrderStatusService;
import zw.co.techtrendz.techtrendzapi.service.ProductService;
import zw.co.techtrendz.techtrendzapi.service.ProductStatusService;
import zw.co.techtrendz.techtrendzapi.service.ProductTypeService;
import zw.co.techtrendz.techtrendzapi.service.RoleService;
import zw.co.techtrendz.techtrendzapi.service.SalutationService;
import zw.co.techtrendz.techtrendzapi.service.TagService;
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
    private ProductStatusService productStatusService;
    @Autowired
    private ProductTypeService productTypeService;
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductItemService productItemService;
    @Autowired
    private TagService tagService;
    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private record UsersRole(int userId, int roleId) {

    }

    private record UsersAddress(int addressId, int userId) {

    }

    @PostConstruct
    private void insertDummyData() {
        salutationService.saveSalutation(new Salutation(1L, "Mr", "Mr"));
        salutationService.saveSalutation(new Salutation(2L, "Miss", "Miss"));
        salutationService.saveSalutation(new Salutation(3L, "Mrs", "Mrs"));
        salutationService.saveSalutation(new Salutation(4L, "Dr", "Dr"));

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
                new Brand(29L, "MSI", "MSI"),
                new Brand(30l, "Hisense", "Hisense"),
                new Brand(31L, "Russell Hobbs", "Russell Hobbs"),
                new Brand(32L, "Panasonic", "Panasonic"),
                new Brand(33L, "Sharp", "Sharp"),
                new Brand(34L, "Toshiba", "Toshiba")
        );
        brandService.saveBrands(brands);

        List<Tag> tags = Arrays.asList(
                new Tag(1L, "Television", "Television"),
                new Tag(2L, "TV", "Television"),
                new Tag(3L, "32", "Television"),
                new Tag(4L, "32inch", "Television"),
                new Tag(5L, "LG", "Brand name"),
                new Tag(6L, "5G", "Network band"),
                new Tag(7L, "Xiomi", "Brand name"),
                new Tag(8L, "Redmi", "Make name"),
                new Tag(9L, "Smartphone", "Product type"),
                new Tag(10L, "Android", "OS"),
                new Tag(11L, "iOS", "OS"),
                new Tag(12L, "Apple", "Brand name"),
                new Tag(13L, "iPhone", "Brand name"),
                new Tag(14L, "HP", "Brand name"),
                new Tag(15L, "Lenovo", "Lenovo"),
                new Tag(16L, "Microwave", "Microwave"),
                new Tag(17L, "Laptop", "Product type"),
                new Tag(18L, "Dell", "Brand name")
        );
        tagService.saveTags(tags);

        productStatusService.saveProductStatus(new ProductStatus(1L, "FREE", "Product is available"));
        productStatusService.saveProductStatus(new ProductStatus(2L, "CARTED", "Product has been put in a cart"));
        productStatusService.saveProductStatus(new ProductStatus(3L, "ORDERED", "Product has been ordered by someone"));
        productStatusService.saveProductStatus(new ProductStatus(4L, "PURCHASED", "Product has been purchased"));

        productTypeService.saveProductType(new ProductType(1L, "REFRIDGERATOR", "Refridgerator"));
        productTypeService.saveProductType(new ProductType(2L, "TELEVISION", "Television"));
        productTypeService.saveProductType(new ProductType(3L, "LAPTOP", "Laptop"));
        productTypeService.saveProductType(new ProductType(4L, "SMARTPHONE", "Smartphone"));
        productTypeService.saveProductType(new ProductType(5L, "PRINTER", "Printer"));
        productTypeService.saveProductType(new ProductType(6L, "MICROWAVE", "Microwave"));
        productTypeService.saveProductType(new ProductType(7L, "MONITOR", "Monitor"));

        List<Product> products = Arrays.asList(
                new Product(1L, "LG 32inch", "32inch LCD flat screen TV", new Brand(2l), new ProductType(2l), null, makeTags(new long[]{1L, 2L, 3L, 4L, 5L}), new BigDecimal(95)),
                new Product(2L, "Xiomi Redmi Note 12 pro 5G", "A very fast Xiomi smartphone", new Brand(16L), new ProductType(4L), null, makeTags(new long[]{6L, 7L, 8L, 9L, 10L}), new BigDecimal(250)),
                new Product(3L, "iPhone 14 Pro", "Apple's latest smartphone with advanced features and improved camera.", new Brand(8L), new ProductType(4L), null, makeTags(new long[]{9L, 11L, 12L, 13L}), new BigDecimal(800)),
                new Product(4L, "Samsung Galaxy S22", "Samsung's flagship smartphone with stunning display and powerful performance.", new Brand(3L), new ProductType(4L), null, makeTags(new long[]{9L, 10L}), new BigDecimal(899.99)),
                new Product(5L, "Xiomi Mi 11", "Xiomi's high-performance smartphone with excellent value for money.", new Brand(16L), new ProductType(4L), null, makeTags(new long[]{7L, 9L, 10L}), new BigDecimal(599.99)),
                new Product(6L, "HP Spectre x360", "HP's premium 2-in-1 laptop with high-end specifications and sleek design.", new Brand(13L), new ProductType(3L), null, makeTags(new long[]{14L, 17L}), new BigDecimal(1299.99)),
                new Product(7L, "Lenovo ThinkPad X1 Carbon", "Lenovo's lightweight and durable laptop, perfect for business professionals.", new Brand(14L), new ProductType(3L), null, makeTags(new long[]{15L, 17L}), new BigDecimal(1499.99)),
                new Product(8L, "Dell XPS 13", "Dell's ultra-portable laptop with stunning display and powerful performance.", new Brand(15L), new ProductType(3L), null, makeTags(new long[]{17L, 18L}), new BigDecimal(1199.99)),
                new Product(9L, "LG OLED TV", "LG's premium OLED television with stunning picture quality and smart features.", new Brand(2L), new ProductType(2L), null, makeTags(new long[]{1L, 2L, 5L}), new BigDecimal(1999.99)),
                new Product(10L, "Hisense 4K UHD TV", "Hisense's affordable 4K television with excellent value for money.", new Brand(30L), new ProductType(2L), null, makeTags(new long[]{1L, 2L}), new BigDecimal(499.99)),
                new Product(11L, "LG NanoCell TV", "LG's advanced NanoCell technology for enhanced color and clarity.", new Brand(2L), new ProductType(2L), null, makeTags(new long[]{1L, 2L, 5L}), new BigDecimal(999.99)),
                new Product(12L, "Russell Hobbs Microwave", "Russell Hobbs microwave oven with multiple cooking functions and stylish design.", new Brand(31L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(79.99)),
                new Product(13L, "Samsung Microwave Oven", "Samsung's high-quality microwave oven with advanced features and easy controls.", new Brand(3L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(99.99)),
                new Product(14L, "LG NeoChef Microwave", "LG's innovative microwave oven with smart inverter technology.", new Brand(2L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(129.99)),
                new Product(15L, "iPhone 13 Mini", "Compact version of Apple's iPhone 13 with high-end features.", new Brand(8L), new ProductType(4L), null, makeTags(new long[]{9L, 11L, 12L, 13L}), new BigDecimal(699.99)),
                new Product(16L, "Samsung Galaxy Note 20", "Samsung's high-end smartphone with stylus support and large display.", new Brand(3L), new ProductType(4L), null, makeTags(new long[]{9L, 10L}), new BigDecimal(1099.99)),
                new Product(17L, "Xiomi Redmi Note 10", "Affordable smartphone from Xiomi with good performance and battery life.", new Brand(16L), new ProductType(4L), null, makeTags(new long[]{6L, 7L, 8L, 9L, 10L}), new BigDecimal(299.99)),
                new Product(18L, "HP Pavilion Gaming Laptop", "HP's gaming laptop with powerful graphics and high-speed performance.", new Brand(13L), new ProductType(3L), null, makeTags(new long[]{14L, 17L}), new BigDecimal(899.99)),
                new Product(19L, "Lenovo Yoga 7i", "Lenovo's versatile 2-in-1 laptop with long battery life and sleek design.", new Brand(14L), new ProductType(3L), null, makeTags(new long[]{15L, 17L}), new BigDecimal(1049)),
                new Product(20L, "Dell Inspiron 15", "Dell's affordable laptop with good performance and large storage.", new Brand(15L), new ProductType(3L), null, makeTags(new long[]{17L, 18L}), new BigDecimal(749.99)),
                new Product(21L, "LG QNED MiniLED TV", "LG's latest MiniLED TV with improved brightness and contrast.", new Brand(2L), new ProductType(2L), null, makeTags(new long[]{1L, 2L, 5L}), new BigDecimal(1799.99)),
                new Product(22L, "Hisense ULED 8K TV", "Hisense's high-end 8K television with stunning resolution and smart features.", new Brand(30L), new ProductType(2L), null, makeTags(new long[]{1L, 2L}), new BigDecimal(2499.99)),
                new Product(23L, "LG UltraGear Gaming Monitor", "LG's top-tier gaming monitor with high refresh rate and low response time.", new Brand(2L), new ProductType(7L), null, makeTags(new long[]{5L}), new BigDecimal(499.99)),
                new Product(24L, "Panasonic Inverter Microwave", "Panasonic's microwave oven with inverter technology for even cooking.", new Brand(32L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(119.99)),
                new Product(25L, "Sharp Carousel Microwave", "Sharp's spacious microwave oven with easy-to-use controls.", new Brand(33L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(89.99)),
                new Product(26L, "Toshiba Countertop Microwave", "Toshiba's reliable microwave oven with convenient one-touch buttons.", new Brand(34L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(99.99)),
                new Product(27L, "iPhone 12", "Apple's previous generation smartphone with excellent performance and features.", new Brand(8L), new ProductType(4L), null, makeTags(new long[]{9L, 11L, 12L, 13}), new BigDecimal(799.99)),
                new Product(28L, "Samsung Galaxy A52", "Samsung's mid-range smartphone with good performance and value.", new Brand(3L), new ProductType(4L), null, makeTags(new long[]{9L, 10L}), new BigDecimal(349.99)),
                new Product(29L, "Xiomi Poco X3", "Xiomi's budget-friendly smartphone with impressive specifications.", new Brand(16L), new ProductType(4L), null, makeTags(new long[]{7L, 9L, 10L}), new BigDecimal(229.99)),
                new Product(30L, "HP Envy 13", "HP's premium laptop with sleek design and high-end performance.", new Brand(13L), new ProductType(3L), null, makeTags(new long[]{14L, 17L}), new BigDecimal(999.99)),
                new Product(31L, "Lenovo Legion 5", "Lenovo's gaming laptop with powerful hardware and immersive display.", new Brand(14L), new ProductType(3L), null, makeTags(new long[]{15L, 17L}), new BigDecimal(1199.99)),
                new Product(32L, "Dell G5 15", "Dell's affordable gaming laptop with good performance and design.", new Brand(15L), new ProductType(3L), null, makeTags(new long[]{17L, 18L}), new BigDecimal(899.99))
        );

        productService.saveProducts(products);

        List<ProductItem> productItems = Arrays.asList(
                new ProductItem(1l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA01"),
                new ProductItem(2l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA02"),
                new ProductItem(3l, new ProductStatus(2L), new Product(1L), null, "9PQ67890MNA03"),
                new ProductItem(4l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA04"),
                new ProductItem(5l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA05"),
                new ProductItem(6l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA06"),
                new ProductItem(7l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA07"),
                new ProductItem(8l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA08"),
                new ProductItem(9l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA09"),
                new ProductItem(10l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA010"),
                new ProductItem(11l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA011"),
                new ProductItem(12l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA012"),
                new ProductItem(13l, new ProductStatus(1L), new Product(1L), null, "9PQ67890MNA013")
        );

        productItemService.saveProductItems(productItems);

        List<ContactType> contactTypes = Arrays.asList(
                new ContactType(1L, "EMAIL", "Email address"),
                new ContactType(2L, "MESSENGER", "Instant messenger"),
                new ContactType(3L, "PHONE", "Phone number (with country code)"),
                new ContactType(4L, "SKYPE", "Skype ID"),
                new ContactType(5L, "WHATSAPP", "WhatsApp number")
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
                new Users(null, new Salutation(1L), "Erick", "Leonard", "Abraham", "elabraham", "test", makeRoles(new long[]{1}), makeAddresses(new long[]{34, 68, 75, 87}), null),
                new Users(null, new Salutation(1L), "Gretchen", null, "Proctor", "gproctor", "test", makeRoles(new long[]{1}), makeAddresses(new long[]{72}), null),
                new Users(null, new Salutation(1L), "Robbie", "Wilkins", "Erich", "rwerich", "test", makeRoles(new long[]{1}), makeAddresses(new long[]{58}), null),
                new Users(null, new Salutation(1L), "Heath", "Dickson", "Cherie", "hdcherie", "test", makeRoles(new long[]{1}), makeAddresses(new long[]{18, 31}), null),
                new Users(null, new Salutation(1L), "Brandie", "Finley", "Arthur", "bfarthur", "test", makeRoles(new long[]{1}), makeAddresses(new long[]{26}), null),
                new Users(null, new Salutation(1L), "Robinson", null, "Lara", "rlara", "test", makeRoles(new long[]{1}), makeAddresses(new long[]{62}), null),
                new Users(null, new Salutation(1L), "Randal", null, "Dickerson", "rdickerson", "test", makeRoles(new long[]{1}), null, null),
                new Users(null, new Salutation(2L), "Keri", null, "Lesley", "klesley", "test", makeRoles(new long[]{1}), makeAddresses(new long[]{73}), null),
                new Users(null, new Salutation(1L), "Roberta", null, "Morse", "rmorse", "test", makeRoles(new long[]{1}), null, null),
                new Users(null, new Salutation(1L), "Cornelius", "Herring", "Emily", "chemily", "test", makeRoles(new long[]{1}), null, null),
                new Users(null, new Salutation(1L), "Saka", "Shingirai", "Madzudzo", "ssmadzudzo", "test", makeRoles(new long[]{1, 2, 3}), makeAddresses(new long[]{72, 84}), null)
        );
        userService.saveUsers(users);

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

//        List<String> productSqls = Arrays.asList(
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-performance laptop with a sleek design and long battery life.', 'Acer Aspire E15', '1AA12345XYZ67')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Powerful laptop for professionals, featuring a stunning display and compact design.', 'Dell XPS 13', '2BC23456LMN78')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium convertible laptop with 360-degree hinge and high-resolution display.', 'HP Spectre x360', '3CD34567OPQ89')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Flagship laptop from Apple with powerful performance and Retina display.', 'MacBook Pro', '4DE45678RST90')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Business ultrabook known for its durability, security features, and performance.', 'Lenovo ThinkPad X1 Carbon', '5EF56789UVW01')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Dual-screen laptop with innovative design and powerful specifications.', 'Asus ZenBook Pro Duo', '6FG67890WXY12')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium laptop with a sleek design and vibrant touchscreen display.', 'Microsoft Surface Laptop', '7GH78901XYZ23')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Thin and light laptop with powerful performance and long battery life.', 'Huawei MateBook X Pro', '8HI89012ABC34')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Gaming laptop with high-refresh-rate display and powerful GPU.', 'Razer Blade 15', '9IJ90123CDE45')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-end Chromebook with premium build quality and powerful internals.', 'Google Pixelbook', '0JK01234EFG56')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Latest flagship smartphone from Apple with advanced camera and performance.', 'iPhone 13 Pro', '1KL12345GHI67')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium Android smartphone with powerful features and impressive camera.', 'Samsung Galaxy S22 Ultra', '2LM23456IJK78')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Google''s latest flagship smartphone with pure Android experience.', 'Google Pixel 7', '3MN34567JKL89')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Powerful tablet with large display and support for Apple Pencil.', 'iPad Pro', '4NO45678KLM90')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced smartwatch with fitness and health tracking features.', 'Apple Watch Series 7', '5OP56789LMN01')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium smartwatch with stylish design and advanced health monitoring.', 'Samsung Galaxy Watch 4', '6PQ67890MNO12')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Next-generation gaming console from Sony with powerful hardware.', 'Sony PlayStation 5', '7QR78901NOP23')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Latest gaming console from Microsoft offering high-resolution gaming experience.', 'Xbox Series X', '8RS89012OPQ34')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact drone with 4K camera and intelligent flight modes.', 'DJI Mavic Air 2', '9ST90123PQR45')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Flagship action camera known for its rugged build and advanced features.', 'GoPro Hero 10 Black', '0TU01234QRS56')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart display with rotating screen and Alexa integration.', 'Amazon Echo Show 10', '1UV12345RST67')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced fitness tracker with built-in GPS and health monitoring features.', 'Fitbit Charge 5', '2VW23456STU78')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium noise-canceling headphones with immersive sound quality.', 'Bose QuietComfort 45', '3WX34567TUV89')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-quality wireless headphones with industry-leading noise cancellation.', 'Sony WH-1000XM4 Headphones', '4XY45678UVW90')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Upgraded version of Nintendo Switch with OLED display.', 'Nintendo Switch OLED', '5YZ56789VWX01')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced wireless mouse with customizable buttons and ergonomic design.', 'Logitech MX Master 3 Mouse', '6ZA67890WXY12')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium multisport GPS smartwatch with rugged design and advanced features.', 'Garmin Fenix 7', '7AB78901XYZ23')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'All-in-one virtual reality headset with wireless freedom and immersive experiences.', 'Oculus Quest 2', '8BC89012ABC34')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Portable Bluetooth speaker with powerful sound and waterproof design.', 'JBL Flip 6 Portable Speaker', '9CD90123BCD45')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-resolution mirrorless camera with advanced autofocus and image stabilization.', 'Canon EOS R5 Camera', '0DE01234CDE56')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Versatile laptop with powerful performance for everyday computing tasks.', 'HP Pavilion 15', '1EF12345LMN67')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Ultra-portable laptop with long battery life and sleek design.', 'Lenovo IdeaPad Slim 7', '2FG23456OPQ78')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 2, 1, 'Gaming laptop with high-refresh-rate display and RGB keyboard.', 'Alienware m15 R6', '3GH34567QRS89')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Affordable laptop with decent performance and ample storage.', 'Acer Aspire 5', '4HI45678STU90')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Convertible laptop with touchscreen display and stylus support.', 'HP Envy x360', '5IJ56789UVW01')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Sleek and lightweight laptop for professionals on the go.', 'Dell Latitude 14', '6JK67890XYZ12')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Portable laptop with durable design and all-day battery life.', 'Lenovo Chromebook Flex 5', '7KL78901ABC23')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Budget-friendly laptop with adequate performance for everyday use.', 'Acer Swift 3', '8LM89012BCD34')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Gaming laptop with powerful specs and customizable RGB lighting.', 'MSI GE76 Raider', '9MN90123CDE45')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Ultra-slim laptop with stunning display and premium build quality.', 'LG Gram 17', '0NO01234DEF56')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact smartphone with impressive camera capabilities and 5G support.', 'OnePlus 10 Pro', '1OP12345EFG67')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Flagship smartphone with innovative camera features and stylish design.', 'Xiaomi Mi 12', '2PQ23456FGH78')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Budget-friendly smartphone with large display and decent performance.', 'Motorola Moto G Power', '3QR34567GHI89')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact tablet with long battery life and vibrant display.', 'Samsung Galaxy Tab S7', '4RS45678HIJ90')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Budget-friendly tablet with basic features and decent performance.', 'Amazon Fire HD 10', '5ST56789IJK01')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Premium fitness tracker with heart rate monitoring and GPS functionality.', 'Garmin Venu 2', '6TU67890JKL12')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Advanced smart scale with body composition analysis and Wi-Fi connectivity.', 'Withings Body Cardio', '7UV78901KLM23')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Noise-canceling true wireless earbuds with long battery life and sweat resistance.', 'Samsung Galaxy Buds Pro', '8VW89012LMN34')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Wireless gaming headset with 3D spatial audio and long-lasting battery.', 'SteelSeries Arctis 7', '9WX90123MNO45')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Portable SSD with fast data transfer speeds and rugged design.', 'SanDisk Extreme Portable SSD', '0XY01234NOP56')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'External hard drive with large storage capacity and USB 3.0 connectivity.', 'Seagate Backup Plus Slim', '1YZ12345OPQ67')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact photo printer for printing photos directly from smartphones and cameras.', 'Canon IVY Mini Photo Printer', '2ZA23456PQR78')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Compact instant camera with vintage design and automatic exposure control.', 'Fujifilm Instax Mini 11', '3AB34567QRS89')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'High-resolution document scanner with automatic document feeder.', 'Epson WorkForce ES-500W', '4BC45678RST90')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Wireless charging pad with fast charging support for smartphones and other devices.', 'Anker PowerWave Pad', '5CD56789STU01')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart thermostat with energy-saving features and smartphone app control.', 'Nest Learning Thermostat', '6DE67890TUV12')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart security camera with 1080p HD video and two-way audio.', 'Ring Indoor Cam', '7EF78901UVW23')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Smart doorbell with motion detection and night vision.', 'Arlo Essential Video Doorbell', '8FG89012VWX34')",
//                "INSERT INTO Product (`brand_id`, `productStatus_id`, `productType_id`, description, name, serialNumber) VALUES(1, 1, 1, 'Robot vacuum cleaner with mapping technology and voice control.', 'iRobot Roomba i7+', '9GH90123WXY45')"
//        );
//        productSqls.forEach(sql -> {
//            SqlParameterSource namedParameters = new MapSqlParameterSource();
//            namedParameterJdbcTemplate.update(sql, namedParameters);
//        });
    }

    private Set<Role> makeRoles(long[] ids) {
        Set<Role> roles = new HashSet<>();
        for (long id : ids) {
            roles.add(new Role(id));
        }
        return roles;
    }

    private Set<Address> makeAddresses(long[] ids) {
        Set<Address> addresses = new HashSet<>();
        for (long id : ids) {
            addresses.add(new Address(id));
        }
        return addresses;
    }

    private List<Tag> makeTags(long[] ids) {
        List<Tag> tags = new ArrayList<>();
        for (long id : ids) {
            tags.add(new Tag(id));
        }
        return tags;
    }
}
