/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import zw.co.techtrendz.techtrendzapi.service.ProductItemService;
import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Stream;
import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import zw.co.techtrendz.techtrendzapi.entity.Address;
import zw.co.techtrendz.techtrendzapi.entity.BankAccount;
import zw.co.techtrendz.techtrendzapi.entity.Brand;
import zw.co.techtrendz.techtrendzapi.entity.ContactType;
import zw.co.techtrendz.techtrendzapi.entity.CheckoutStatus;
import zw.co.techtrendz.techtrendzapi.entity.Contact;
import zw.co.techtrendz.techtrendzapi.entity.MediaFile;
import zw.co.techtrendz.techtrendzapi.entity.Product;
import zw.co.techtrendz.techtrendzapi.entity.ProductItem;
import zw.co.techtrendz.techtrendzapi.entity.ProductStatus;
import zw.co.techtrendz.techtrendzapi.entity.ProductType;
import zw.co.techtrendz.techtrendzapi.entity.Role;
import zw.co.techtrendz.techtrendzapi.entity.Salutation;
import zw.co.techtrendz.techtrendzapi.entity.Tag;
import zw.co.techtrendz.techtrendzapi.entity.UserDto;
import zw.co.techtrendz.techtrendzapi.service.AddressService;
import zw.co.techtrendz.techtrendzapi.service.BankAccountService;
import zw.co.techtrendz.techtrendzapi.service.BrandService;
import zw.co.techtrendz.techtrendzapi.service.ContactTypeService;
import zw.co.techtrendz.techtrendzapi.service.ProductService;
import zw.co.techtrendz.techtrendzapi.service.ProductStatusService;
import zw.co.techtrendz.techtrendzapi.service.ProductTypeService;
import zw.co.techtrendz.techtrendzapi.service.RoleService;
import zw.co.techtrendz.techtrendzapi.service.SalutationService;
import zw.co.techtrendz.techtrendzapi.service.TagService;
import zw.co.techtrendz.techtrendzapi.service.UserService;
import zw.co.techtrendz.techtrendzapi.service.CheckoutStatusService;
import zw.co.techtrendz.techtrendzapi.service.ContactService;
import zw.co.techtrendz.techtrendzapi.service.MediaFileService;
import zw.co.techtrendz.techtrendzapi.util.FileMultipartFile;

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
    private CheckoutStatusService checkoutStatusService;
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
    private BankAccountService bankAccountService;
    @Autowired
    private ContactService contactService;
    @Autowired
    private MediaFileService mediaFileService;

    @Value("${file.upload-dir}") // Define this in application.properties
    private String uploadDir;

    @Bean
    public ApplicationRunner insertDummyData() {
        return args -> {
            System.out.println("\n\nInserting dummy data...\n");
            this.dummyDataInsertion();
            System.out.println("\n\nDummy data successfully inserted.\n");
        };
    }

    private void dummyDataInsertion() {
        Path img = Paths.get(System.getProperty("user.dir"), uploadDir, "/img");
        Path vid = Paths.get(System.getProperty("user.dir"), uploadDir, "/vid");
        Path misc = Paths.get(System.getProperty("user.dir"), uploadDir, "/misc");
        this.cleanOldMedia(img);
        this.cleanOldMedia(vid);
        this.cleanOldMedia(misc);

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
        productStatusService.saveProductStatus(new ProductStatus(3L, "ORDERED", "Product has been checkouted by someone"));
        productStatusService.saveProductStatus(new ProductStatus(4L, "PURCHASED", "Product has been purchased"));

        productTypeService.saveProductType(new ProductType(1L, "REFRIDGERATOR", "Refridgerator"));
        productTypeService.saveProductType(new ProductType(2L, "TELEVISION", "Television"));
        productTypeService.saveProductType(new ProductType(3L, "LAPTOP", "Laptop"));
        productTypeService.saveProductType(new ProductType(4L, "SMARTPHONE", "Smartphone"));
        productTypeService.saveProductType(new ProductType(5L, "PRINTER", "Printer"));
        productTypeService.saveProductType(new ProductType(6L, "MICROWAVE", "Microwave"));
        productTypeService.saveProductType(new ProductType(7L, "MONITOR", "Monitor"));

        this.tempMedia();

        List<Product> products = Arrays.asList(
                new Product(1L, "LG 32inch", "32inch LCD flat screen TV", new Brand(2l), new ProductType(2l), null, makeTags(new long[]{1L, 2L, 3L, 4L, 5L}), new BigDecimal(95), makeMediaFiles(new long[]{1L, 2L})),
                new Product(2L, "Xiomi Redmi Note 12 pro 5G", "A very fast Xiomi smartphone", new Brand(16L), new ProductType(4L), null, makeTags(new long[]{6L, 7L, 8L, 9L, 10L}), new BigDecimal(250), makeMediaFiles(new long[]{1L, 2L})),
                new Product(3L, "iPhone 14 Pro", "Apple's latest smartphone with advanced features and improved camera.", new Brand(8L), new ProductType(4L), null, makeTags(new long[]{9L, 11L, 12L, 13L}), new BigDecimal(800), makeMediaFiles(new long[]{1L, 2L})),
                new Product(4L, "Samsung Galaxy S22", "Samsung's flagship smartphone with stunning display and powerful performance.", new Brand(3L), new ProductType(4L), null, makeTags(new long[]{9L, 10L}), new BigDecimal(899.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(5L, "Xiomi Mi 11", "Xiomi's high-performance smartphone with excellent value for money.", new Brand(16L), new ProductType(4L), null, makeTags(new long[]{7L, 9L, 10L}), new BigDecimal(599.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(6L, "HP Spectre x360", "HP's premium 2-in-1 laptop with high-end specifications and sleek design.", new Brand(13L), new ProductType(3L), null, makeTags(new long[]{14L, 17L}), new BigDecimal(1299.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(7L, "Lenovo ThinkPad X1 Carbon", "Lenovo's lightweight and durable laptop, perfect for business professionals.", new Brand(14L), new ProductType(3L), null, makeTags(new long[]{15L, 17L}), new BigDecimal(1499.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(8L, "Dell XPS 13", "Dell's ultra-portable laptop with stunning display and powerful performance. \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", new Brand(15L), new ProductType(3L), null, makeTags(new long[]{17L, 18L}), new BigDecimal(1199.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(9L, "LG OLED TV", "LG's premium OLED television with stunning picture quality and smart features.", new Brand(2L), new ProductType(2L), null, makeTags(new long[]{1L, 2L, 5L}), new BigDecimal(1999.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(10L, "Hisense 4K UHD TV", "Hisense's affordable 4K television with excellent value for money.", new Brand(30L), new ProductType(2L), null, makeTags(new long[]{1L, 2L}), new BigDecimal(499.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(11L, "LG NanoCell TV", "LG's advanced NanoCell technology for enhanced color and clarity.", new Brand(2L), new ProductType(2L), null, makeTags(new long[]{1L, 2L, 5L}), new BigDecimal(999.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(12L, "Russell Hobbs Microwave", "Russell Hobbs microwave oven with multiple cooking functions and stylish design.", new Brand(31L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(79.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(13L, "Samsung Microwave Oven", "Samsung's high-quality microwave oven with advanced features and easy controls.", new Brand(3L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(99.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(14L, "LG NeoChef Microwave", "LG's innovative microwave oven with smart inverter technology.", new Brand(2L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(129.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(15L, "iPhone 13 Mini", "Compact version of Apple's iPhone 13 with high-end features.", new Brand(8L), new ProductType(4L), null, makeTags(new long[]{9L, 11L, 12L, 13L}), new BigDecimal(699.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(16L, "Samsung Galaxy Note 20", "Samsung's high-end smartphone with stylus support and large display.", new Brand(3L), new ProductType(4L), null, makeTags(new long[]{9L, 10L}), new BigDecimal(1099.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(17L, "Xiomi Redmi Note 10", "Affordable smartphone from Xiomi with good performance and battery life.", new Brand(16L), new ProductType(4L), null, makeTags(new long[]{6L, 7L, 8L, 9L, 10L}), new BigDecimal(299.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(18L, "HP Pavilion Gaming Laptop", "HP's gaming laptop with powerful graphics and high-speed performance.", new Brand(13L), new ProductType(3L), null, makeTags(new long[]{14L, 17L}), new BigDecimal(899.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(19L, "Lenovo Yoga 7i", "Lenovo's versatile 2-in-1 laptop with long battery life and sleek design.", new Brand(14L), new ProductType(3L), null, makeTags(new long[]{15L, 17L}), new BigDecimal(1049), makeMediaFiles(new long[]{1L, 2L})),
                new Product(20L, "Dell Inspiron 15", "Dell's affordable laptop with good performance and large storage.", new Brand(15L), new ProductType(3L), null, makeTags(new long[]{17L, 18L}), new BigDecimal(749.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(21L, "LG QNED MiniLED TV", "LG's latest MiniLED TV with improved brightness and contrast.", new Brand(2L), new ProductType(2L), null, makeTags(new long[]{1L, 2L, 5L}), new BigDecimal(1799.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(22L, "Hisense ULED 8K TV", "Hisense's high-end 8K television with stunning resolution and smart features.", new Brand(30L), new ProductType(2L), null, makeTags(new long[]{1L, 2L}), new BigDecimal(2499.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(23L, "LG UltraGear Gaming Monitor", "LG's top-tier gaming monitor with high refresh rate and low response time.", new Brand(2L), new ProductType(7L), null, makeTags(new long[]{5L}), new BigDecimal(499.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(24L, "Panasonic Inverter Microwave", "Panasonic's microwave oven with inverter technology for even cooking.", new Brand(32L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(119.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(25L, "Sharp Carousel Microwave", "Sharp's spacious microwave oven with easy-to-use controls.", new Brand(33L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(89.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(26L, "Toshiba Countertop Microwave", "Toshiba's reliable microwave oven with convenient one-touch buttons.", new Brand(34L), new ProductType(6L), null, makeTags(new long[]{16L}), new BigDecimal(99.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(27L, "iPhone 12", "Apple's previous generation smartphone with excellent performance and features.", new Brand(8L), new ProductType(4L), null, makeTags(new long[]{9L, 11L, 12L, 13}), new BigDecimal(799.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(28L, "Samsung Galaxy A52", "Samsung's mid-range smartphone with good performance and value.", new Brand(3L), new ProductType(4L), null, makeTags(new long[]{9L, 10L}), new BigDecimal(349.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(29L, "Xiomi Poco X3", "Xiomi's budget-friendly smartphone with impressive specifications.", new Brand(16L), new ProductType(4L), null, makeTags(new long[]{7L, 9L, 10L}), new BigDecimal(229.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(30L, "HP Envy 13", "HP's premium laptop with sleek design and high-end performance.", new Brand(13L), new ProductType(3L), null, makeTags(new long[]{14L, 17L}), new BigDecimal(999.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(31L, "Lenovo Legion 5", "Lenovo's gaming laptop with powerful hardware and immersive display.", new Brand(14L), new ProductType(3L), null, makeTags(new long[]{15L, 17L}), new BigDecimal(1199.99), makeMediaFiles(new long[]{1L, 2L})),
                new Product(32L, "Dell G5 15", "Dell's affordable gaming laptop with good performance and design.", new Brand(15L), new ProductType(3L), null, makeTags(new long[]{17L, 18L}), new BigDecimal(899.99), makeMediaFiles(new long[]{1L, 2L}))
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
                new ProductItem(13l, new ProductStatus(1L), new Product(8L), null, "9PQ67890MNA013"),
                new ProductItem(14l, new ProductStatus(1L), new Product(8L), null, "9PQ67890MNA014"),
                new ProductItem(15l, new ProductStatus(1L), new Product(8L), null, "9PQ67890MNA015"),
                new ProductItem(16l, new ProductStatus(1L), new Product(8L), null, "9PQ67890MNA016"),
                new ProductItem(17l, new ProductStatus(1L), new Product(8L), null, "9PQ67890MNA017"),
                new ProductItem(18l, new ProductStatus(1L), new Product(8L), null, "9PQ67890MNA018")
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
                new Role(1L, "CUSTOMER", "Role for purchasing customer."),
                new Role(2L, "ADMINISTRATOR", "Role for site administrator."),
                new Role(3L, "MAINTAINER", "Role for maintaining site products, prices, and all other shop data.")
        );
        roleService.saveRoles(roles);

        checkoutStatusService.saveCheckoutStatus(new CheckoutStatus(1L, "ORDERED", "Order placed"));
        checkoutStatusService.saveCheckoutStatus(new CheckoutStatus(2L, "PENDING", "Order pending"));
        checkoutStatusService.saveCheckoutStatus(new CheckoutStatus(3L, "PROCESSING", "Order being processed"));
        checkoutStatusService.saveCheckoutStatus(new CheckoutStatus(4L, "APPROVED", "Order approved"));
        checkoutStatusService.saveCheckoutStatus(new CheckoutStatus(5L, "PURCHASED", "Purchase successful"));

        List<Address> addresses = Arrays.asList(
                new Address(1L, 123L, "Main Street", "Main Street", "Newlands", "Harare", null, "Harare", "Zimbabwe", "12345"),
                new Address(2L, 456L, "High Street", "High Street", "Hillside", "Bulawayo", null, "Bulawayo", "Zimbabwe", "67890"),
                new Address(3L, 789L, "Market Road", "Market Road", null, "Mutare", null, "Manicaland", "Zimbabwe", "54321"),
                new Address(4L, 101L, "Park Avenue", "Park Avenue", "Senga", "Gweru", null, "Midlands", "Zimbabwe", "98765"),
                new Address(5L, 112L, "Church Street", "Church Street", "Rhodene", "Masvingo", null, "Masvingo", "Zimbabwe", "45678"),
                new Address(6L, 131L, "Industrial Road", "Industrial Road", "Gaika", "Kwekwe", null, "Midlands", "Zimbabwe", "23456"),
                new Address(7L, 151L, "Oxford Street", "Oxford Street", "Zengeza", "Chitungwiza", null, "Harare", "Zimbabwe", "87654"),
                new Address(8L, 171L, "Riverside Drive", "Riverside Drive", "Sunway City", "Epworth", null, "Harare", "Zimbabwe", "76543"),
                new Address(9L, 192L, "Railway Avenue", "Railway Avenue", null, "Bindura", null, "Mashonaland Central", "Zimbabwe", "32109"),
                new Address(10L, 201L, "Victoria Avenue", "Victoria Avenue", "Mosi-oa-Tunya", "Victoria Falls", null, "Matabeleland North", "Zimbabwe", "10987"),
                new Address(11L, 221L, "Freedom Avenue", "Freedom Avenue", "Chikonohono", "Chinhoyi", null, "Mashonaland West", "Zimbabwe", "54321"),
                new Address(12L, 241L, "Independence Street", "Independence Street", "Chiedza", "Karoi", null, "Mashonaland West", "Zimbabwe", "98765"),
                new Address(13L, 261L, "Liberty Lane", "Liberty Lane", "Gaza", "Chipinge", null, "Manicaland", "Zimbabwe", "23456"),
                new Address(14L, 281L, "Unity Road", "Unity Road", "Dulivhadzimu", "Beitbridge", null, "Matabeleland South", "Zimbabwe", "87654"),
                new Address(15L, 301L, "Victory Crescent", "Victory Crescent", "Chiredzi North", "Chiredzi", null, "Masvingo", "Zimbabwe", "76543"),
                new Address(16L, 321L, "Hope Street", "Hope Street", "Makuvaza", "Norton", null, "Mashonaland West", "Zimbabwe", "32109"),
                new Address(17L, 341L, "Faith Lane", "Faith Lane", "Dombotombo", "Marondera", null, "Mashonaland East", "Zimbabwe", "10987"),
                new Address(18L, 361L, "Grace Avenue", "Grace Avenue", "Damafalls", "Ruwa", null, "Mashonaland East", "Zimbabwe", "21098"),
                new Address(19L, 381L, "Joy Road", "Joy Road", "Phelandaba", "Gwanda", null, "Matabeleland South", "Zimbabwe", "54321"),
                new Address(20L, 401L, "Peace Street", "Peace Street", "Zvamahande", "Shurugwi", null, "Midlands", "Zimbabwe", "87654"),
                new Address(21L, 421L, "Liberty Lane", "Liberty Lane", "Chaminuka", "Chegutu", null, "Mashonaland West", "Zimbabwe", "32109"),
                new Address(22L, 441L, "Unity Avenue", "Unity Avenue", "Nembudziya", "Gokwe", null, "Midlands", "Zimbabwe", "10987"),
                new Address(23L, 461L, "Victory Crescent", "Victory Crescent", "Mabuto", "Zvishavane", null, "Midlands", "Zimbabwe", "54321"),
                new Address(24L, 481L, "Hope Street", "Hope Street", "Chirumanzi", "Mvuma", null, "Midlands", "Zimbabwe", "87654"),
                new Address(25L, 501L, "Faith Lane", "Faith Lane", "Chakari", "Banket", null, "Mashonaland West", "Zimbabwe", "32109"),
                new Address(26L, 521L, "Grace Avenue", "Grace Avenue", "Zengeza", "Chitungwiza", null, "Harare", "Zimbabwe", "10987"),
                new Address(27L, 541L, "Joy Road", "Joy Road", "Sunway City", "Epworth", null, "Harare", "Zimbabwe", "54321"),
                new Address(28L, 561L, "Peace Street", "Peace Street", "Vengere", "Rusape", null, "Manicaland", "Zimbabwe", "87654"),
                new Address(29L, 581L, "Liberty Lane", "Liberty Lane", "Mahombekombe", "Kariba", null, "Mashonaland West", "Zimbabwe", "32109"),
                new Address(30L, 601L, "Unity Avenue", "Unity Avenue", "Madziwa", "Murehwa", null, "Mashonaland East", "Zimbabwe", "10987"),
                new Address(31L, 621L, "Victory Crescent", "Victory Crescent", "Dendera", "Nyanga", null, "Manicaland", "Zimbabwe", "54321"),
                new Address(32L, 641L, "Hope Street", "Hope Street", "Chipadze", "Bindura", null, "Mashonaland Central", "Zimbabwe", "87654"),
                new Address(33L, 661L, "Faith Lane", "Faith Lane", "Norton Town", "Norton", null, "Mashonaland West", "Zimbabwe", "32109"),
                new Address(34L, 681L, "Grace Avenue", "Grace Avenue", "Beitbridge Town", "Beitbridge", null, "Matabeleland South", "Zimbabwe", "10987"),
                new Address(35L, 701L, "Joy Road", "Joy Road", "Chiredzi Town", "Chiredzi", null, "Masvingo", "Zimbabwe", "54321"),
                new Address(36L, 721L, "Peace Street", "Peace Street", "Karoi Town", "Karoi", null, "Mashonaland West", "Zimbabwe", "87654"),
                new Address(37L, 741L, "Liberty Lane", "Liberty Lane", "Gwanda Town", "Gwanda", null, "Matabeleland South", "Zimbabwe", "32109"),
                new Address(38L, 761L, "Unity Avenue", "Unity Avenue", "Chipinge Town", "Chipinge", null, "Manicaland", "Zimbabwe", "10987"),
                new Address(39L, 781L, "Victory Crescent", "Victory Crescent", "Mvuma Town", "Mvuma", null, "Midlands", "Zimbabwe", "54321"),
                new Address(40L, 801L, "Hope Street", "Hope Street", "Chinhoyi Town", "Chinhoyi", null, "Mashonaland West", "Zimbabwe", "87654"),
                new Address(41L, 821L, "Faith Lane", "Faith Lane", "Zvishavane Town", "Zvishavane", null, "Midlands", "Zimbabwe", "32109"),
                new Address(42L, 841L, "Grace Avenue", "Grace Avenue", "Chitungwiza Town", "Chitungwiza", null, "Harare", "Zimbabwe", "10987"),
                new Address(43L, 861L, "Peace Street", "Peace Street", "Shurugwi Town", "Shurugwi", null, "Midlands", "Zimbabwe", "54321"),
                new Address(44L, 881L, "Liberty Lane", "Liberty Lane", "Marondera Town", "Marondera", null, "Mashonaland East", "Zimbabwe", "87654"),
                new Address(45L, 901L, "Unity Avenue", "Unity Avenue", "Ruwa Town", "Ruwa", null, "Mashonaland East", "Zimbabwe", "32109"),
                new Address(46L, 123L, "Main Street", "Main Street", "Central District", "Harare", "Harare", "Harare", "Zimbabwe", "12345"),
                new Address(47L, 456L, "Second Avenue", "Second Avenue", "Western District", "Bulawayo", "Bulawayo", "Bulawayo", "Zimbabwe", "67890"),
                new Address(48L, 789L, "Third Street", "Third Street", "Eastern District", "Mutare", "Manicaland", "Manicaland", "Zimbabwe", "54321"),
                new Address(49L, 101L, "Fourth Road", "Fourth Road", "Midlands District", "Gweru", "Midlands", "Midlands", "Zimbabwe", "13579"),
                new Address(50L, 202L, "Fifth Close", "Fifth Close", "Southern District", "Masvingo", "Masvingo", "Masvingo", "Zimbabwe", "97531"),
                new Address(51L, 303L, "Sixth Lane", "Sixth Lane", "Central District", "Kwekwe", "Midlands", "Midlands", "Zimbabwe", "24680"),
                new Address(52L, 404L, "Seventh Avenue", "Seventh Avenue", "Harare Metropolitan", "Chitungwiza", "Harare", "Harare", "Zimbabwe", "08642"),
                new Address(53L, 505L, "Eighth Road", "Eighth Road", "Mashonaland Central", "Bindura", "Mashonaland Central", "Mashonaland Central", "Zimbabwe", "96420"),
                new Address(54L, 606L, "Ninth Street", "Ninth Street", "Mashonaland East", "Marondera", "Mashonaland East", "Mashonaland East", "Zimbabwe", "02876"),
                new Address(55L, 707L, "Tenth Close", "Tenth Close", "Matabeleland South", "Gwanda", "Matabeleland South", "Matabeleland South", "Zimbabwe", "50712"),
                new Address(56L, 808L, "Eleventh Lane", "Eleventh Lane", "Mashonaland West", "Kadoma", "Mashonaland West", "Mashonaland West", "Zimbabwe", "38496"),
                new Address(57L, 909L, "Twelfth Avenue", "Twelfth Avenue", "Mashonaland West", "Kariba", "Mashonaland West", "Mashonaland West", "Zimbabwe", "03572"),
                new Address(58L, 111L, "Thirteenth Road", "Thirteenth Road", "Matabeleland North", "Hwange", "Matabeleland North", "Matabeleland North", "Zimbabwe", "92035"),
                new Address(59L, 222L, "Fourteenth Street", "Fourteenth Street", "Manicaland", "Chipinge", "Manicaland", "Manicaland", "Zimbabwe", "72504"),
                new Address(60L, 333L, "Fifteenth Close", "Fifteenth Close", "Mashonaland West", "Chinhoyi", "Mashonaland West", "Mashonaland West", "Zimbabwe", "16928"),
                new Address(61L, 444L, "Sixteenth Lane", "Sixteenth Lane", "Matabeleland South", "Beitbridge", "Matabeleland South", "Matabeleland South", "Zimbabwe", "40389"),
                new Address(62L, 555L, "Seventeenth Avenue", "Seventeenth Avenue", "Mashonaland West", "Norton", "Mashonaland West", "Mashonaland West", "Zimbabwe", "70836"),
                new Address(63L, 666L, "Eighteenth Road", "Eighteenth Road", "Matabeleland North", "Victoria Falls", "Matabeleland North", "Matabeleland North", "Zimbabwe", "92540"),
                new Address(64L, 777L, "Nineteenth Street", "Nineteenth Street", "Mashonaland East", "Ruwa", "Mashonaland East", "Mashonaland East", "Zimbabwe", "13870"),
                new Address(65L, 888L, "Twentieth Close", "Twentieth Close", "Mashonaland West", "Chegutu", "Mashonaland West", "Mashonaland West", "Zimbabwe", "24597"),
                new Address(66L, 999L, "Twenty-First Lane", "Twenty-First Lane", "Manicaland", "Rusape", "Manicaland", "Manicaland", "Zimbabwe", "83245"),
                new Address(67L, 121L, "Twenty-Second Avenue", "Twenty-Second Avenue", "Midlands", "Zvishavane", "Midlands", "Midlands", "Zimbabwe", "67024"),
                new Address(68L, 232L, "Twenty-Third Road", "Twenty-Third Road", "Mashonaland East", "Murehwa", "Mashonaland East", "Mashonaland East", "Zimbabwe", "92647"),
                new Address(69L, 343L, "Twenty-Fourth Street", "Twenty-Fourth Street", "Harare Metropolitan", "Epworth", "Harare", "Harare", "Zimbabwe", "34791"),
                new Address(70L, 454L, "Twenty-Fifth Close", "Twenty-Fifth Close", "Masvingo", "Chiredzi", "Masvingo", "Masvingo", "Zimbabwe", "51063"),
                new Address(71L, 565L, "Twenty-Sixth Lane", "Twenty-Sixth Lane", "Midlands", "Shurugwi", "Midlands", "Midlands", "Zimbabwe", "02548"),
                new Address(72L, 676L, "Twenty-Seventh Avenue", "Twenty-Seventh Avenue", "Midlands", "Gokwe", "Midlands", "Midlands", "Zimbabwe", "68394"),
                new Address(73L, 787L, "Twenty-Eighth Road", "Twenty-Eighth Road", "Midlands", "Kwekwe", "Midlands", "Midlands", "Zimbabwe", "47291"),
                new Address(74L, 898L, "Twenty-Ninth Street", "Twenty-Ninth Street", "Mashonaland West", "Karoi", "Mashonaland West", "Mashonaland West", "Zimbabwe", "62540"),
                new Address(75L, 909L, "Thirtieth Close", "Thirtieth Close", "Midlands", "Zhombe", "Midlands", "Midlands", "Zimbabwe", "87394"),
                new Address(76L, 110L, "Thirty-First Lane", "Thirty-First Lane", "Mashonaland Central", "Mvurwi", "Mashonaland Central", "Mashonaland Central", "Zimbabwe", "40296"),
                new Address(77L, 221L, "Thirty-Second Avenue", "Thirty-Second Avenue", "Matabeleland North", "Nkayi", "Matabeleland North", "Matabeleland North", "Zimbabwe", "69382"),
                new Address(78L, 332L, "Thirty-Third Road", "Thirty-Third Road", "Midlands", "Mvuma", "Midlands", "Midlands", "Zimbabwe", "52049"),
                new Address(79L, 443L, "Thirty-Fourth Street", "Thirty-Fourth Street", "Masvingo", "Gutu", "Masvingo", "Masvingo", "Zimbabwe", "83519"),
                new Address(80L, 554L, "Thirty-Fifth Close", "Thirty-Fifth Close", "Mashonaland West", "Raffingora", "Mashonaland West", "Mashonaland West", "Zimbabwe", "63058"),
                new Address(81L, 665L, "Thirty-Sixth Lane", "Thirty-Sixth Lane", "Mashonaland East", "Chivhu", "Mashonaland East", "Mashonaland East", "Zimbabwe", "19475"),
                new Address(82L, 776L, "Thirty-Seventh Avenue", "Thirty-Seventh Avenue", "Mashonaland Central", "Centenary", "Mashonaland Central", "Mashonaland Central", "Zimbabwe", "83946"),
                new Address(83L, 887L, "Thirty-Eighth Road", "Thirty-Eighth Road", "Matabeleland South", "Plumtree", "Matabeleland South", "Matabeleland South", "Zimbabwe", "57294"),
                new Address(84L, 998L, "Thirty-Ninth Street", "Thirty-Ninth Street", "Manicaland", "Headlands", "Manicaland", "Manicaland", "Zimbabwe", "30495"),
                new Address(85L, 123L, "Fortieth Close", "Fortieth Close", "Mashonaland Central", "Shamva", "Mashonaland Central", "Mashonaland Central", "Zimbabwe", "93856"),
                new Address(86L, 234L, "Forty-First Lane", "Forty-First Lane", "Manicaland", "Chimanimani", "Manicaland", "Manicaland", "Zimbabwe", "50297"),
                new Address(87L, 345L, "Forty-Second Avenue", "Forty-Second Avenue", "Mashonaland Central", "Concession", "Mashonaland Central", "Mashonaland Central", "Zimbabwe", "72094"),
                new Address(88L, 456L, "Forty-Third Road", "Forty-Third Road", "Manicaland", "Nyanga", "Manicaland", "Manicaland", "Zimbabwe", "39047"),
                new Address(89L, 567L, "Forty-Fourth Street", "Forty-Fourth Street", "Mashonaland Central", "Guruve", "Mashonaland Central", "Mashonaland Central", "Zimbabwe", "64023"),
                new Address(90L, 678L, "Forty-Fifth Close", "Forty-Fifth Close", "Midlands", "Chirumanzu", "Midlands", "Midlands", "Zimbabwe", "85039"),
                new Address(91L, 789L, "Forty-Sixth Lane", "Forty-Sixth Lane", "Mashonaland Central", "Rushinga", "Mashonaland Central", "Mashonaland Central", "Zimbabwe", "32058"),
                new Address(92L, 890L, "Forty-Seventh Avenue", "Forty-Seventh Avenue", "Mashonaland Central", "Mazowe", "Mashonaland Central", "Mashonaland Central", "Zimbabwe", "97340"),
                new Address(93L, 901L, "Forty-Eighth Road", "Forty-Eighth Road", "Mashonaland East", "Uzumba-Maramba-Pfungwe", "Mashonaland East", "Mashonaland East", "Zimbabwe", "64072"),
                new Address(94L, 112L, "Forty-Ninth Street", "Forty-Ninth Street", "Mashonaland West", "Norton", "Mashonaland West", "Mashonaland West", "Zimbabwe", "30894"),
                new Address(95L, 223L, "Fiftieth Close", "Fiftieth Close", "Matabeleland North", "Binga", "Matabeleland North", "Matabeleland North", "Zimbabwe", "54023"),
                new Address(96L, 334L, "Fiftieth Lane", "Fiftieth Lane", "Manicaland", "Buhera", "Manicaland", "Manicaland", "Zimbabwe", "67382"),
                new Address(97L, 445L, "Fiftieth Avenue", "Fiftieth Avenue", "Mashonaland East", "Goromonzi", "Mashonaland East", "Mashonaland East", "Zimbabwe", "98235"),
                new Address(98L, 556L, "Fiftieth Road", "Fiftieth Road", "Matabeleland South", "Gwanda", "Matabeleland South", "Matabeleland South", "Zimbabwe", "50382"),
                new Address(99L, 667L, "Fifty-First Street", "Fifty-First Street", "Midlands", "Gweru", "Midlands", "Midlands", "Zimbabwe", "82064"),
                new Address(100L, 778L, "Fifty-Second Close", "Fifty-Second Close", "Mashonaland West", "Hurungwe", "Mashonaland West", "Mashonaland West", "Zimbabwe", "54028"),
                new Address(101L, 889L, "Fifty-Third Lane", "Fifty-Third Lane", "Matabeleland North", "Hwange", "Matabeleland North", "Matabeleland North", "Zimbabwe", "82093"),
                new Address(102L, 900L, "Fifty-Fourth Avenue", "Fifty-Fourth Avenue", "Mashonaland West", "Kariba", "Mashonaland West", "Mashonaland West", "Zimbabwe", "64093")
        );
        addressService.saveAddresses(addresses);

        List<BankAccount> bankAccounts = Arrays.asList(
                new BankAccount(1L, 66527445610001L, "CBZ", "Jeanine", "", LocalDateTime.parse("2008-09-24 12:23:41.568000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(2L, 66527445610002L, "CBZ", "Tabatha", "", LocalDateTime.parse("2008-04-17 07:01:08.992000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(3L, 66527445610003L, "CBZ", "Clinton", "", LocalDateTime.parse("2008-11-25 20:18:55.872000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(4L, 66527445610004L, "CBZ", "Casey", "", LocalDateTime.parse("2008-01-02 10:30:24.376000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(5L, 66527445610005L, "CBZ", "Alexis", "", LocalDateTime.parse("2008-06-30 18:05:21.024000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(6L, 66527445610006L, "CBZ", "Orlando", "", LocalDateTime.parse("2008-11-08 17:31:00.736000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(7L, 66527445610007L, "CBZ", "Autumn", "", LocalDateTime.parse("2008-12-26 17:56:34.688000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(8L, 66527445610008L, "CBZ", "Kendall", "", LocalDateTime.parse("2008-01-13 02:22:41.728000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(9L, 66527445610009L, "CBZ", "Brad", "", LocalDateTime.parse("2008-11-09 14:58:39.488000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(10L, 66527445610010L, "CBZ", "Sharon", "", LocalDateTime.parse("2008-12-03 18:43:35.808000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(11L, 66527445610011L, "CBZ", "Ted", "", LocalDateTime.parse("2008-12-27 07:30:14.912000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(12L, 66527445610012L, "CBZ", "Curtis", "", LocalDateTime.parse("2008-06-14 15:53:15.264000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(13L, 66527445610013L, "CBZ", "Alissa", "", LocalDateTime.parse("2008-03-24 10:08:19.712000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(14L, 66527445610014L, "CBZ", "Terry", "", LocalDateTime.parse("2008-07-09 05:15:01.760000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS"))),
                new BankAccount(15L, 66527445610015L, "CBZ", "Cecil", "", LocalDateTime.parse("2008-01-28 06:59:19.936000", DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS")))
        );
        bankAccountService.saveBankAccounts(bankAccounts);

        List<Contact> contacts = Arrays.asList(
                new Contact(1L, "263773702467", new ContactType(3L)),
                new Contact(2L, "263773702467", new ContactType(5L)),
                new Contact(3L, "sakamadzudzo@gmail.com", new ContactType(1L))
        );
        contactService.saveContacts(contacts);

        List<UserDto> users = Arrays.asList(
                new UserDto(null, new Salutation(1L), "Erick", "Leonard", "Abraham", "elabraham", "test", false, makeRoles(new long[]{1}), makeAddresses(new long[]{34, 68, 75, 87}), makeAccounts(new long[]{1L}), null, null),
                new UserDto(null, new Salutation(1L), "Gretchen", null, "Proctor", "gproctor", "test", false, makeRoles(new long[]{1}), makeAddresses(new long[]{72}), makeAccounts(new long[]{2L, 11L}), null, null),
                new UserDto(null, new Salutation(1L), "Robbie", "Wilkins", "Erich", "rwerich", "test", false, makeRoles(new long[]{1}), makeAddresses(new long[]{58}), makeAccounts(new long[]{3L, 12L, 15L}), null, null),
                new UserDto(null, new Salutation(1L), "Heath", "Dickson", "Cherie", "hdcherie", "test", false, makeRoles(new long[]{1}), makeAddresses(new long[]{18, 31}), makeAccounts(new long[]{4L}), null, null),
                new UserDto(null, new Salutation(1L), "Brandie", "Finley", "Arthur", "bfarthur", "test", false, makeRoles(new long[]{1}), makeAddresses(new long[]{26}), makeAccounts(new long[]{5L}), null, null),
                new UserDto(null, new Salutation(1L), "Robinson", null, "Lara", "rlara", "test", false, makeRoles(new long[]{1}), makeAddresses(new long[]{62}), makeAccounts(new long[]{6L}), null, null),
                new UserDto(null, new Salutation(1L), "Randal", null, "Dickerson", "rdickerson", "test", false, makeRoles(new long[]{1}), null, makeAccounts(new long[]{7L, 14L}), null, null),
                new UserDto(null, new Salutation(2L), "Keri", null, "Lesley", "klesley", "test", false, makeRoles(new long[]{1}), makeAddresses(new long[]{73}), makeAccounts(new long[]{8L, 13L}), null, null),
                new UserDto(null, new Salutation(1L), "Roberta", null, "Morse", "rmorse", "test", false, makeRoles(new long[]{1}), null, makeAccounts(new long[]{9L}), null, null),
                new UserDto(null, new Salutation(1L), "Cornelius", "Herring", "Emily", "chemily", "test", false, makeRoles(new long[]{1}), null, makeAccounts(new long[]{10L}), null, null),
                new UserDto(null, new Salutation(1L), "Saka", "Shingirai", "Madzudzo", "ssmadzudzo", "test", false, makeRoles(new long[]{1, 2, 3}), makeAddresses(new long[]{72, 84}), makeAccounts(new long[]{15L}), makeContacts(new long[]{1L, 2L, 3L}), new MediaFile(3L))
        );
        userService.saveUsers(users);
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

    private Set<BankAccount> makeAccounts(long[] ids) {
        Set<BankAccount> bankAccounts = new HashSet<>();
        for (long id : ids) {
            bankAccounts.add(new BankAccount(id));
        }
        return bankAccounts;
    }

    private Set<Contact> makeContacts(long[] ids) {
        Set<Contact> contacts = new HashSet<>();
        for (long id : ids) {
            contacts.add(new Contact(id));
        }
        return contacts;
    }

    private List<MediaFile> makeMediaFiles(long[] ids) {
        Path dir = Paths.get(System.getProperty("user.dir"), uploadDir);
        String cat1path = dir + "/cat1.webp";
        String wave1path = dir + "/3d-network-particle-flow-background.jpg";
        String profPicPath = dir + "/ProfPic.png";
        if (!Files.exists(Paths.get(cat1path)) || !Files.exists(Paths.get(wave1path)) || !Files.exists(Paths.get(profPicPath))) {
            return null;
        }
        List<MediaFile> mediaFiles = new ArrayList<>();
        for (long id : ids) {
            mediaFiles.add(new MediaFile(id));
        }
        return mediaFiles;
    }

    private void tempMedia() {
        Path dir = Paths.get(System.getProperty("user.dir"), uploadDir);
        try {
            String cat1path = dir + "/cat1.webp";
            String wave1path = dir + "/3d-network-particle-flow-background.jpg";
            String profPicPath = dir + "/ProfPic.jpg";
            if (!Files.exists(Paths.get(cat1path)) || !Files.exists(Paths.get(wave1path)) || !Files.exists(Paths.get(profPicPath))) {
                return;
            }
            Tika tika = new Tika();
            File cat1png = new File(cat1path);
            File wave1png = new File(wave1path);
            File profPicpng = new File(profPicPath);
            MultipartFile cat1 = new FileMultipartFile(cat1png, tika.detect(cat1png.toPath()));
            MultipartFile wave = new FileMultipartFile(wave1png, tika.detect(wave1png.toPath()));
            MultipartFile profPic = new FileMultipartFile(profPicpng, tika.detect(profPicpng.toPath()));
            mediaFileService.saveFile(cat1);
            mediaFileService.saveFile(wave);
            mediaFileService.saveFile(profPic);
        } catch (IOException ex) {
            Logger.getLogger(DummyDataServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(DummyDataServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    private void cleanOldMedia(Path path) {
        try (Stream<Path> pathStream = Files.walk(path)) {
            pathStream.sorted(Comparator.reverseOrder())
                    .map(Path::toFile)
                    .forEach(File::delete);
        } catch (IOException e) {

        }
    }
}
