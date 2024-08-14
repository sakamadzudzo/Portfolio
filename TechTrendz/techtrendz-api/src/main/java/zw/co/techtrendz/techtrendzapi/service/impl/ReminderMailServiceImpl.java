/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zw.co.techtrendz.techtrendzapi.service.impl;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeFormatterBuilder;
import java.time.format.TextStyle;
import java.time.temporal.ChronoField;
import java.util.List;
import java.util.Locale;
import java.util.Optional;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import zw.co.techtrendz.techtrendzapi.entity.Contact;
import zw.co.techtrendz.techtrendzapi.entity.ContactType;
import zw.co.techtrendz.techtrendzapi.entity.Checkout;
import zw.co.techtrendz.techtrendzapi.entity.Users;
import zw.co.techtrendz.techtrendzapi.service.ContactService;
import zw.co.techtrendz.techtrendzapi.service.ContactTypeService;
import zw.co.techtrendz.techtrendzapi.service.ReminderMailService;
import zw.co.techtrendz.techtrendzapi.service.CheckoutService;

/**
 *
 * @author smadzudzo
 */
@Service
public class ReminderMailServiceImpl implements ReminderMailService {

    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private CheckoutService checkoutService;
    @Autowired
    private ContactService contactService;
    @Autowired
    private ContactTypeService contactTypeService;

//    @Scheduled(cron = "0 0/1 * * * ?")
    public void sendReminderMails() {
        System.out.println("\n\n\n\n\nStarting periodic email sending\n\n\n\n\n");
        List<Checkout> checkouts = checkoutService.getCheckoutAll();
        checkouts.stream().forEach(checkout -> {
            Optional<ContactType> contactType = contactTypeService.getContactTypeByName("EMAIL");
            if (contactType.isEmpty()) {
                return;
            }
            Users user = checkout.getUser();
            List<Contact> contacts = contactService.getContactAllByUserIdByContactTypeId(user.getId(), contactType.get().getId());
            if (contacts.size() == 0) {
                return;
            }
            SimpleMailMessage msg = new SimpleMailMessage();
            msg.setTo(contacts.get(0).getContent());
            msg.setText(
                    "Dear " + user.getName()
                    + ",\n\nYour checkout '" + checkout.getId() + "'  is ready for payment.\n\nWarm regards,\nEvent Booking");
            try {
                this.mailSender.send(msg);
            } catch (MailException ex) {
                System.err.println(ex.getMessage());
            }
        });
    }

    public static String formatDate(LocalDate date) {
        DateTimeFormatter dayOfWeekFormatter = new DateTimeFormatterBuilder()
                .appendText(ChronoField.DAY_OF_WEEK, TextStyle.FULL)
                .toFormatter(Locale.ENGLISH);

        DateTimeFormatter monthFormatter = new DateTimeFormatterBuilder()
                .appendText(ChronoField.MONTH_OF_YEAR, TextStyle.FULL)
                .toFormatter(Locale.ENGLISH);

        String dayOfWeek = dayOfWeekFormatter.format(date);
        String month = monthFormatter.format(date);
        int dayOfMonth = date.getDayOfMonth();
        int year = date.getYear();

        return String.format("%s the %s of %s, %d", dayOfWeek, getDayOfMonthWithSuffix(dayOfMonth), month, year);
    }

    private static String getDayOfMonthWithSuffix(int day) {
        if (day >= 11 && day <= 13) {
            return day + "th";
        }
        switch (day % 10) {
            case 1:
                return day + "st";
            case 2:
                return day + "nd";
            case 3:
                return day + "rd";
            default:
                return day + "th";
        }
    }

}
