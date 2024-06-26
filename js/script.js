const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");


let userMessage;

// Define keyword-based responses
const responses = {
    "hello": [
        "Hello! How can I assist you today?",
        "Hi there! What can I do for you today?",
        "Greetings! How may I help you today?",
        "Welcome to our coffee shop! How can I assist you today?"
    ],
    "hi": [
        "Hello! How can I assist you today?",
        "Hi there! What can I do for you today?",
        "Greetings! How may I help you today?",
        "Welcome to our coffee shop! How can I assist you today?"
    ],
    "hey": [
        "Hello! How can I assist you today?",
        "Hi there! What can I do for you today?",
        "Greetings! How may I help you today?",
        "Welcome to our coffee shop! How can I assist you today?"
    ], 
    "how are you": [
        "I'm doing great, thank you for asking! How can I assist you?",
        "I'm well, thanks for asking! How can I assist you today?",
        "I'm here and ready to assist you!",
        "I'm functioning perfectly, thank you! How can I help you today?"
    ], 
    "good": [
        "Glad to hear that! How can I assist you today?",
        "That's wonderful! What can I do for you?",
        "Great! How can I be of service?",
        "Fantastic! What would you like to do next?"
    ], 
    "great": [
        "Glad to hear that! How can I assist you today?",
        "That's wonderful! What can I do for you?",
        "Great! How can I be of service?",
        "Fantastic! What would you like to do next?"
    ], 
    "menu": [
        "We offer a variety of coffee drinks. Here are our drinks: Espresso Energizer, Cappuccino Delight, Lavish Latte, Bold Americano, Mighty Macchiato, Mocha Marvel",
        "Our menu features a range of coffee drinks: Espresso Energizer, Cappuccino Delight, Lavish Latte, Bold Americano, Mighty Macchiato, and Mocha Marvel.",
        "We have an array of coffee options for you: Espresso Energizer, Cappuccino Delight, Lavish Latte, Bold Americano, Mighty Macchiato, and Mocha Marvel.",
        "Take a look at our coffee selection: Espresso Energizer, Cappuccino Delight, Lavish Latte, Bold Americano, Mighty Macchiato, and Mocha Marvel.",
        "Our coffee offerings include: Espresso Energizer, Cappuccino Delight, Lavish Latte, Bold Americano, Mighty Macchiato, and Mocha Marvel.",
    ], 
    "energizer": [
        "The Espresso Energizer is a rich, full-bodied coffee made by forcing a small amount of nearly boiling water through finely-ground coffee beans. The ultimate pick-me-up!",
        "The Espresso Energizer is a robust and intense coffee, brewed by pushing hot water through finely-ground beans. It's the perfect boost to start your day!",
        "Experience the full flavor of the Espresso Energizer, a bold coffee made by extracting rich essence from finely-ground beans with hot water. Your ideal morning companion!",
        "The Espresso Energizer delivers a powerful coffee punch, crafted by forcing nearly boiling water through finely-ground beans. It's your go-to for an energizing lift!",
        "Enjoy the strong and vibrant taste of the Espresso Energizer, created by pressing hot water through finely-ground coffee. The ultimate pick-me-up for any time of day!"
    ],
    
    "espresso": [
        "Espresso is a concentrated coffee beverage brewed by forcing hot water through finely-ground coffee beans. It's known for its bold flavor and rich aroma.",
        "The Espresso is a classic coffee extraction method, producing a strong and intense flavor profile by pressurizing hot water through finely-ground beans.",
        "Enjoy the Espresso, a strong and flavorful coffee brewed by extracting essence from finely-ground beans with high-pressure hot water.",
        "Espresso, a quintessential coffee drink, is brewed by pushing hot water through finely-ground coffee beans, resulting in a potent and concentrated flavor."
    ],
    
    "espresso energizer": [
        "The Espresso Energizer is a robust coffee blend known for its full-bodied flavor and energizing qualities, crafted by infusing finely-ground coffee beans with nearly boiling water.",
        "Experience the Espresso Energizer, a powerful and rich coffee blend made by infusing finely-ground beans with hot water, ensuring a flavorful and energizing drink.",
        "Indulge in the Espresso Energizer, a full-bodied coffee created by extracting the essence of finely-ground coffee beans with nearly boiling water, perfect for a quick boost.",
        "The Espresso Energizer offers a bold and revitalizing coffee experience, prepared by extracting rich flavors from finely-ground beans using high-temperature water."
    ],
    
    "cappuccino delight": [
        "The Cappuccino Delight is a beloved Italian coffee drink featuring a harmonious blend of espresso, steamed milk, and milk foam, topped with a dusting of cocoa or cinnamon for an extra touch of delight.",
        "Savor the Cappuccino Delight, a timeless Italian coffee creation made with a perfect balance of espresso, steamed milk, and velvety milk foam, garnished with a sprinkle of cocoa or cinnamon.",
        "Experience the Cappuccino Delight, an exquisite Italian coffee treat composed of espresso, steamed milk, and frothy milk foam, finished with a dusting of cocoa or cinnamon to elevate your coffee moment.",
        "Indulge in the Cappuccino Delight, an authentic Italian coffee masterpiece that combines espresso, steamed milk, and creamy foam, complemented by a delicate sprinkle of cocoa or cinnamon."
    ],
    
    "latte": [
        "The Lavish Latte is a smooth and creamy coffee drink made with a shot of espresso and steamed milk, crowned with a delicate layer of foam. Enhance your experience with syrups like vanilla or caramel for added luxury.",
        "Enjoy the Lavish Latte, a creamy coffee delight featuring espresso and steamed milk, finished with a frothy top layer. Customize your latte with flavors such as vanilla or caramel for a truly indulgent treat.",
        "Discover the Lavish Latte, a velvety coffee concoction crafted with espresso, steamed milk, and a frothy foam cap. Personalize your latte experience with syrups such as vanilla or caramel to suit your taste.",
        "Treat yourself to the Lavish Latte, a creamy and comforting coffee blend made with espresso and steamed milk, crowned with a light foam. Customize it with vanilla or caramel syrups for a luxurious touch."
    ],
    
    "lavish": [
        "The Lavish Latte offers a velvety texture with a blend of espresso and steamed milk, finished with a light foam. Customize your experience with vanilla or caramel syrups for an indulgent twist.",
        "Indulge in the Lavish Latte, a creamy coffee treat featuring espresso and steamed milk, complemented by a frothy top layer. Personalize your latte with vanilla or caramel syrups for a luxurious touch.",
        "Experience the Lavish Latte, a smooth coffee concoction made with espresso, steamed milk, and a frothy foam topping. Tailor your latte with flavors like vanilla or caramel for a decadent treat.",
        "Savor the Lavish Latte, a creamy and comforting coffee blend crafted with espresso and steamed milk, topped with a light foam. Add a touch of luxury with vanilla or caramel syrups."
    ],
    
    "lavish latte": [
        "The Lavish Latte is a luxurious blend of espresso and velvety steamed milk, crowned with a delicate foam. Enhance your experience with vanilla or caramel syrups for added indulgence.",
        "Indulge in the Lavish Latte, a creamy coffee creation featuring espresso, steamed milk, and a frothy top layer. Customize yours with vanilla or caramel syrups for a decadent twist.",
        "Enjoy the Lavish Latte, a smooth and creamy coffee delight made with espresso, steamed milk, and a light foam topping. Add a touch of luxury with vanilla or caramel syrups.",
        "Discover the Lavish Latte, a rich and creamy coffee treat crafted with a shot of espresso, steamed milk, and a frothy layer. Personalize it with vanilla or caramel syrups for a lavish experience."
    ],
    
    "americano": [
        "The Bold Americano is a straightforward yet robust coffee beverage created by combining espresso with hot water, providing a unique espresso taste akin to drip coffee.",
        "Savor the Bold Americano, a strong coffee choice blending espresso with hot water for a robust flavor profile distinct from traditional drip coffee.",
        "Experience the Bold Americano, a no-frills coffee option featuring espresso and hot water, offering a bold espresso flavor with the convenience of a larger serving.",
        "Delight in the Bold Americano, a potent coffee drink made by mixing espresso with hot water, ensuring a distinctive espresso essence in every sip."
    ],
    
    "bold americano": [
        "Savor the Bold Americano, crafted with a shot of espresso and hot water for a strong and distinct coffee experience.",
        "The Bold Americano is your go-to for a robust coffee blend, combining espresso with hot water to create a bold flavor profile.",
        "Enjoy the Bold Americano, where a shot of espresso meets hot water to deliver a strong coffee taste with a unique espresso twist.",
        "Experience the Bold Americano, made by diluting espresso with hot water to achieve a strong coffee flavor with a distinct espresso character."
    ],
    
    "macchiato": [
        "Indulge in the Mighty Macchiato, a blend of espresso and a touch of steamed milk or foam, delivering a strong espresso taste with a subtle creamy note.",
        "The Mighty Macchiato features espresso paired with steamed milk or milk foam, offering a robust espresso flavor complemented by a creamy texture.",
        "Enjoy the Mighty Macchiato, where a shot of espresso meets steamed milk or foam, creating a rich espresso flavor with a creamy undertone.",
        "Savor the Mighty Macchiato, crafted with espresso and a hint of steamed milk or foam, providing a bold espresso taste with a creamy finish."
    ],
    
    "mighty macchiato": [
        "Dive into the Mighty Macchiato, blending a single shot of espresso with a touch of velvety steamed milk or milk foam for a bold espresso experience with a creamy finish.",
        "The Mighty Macchiato is a delightful espresso creation, featuring a shot of espresso complemented by a small amount of steamed milk or foam, perfect for those seeking a rich, creamy coffee flavor.",
        "Indulge in the Mighty Macchiato, where a shot of espresso meets a hint of steamed milk or foam, delivering a robust espresso taste balanced with a creamy texture.",
        "Experience the Mighty Macchiato, crafted with a shot of espresso and a touch of steamed milk or milk foam, offering a strong espresso profile with a subtle creaminess that enhances its flavor."
    ],
    
    "mocha": [
        "Indulge in the Mocha Marvel, a delightful blend of espresso, steamed milk, and chocolate syrup, crowned with whipped cream and a decadent drizzle of chocolate sauce for an unforgettable treat.",
        "The Mocha Marvel offers a rich blend of espresso, steamed milk, and chocolate syrup, topped with whipped cream and a luscious chocolate sauce, perfect for chocolate enthusiasts.",
        "Savor the Mocha Marvel, combining espresso, steamed milk, and chocolate syrup, garnished with whipped cream and a generous chocolate sauce drizzle, ensuring a delightful experience.",
        "Discover the Mocha Marvel, featuring espresso, steamed milk, and chocolate syrup, beautifully finished with whipped cream and a tempting chocolate sauce drizzle, promising a marvelous treat."
    ],
    
    "mocha marvel": [
        "Experience the Mocha Marvel, a delightful blend of espresso, steamed milk, and chocolate syrup, crowned with whipped cream and a drizzle of chocolate sauce.",
        "Savor the Mocha Marvel, our signature latte infused with rich chocolate flavors, completed with steamed milk, whipped cream, and a decadent chocolate drizzle.",
        "The Mocha Marvel awaits you—a luscious fusion of espresso, steamed milk, and chocolate syrup, topped with whipped cream and a chocolatey finish.",
        "Indulge in our Mocha Marvel—a perfect harmony of espresso, steamed milk, and chocolate syrup, adorned with whipped cream and a chocolate sauce drizzle."
      ],
      
      "hours": [
        "We are open daily from 8 AM to 8 PM, including Sundays!",
        "Our hours are from 8 AM to 8 PM every day, seven days a week.",
        "You can visit us any day between 8 AM and 8 PM, including Sundays.",
        "Our operating hours are 8 AM to 8 PM every day, including weekends."
      ],


   "time": [
        "We are open daily from 8 AM to 8 PM, including Sundays!",
        "Our hours are from 8 AM to 8 PM every day, seven days a week.",
        "You can visit us any day between 8 AM and 8 PM, including Sundays.",
        "Our operating hours are 8 AM to 8 PM every day, including weekends."
      ],


      "cold drinks": [
        "We offer a variety of refreshing cold drinks, including natural juices and bottled water.",
        "Cool off with our selection of natural juices and bottled water.",
        "Quench your thirst with our assortment of cold beverages, such as natural juices and water.",
        "Enjoy our range of chilled drinks, featuring natural juices and bottled water."
      ],


    "food": [
    "We offer a selection of quick snacks that are perfect for a light bite.",
    "Explore our menu of quick snacks designed to satisfy your hunger.",
    "Indulge in our variety of quick and delicious snacks.",
    "Discover our range of convenient and tasty snack options."
  ],

    "hot drinks": [ "yes we do have hot drinks. These are the list of hot drinks we have : espresso energizer, cappuccino delight, lavish latte, bold americano, mighty macchiato and mocha marvel",
                 "Absolutely! We offer a delightful selection of hot drinks, including favorites like espresso energizer, cappuccino delight, lavish latte, bold americano, mighty macchiato, and mocha marvel.",
                 "Yes, we have a variety of hot drinks available, such as espresso energizer, cappuccino delight, lavish latte, bold americano, mighty macchiato, and mocha marvel.",
                 "Indeed! Our hot drinks menu features classics like espresso energizer, cappuccino delight, lavish latte, bold americano, mighty macchiato, and mocha marvel.",
                 "Yes, we do! Explore our selection of hot drinks, which includes espresso energizer, cappuccino delight, lavish latte, bold americano, mighty macchiato, and mocha marvel.",
    
    ],
    "location": ["You can find us at 123 Coffee Street.",
                 "Our coffee shop is conveniently located at 123 Coffee Street.",
                 "You'll find us situated at 123 Coffee Street.",
                 "Our address is 123 Coffee Street.",
                "We're located at 123 Coffee Street.",
    ],

    "book": ["great! you can book a table at our coffee shop by filling the book section in our website or by contacting us!",
             "Fantastic! You can reserve a table at our coffee shop by visiting the booking section on our website.",
             "Great choice! Booking a table at our coffee shop is easy; just head to our website's booking section.",
             "Wonderful! To secure a table at our coffee shop, simply fill out the booking form on our website.",
             "That's awesome! You can make a reservation at our coffee shop either online through our website or by contacting us directly."
    ],

    "find": ["You can find us at 123 Coffee Street.",
                 "Our coffee shop is conveniently located at 123 Coffee Street.",
                 "You'll find us situated at 123 Coffee Street.",
                 "Our address is 123 Coffee Street.",
                "We're located at 123 Coffee Street.",
    ],

    "address": ["You can find us at 123 Coffee Street.",
                 "Our coffee shop is conveniently located at 123 Coffee Street.",
                 "You'll find us situated at 123 Coffee Street.",
                 "Our address is 123 Coffee Street.",
                "We're located at 123 Coffee Street.",
    ],

    "located": ["You can find us at 123 Coffee Street.",
                 "Our coffee shop is conveniently located at 123 Coffee Street.",
                 "You'll find us situated at 123 Coffee Street.",
                 "Our address is 123 Coffee Street.",
                "We're located at 123 Coffee Street.",
    ],

    "number" : ["Our phone numbers are : 123-456-7890 and 111-222-3333. Feel free to contact us anytime!",
                "You can reach us at 123-456-7890 or 111-222-3333. We're here to assist you!",
                "Feel free to contact us at 123-456-7890 or 111-222-3333. We're just a call away!",
                "Our contact numbers are 123-456-7890 and 111-222-3333. Don't hesitate to get in touch!",
                "You can contact us anytime at 123-456-7890 or 111-222-3333. We look forward to hearing from you!",
    ],

   "phone number" : ["Our phone numbers are : 123-456-7890 and 111-222-3333. Feel free to contact us anytime!",
                "You can reach us at 123-456-7890 or 111-222-3333. We're here to assist you!",
                "Feel free to contact us at 123-456-7890 or 111-222-3333. We're just a call away!",
                "Our contact numbers are 123-456-7890 and 111-222-3333. Don't hesitate to get in touch!",
                "You can contact us anytime at 123-456-7890 or 111-222-3333. We look forward to hearing from you!",
    ],

    "contact" : ["you can contact us on our email Coffee@gmail.com or on one our phone numbers 123-456-7890 , 111-222-3333.",
                 "You can reach out to us via email at Coffee@gmail.com or by phone at 123-456-7890 or 111-222-3333.",
                 "Feel free to contact us via email (Coffee@gmail.com) or phone (123-456-7890, 111-222-3333). We're here to assist you!",
                 "For any inquiries, you can contact us via email (Coffee@gmail.com) or call us at 123-456-7890 or 111-222-3333.",
                 "Contact us directly at Coffee@gmail.com or reach us by phone at either 123-456-7890 or 111-222-3333 for any questions or bookings."
    ],


    "email" : ["Our email is Coffee@gmail.com",
               "You can reach us via email at Coffee@gmail.com.",
               "Feel free to contact us at Coffee@gmail.com.",
               "Our email address is Coffee@gmail.com.",
               "For any inquiries, please email us at Coffee@gmail.com.",
    ],

    "mail" : ["Our email is Coffee@gmail.com",
               "You can reach us via email at Coffee@gmail.com.",
               "Feel free to contact us at Coffee@gmail.com.",
               "Our email address is Coffee@gmail.com.",
               "For any inquiries, please email us at Coffee@gmail.com.",
    ],

    "facebook" : ["Our facebook is Qutishat Coffee.",
                 "You can find us on Facebook under the name Qutishat Coffee.",
                 "Feel free to visit our Facebook page, Qutishat Coffee.",
                 "Connect with us on Facebook: Qutishat Coffee.",
                 "Join us on Facebook at Qutishat Coffee."
    ],

    "instagram" :["Our instagram page is QutishatCoffee.",
                "Find us on Instagram as QutishatCoffee.",
                "Check out our Instagram page: QutishatCoffee.",
                "Follow us on Instagram at QutishatCoffee.",
                "Join us on Instagram - QutishatCoffee."
    ],

    "reach" : ["you can contact us on our email Coffee@gmail.com or on one our phone numbers 123-456-7890 , 111-222-3333.",
               "Feel free to reach out to us via email at Coffee@gmail.com or give us a call at 123-456-7890 or 111-222-3333.",
               "To get in touch, drop us an email at Coffee@gmail.com or reach us by phone at 123-456-7890 or 111-222-3333.",
               "Need assistance? Contact us via Coffee@gmail.com or call us at 123-456-7890 or 111-222-3333.",
               "For any inquiries, contact us via Coffee@gmail.com or reach us at 123-456-7890 or 111-222-3333."
    ],

    "phone number" : ["Our phone numbers are : 123-456-7890 and 111-222-3333. Feel free to contact us anytime!",
                "You can reach us at 123-456-7890 or 111-222-3333. We're here to assist you!",
                "Feel free to contact us at 123-456-7890 or 111-222-3333. We're just a call away!",
                "Our contact numbers are 123-456-7890 and 111-222-3333. Don't hesitate to get in touch!",
                "You can contact us anytime at 123-456-7890 or 111-222-3333. We look forward to hearing from you!",
    ],

    "branches": ["We have 5 branches all over the world. You can find us in Germany, USA, France, Abidjan, Japan. Locate the closest shop to you and visit us! If we are not located in your country hopefully we will soon!",
                "Discover our global presence with branches in Germany, USA, France, Abidjan, and Japan. Find your nearest location and drop by!",
                "Explore our international reach with branches in Germany, USA, France, Abidjan, and Japan. Visit us at a location near you!",
                "We're proud to have branches in Germany, USA, France, Abidjan, and Japan. Locate the nearest one and come see us!",
                "With branches in Germany, USA, France, Abidjan, and Japan, find us easily and enjoy our services wherever you are!"
    ],

    "discount": ["We have a special discount on lattes this week!",
                 "This week, enjoy a special discount on our delicious lattes!",
                 "We're offering an exclusive discount on lattes just for you!",
                 "Don't miss out on our limited-time discount for lattes this week!",
                 "Grab our fantastic discount on lattes while it lasts!"
    ],

    "offers":["we have very suitable offers fo you. check our hompage on instagram or pass by in one of our branches.",
             "Explore our fantastic offers! Visit our Instagram homepage or drop by one of our branches for details.",
             "Discover our exciting offers! Check out our Instagram page or visit us at any of our branches.",
             "We have some great offers waiting for you! Visit our Instagram or stop by any of our branches to learn more.",
             "Exciting offers await you! Don't forget to visit our Instagram or any of our branches to find out more."
    ],

    "thanks": ["Thank you for visiting our coffee shop!",
               "Thank you for choosing us! We appreciate your visit.",
               "We appreciate your patronage! Thank you for stopping by.",
              "Thank you for visiting! We hope to see you again soon.",
              "Thanks for dropping by! We look forward to serving you again."
    ],

    "suggest": ["I can suggest based on your type, do you like strong coffee or light coffee?",
               "Let me suggest something based on your preferences. Are you in the mood for something strong or light?",
               "I'd be happy to make a recommendation. Would you prefer a bold or a more subtle flavor?",
               "Sure, I can suggest something perfect for you. Do you prefer your coffee strong or mild?",
               "I can help you decide! Are you leaning towards a strong coffee or something more mellow?"
    ],

    "light coffee": ["If you like light coffee, I can suggest Cappuccino Delight, Mighty Macchiato, Mocha Marvel.",
                     "For those who enjoy a lighter touch, I recommend our Cappuccino Delight, Mighty Macchiato, or Mocha Marvel.",
                    "If you prefer a milder taste, you might enjoy our Cappuccino Delight, Mighty Macchiato, or Mocha Marvel.",
                    "Looking for something smoother? Our Cappuccino Delight, Mighty Macchiato, and Mocha Marvel are perfect choices for a light coffee experience.",
                    "When it comes to lighter options, our Cappuccino Delight, Mighty Macchiato, and Mocha Marvel are sure to satisfy your taste."
    ],

    "light": ["If you like light coffee, I can suggest Cappuccino Delight, Mighty Macchiato, Mocha Marvel.",
                    "For those who enjoy a lighter touch, I recommend our Cappuccino Delight, Mighty Macchiato, or Mocha Marvel.",
                    "If you prefer a milder taste, you might enjoy our Cappuccino Delight, Mighty Macchiato, or Mocha Marvel.",
                    "Looking for something smoother? Our Cappuccino Delight, Mighty Macchiato, and Mocha Marvel are perfect choices for a light coffee experience.",
                    "When it comes to lighter options, our Cappuccino Delight, Mighty Macchiato, and Mocha Marvel are sure to satisfy your taste."
],

    "subtle": ["If you like light coffee, I can suggest Cappuccino Delight, Mighty Macchiato, Mocha Marvel.",
                "For those who enjoy a lighter touch, I recommend our Cappuccino Delight, Mighty Macchiato, or Mocha Marvel.",
                "If you prefer a milder taste, you might enjoy our Cappuccino Delight, Mighty Macchiato, or Mocha Marvel.",
                "Looking for something smoother? Our Cappuccino Delight, Mighty Macchiato, and Mocha Marvel are perfect choices for a light coffee experience.",
                "When it comes to lighter options, our Cappuccino Delight, Mighty Macchiato, and Mocha Marvel are sure to satisfy your taste."
],

    "mild": ["If you like light coffee, I can suggest Cappuccino Delight, Mighty Macchiato, Mocha Marvel.",
                 "For those who enjoy a lighter touch, I recommend our Cappuccino Delight, Mighty Macchiato, or Mocha Marvel.",
                "If you prefer a milder taste, you might enjoy our Cappuccino Delight, Mighty Macchiato, or Mocha Marvel.",
                "Looking for something smoother? Our Cappuccino Delight, Mighty Macchiato, and Mocha Marvel are perfect choices for a light coffee experience.",
                "When it comes to lighter options, our Cappuccino Delight, Mighty Macchiato, and Mocha Marvel are sure to satisfy your taste."
],

    "mellow": ["If you like light coffee, I can suggest Cappuccino Delight, Mighty Macchiato, Mocha Marvel.",
                 "For those who enjoy a lighter touch, I recommend our Cappuccino Delight, Mighty Macchiato, or Mocha Marvel.",
                "If you prefer a milder taste, you might enjoy our Cappuccino Delight, Mighty Macchiato, or Mocha Marvel.",
                "Looking for something smoother? Our Cappuccino Delight, Mighty Macchiato, and Mocha Marvel are perfect choices for a light coffee experience.",
                "When it comes to lighter options, our Cappuccino Delight, Mighty Macchiato, and Mocha Marvel are sure to satisfy your taste."
],

    "strong coffee": ["If you like strong coffee, I can suggest Espresso Energizer, Bold Americano, Lavish Latte.",
                     "For a robust coffee experience, consider our Espresso Energizer, Bold Americano, or Lavish Latte.",
                     "If you're a fan of bold flavors, you might enjoy our Espresso Energizer, Bold Americano, or Lavish Latte.",
                     "Looking for a strong kick? Our Espresso Energizer, Bold Americano, and Lavish Latte are excellent choices.",
                     "When it comes to strong coffee, our Espresso Energizer, Bold Americano, and Lavish Latte deliver rich, intense flavors."
    ],

    "strong": ["If you like strong coffee, I can suggest Espresso Energizer, Bold Americano, Lavish Latte.",
                     "For a robust coffee experience, consider our Espresso Energizer, Bold Americano, or Lavish Latte.",
                     "If you're a fan of bold flavors, you might enjoy our Espresso Energizer, Bold Americano, or Lavish Latte.",
                     "Looking for a strong kick? Our Espresso Energizer, Bold Americano, and Lavish Latte are excellent choices.",
                     "When it comes to strong coffee, our Espresso Energizer, Bold Americano, and Lavish Latte deliver rich, intense flavors."
    ],

    "bold": ["If you like strong coffee, I can suggest Espresso Energizer, Bold Americano, Lavish Latte.",
            "For a robust coffee experience, consider our Espresso Energizer, Bold Americano, or Lavish Latte.",
            "If you're a fan of bold flavors, you might enjoy our Espresso Energizer, Bold Americano, or Lavish Latte.",
             "Looking for a strong kick? Our Espresso Energizer, Bold Americano, and Lavish Latte are excellent choices.",
             "When it comes to strong coffee, our Espresso Energizer, Bold Americano, and Lavish Latte deliver rich, intense flavors."
    ],


    "thank you": ["Thank you for visiting our coffee shop!",
               "Thank you for choosing us! We appreciate your visit.",
               "We appreciate your patronage! Thank you for stopping by.",
              "Thank you for visiting! We hope to see you again soon.",
              "Thanks for dropping by! We look forward to serving you again."
    ],

    "delivery": ["Yes. we will deliver the order to you as soon it is finished.",
                 "Absolutely! We provide delivery service as soon as your order is ready.",
                 "Yes, we offer delivery service for your convenience once your order is prepared.",
                 "Certainly! Delivery is available once your order is freshly prepared.",
                "You bet! As soon as your order is completed, we'll get it delivered right to you."
    ],

    "time": ["To finish your order it would usually take 10 minutes. Thank you for understanding.",
            "Typically, your order will be ready in about 10 minutes. Thanks for your patience!",
            "Orders usually take around 10 minutes to prepare. Thank you for waiting!",
            "It generally takes us about 10 minutes to get your order ready. Thanks for your understanding!",
            "Your order should be ready in approximately 10 minutes. We appreciate your patience!",
        ],

    "cancel" :["The order has been canceled.",
               "Your order has been successfully canceled.",
               "Cancellation of your order has been confirmed.",
              "The order cancellation process has been completed.",
              "You've successfully canceled your order. Thank you."
    ],

    "about": ["Welcome to Qutishat Coffee Shop, where tradition meets exceptional coffee. Located in Germany , USA , France , Japan , Lebanon , our cozy shop blends rich history with modern comforts. We're passionate about crafting perfect cups, from our carefully sourced beans to our artisanal brewing. Whether you're here for a moment of calm or vibrant conversation, Qutishat Coffee Shop invites you to enjoy quality coffee in a welcoming atmosphere.",
              "Discover Qutishat Coffee Shop, where tradition and innovation converge. Nestled in Germany, USA, France, Japan, Lebanon, our quaint cafes blend history with modernity. We take pride in our meticulously sourced beans and artisanal brews, offering a perfect cup every time. Join us for a peaceful retreat or lively chats, and savor the essence of Qutishat Coffee Shop.",
              "Welcome to Qutishat Coffee Shop, where tradition meets innovation. With locations in Germany, USA, France, Japan, Lebanon, our cozy cafes merge historical charm with modern comforts. Delighting in carefully sourced beans and artisanal brewing techniques, we strive to deliver the perfect cup. Whether you seek tranquility or engaging conversations, Qutishat Coffee Shop invites you to indulge in quality coffee in a warm ambiance.",
              "Explore Qutishat Coffee Shop, a harmonious blend of tradition and modernity. Across Germany, USA, France, Japan, Lebanon, our inviting spaces celebrate rich history and exceptional coffee. From hand-picked beans to expertly crafted brews, each cup reflects our commitment to excellence. Whether you're seeking solitude or lively exchanges, Qutishat Coffee Shop welcomes you to savor the finest coffee in a relaxed setting.",
              "Step into Qutishat Coffee Shop, where heritage meets contemporary flair. Located in Germany, USA, France, Japan, Lebanon, our charming cafes embody a passion for exquisite coffee. With a focus on premium beans and artisanal brewing methods, we ensure each cup is a masterpiece. Whether you crave a quiet moment or lively conversations, Qutishat Coffee Shop promises an unforgettable coffee experience."
],

"default": [
    "I'm sorry, I didn't understand that. Could you please tell me again?",
    "Apologies, I didn't catch that. Could you repeat?",
    "Sorry, I didn't quite get that. Could you say it again?",
    "Oops! It seems I didn't understand. Can you please rephrase or try another question?"
]

};

const countriesWithBranches = ["germany", "usa", "france", "abidjan", "japan"];

// List of available products

const availableProducts = {
    "espresso energizer": 3.99,
    "espresso": 2.49,
    "latte": 4.99,
    "lavish latte": 5.49,
    "macchiato": 4.49,
    "mighty macchiato": 4.99,
    "americano": 3.49,
    "bold americano": 3.99,
    "mocha": 5.99,
    "mocha marvel": 6.49,
    "cappuccino delight": 4.49,
    "cappuccino": 4.49,
    "water": 1.00,
    "snacks": 2.50
};


let orderHistory = [];

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);

    let chatContent = className === "outgoing" 
        ? `<p>${message}</p>` 
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const getResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Check for cancel command first
    const cancelResponse = cancelMethod(lowerCaseMessage);
    if (cancelResponse) {
        return cancelResponse;
    }

    // Check for specific user messages in responses
    if (responses[lowerCaseMessage]) {
        const possibleResponses = responses[lowerCaseMessage];
        const randomIndex = Math.floor(Math.random() * possibleResponses.length);
        return possibleResponses[randomIndex];
    }

    // Handle specific commands or inquiries
    if (lowerCaseMessage.includes("order")) {
        return handleOrder(lowerCaseMessage);
    }

    if (lowerCaseMessage.includes("total")) {
        return handleTotalInquiry();
    }

    if (lowerCaseMessage.startsWith("add to my order")) {
        return addToOrder(lowerCaseMessage.replace("add to my order", "").trim());
    }

    // Check for exact match to any keyword in responses
    for (const keyword in responses) {
        if (lowerCaseMessage.includes(keyword)) {
            const possibleResponses = responses[keyword];
            const randomIndex = Math.floor(Math.random() * possibleResponses.length);
            return possibleResponses[randomIndex];
        }
    }

    // Return random default response if no match is found
    const defaultResponses = responses["default"];
    const randomIndex = Math.floor(Math.random() * defaultResponses.length);
    return defaultResponses[randomIndex];
};



const cancelMethod = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes("cancel my order")) {
        if (orderHistory.length === 0) {
            return "You haven't placed any orders yet.";
        }

        // Remove the last placed order
        orderHistory.pop();
        return "The last order has been canceled. Your total is now $0.00.";
    }
};

const findClosestKeyword = (input, keywords) => {
    let closestKeyword = null;
    let minDistance = Infinity;

    keywords.forEach(keyword => {
        const distance = natural.LevenshteinDistance(input.toLowerCase(), keyword.toLowerCase());
        if (distance < minDistance) {
            minDistance = distance;
            closestKeyword = keyword;
        }
    });

    // Threshold for similarity (adjust as needed)
    if (minDistance < 3) {  // Adjust the threshold as per your requirement
        return closestKeyword;
    } else {
        return null; // No close match found
    }
};

const handleOrder = (orderMessage) => {
    // Split the message by commas or the word 'and'
    const items = orderMessage.split(/,|\band\b/).map(item => item.trim());
    let total = 0;
    let orderSummary = "Your order:\n";

    if (items) {
        items.forEach(item => {
            const match = item.match(/(\d+)\s*([a-zA-Z\s]+)/);
            if (match) {
                const quantity = parseInt(match[1]);
                const product = match[2].trim().toLowerCase();
                const productKey = Object.keys(availableProducts).find(p => p.toLowerCase() === product);

                if (productKey) {
                    const cost = availableProducts[productKey];
                    total += cost * quantity;
                    orderSummary += `${quantity} ${productKey.charAt(0).toUpperCase() + productKey.slice(1)}\n`;
                } else {
                    orderSummary += `${quantity} ${product} (not available)\n`;
                }
            }
        });
    } else {
        return "What would you like to order?";
    }

    orderSummary += `Total: $${total.toFixed(2)}`;
    orderHistory.push({ items: orderMessage, total });
    return orderSummary;
};

const handleTotalInquiry = () => {
    if (orderHistory.length === 0) {
        return "Your total is $0.00";
    }

    const lastOrder = orderHistory[orderHistory.length - 1];
    return `Your last order was:\n${lastOrder.items}\nTotal: $${lastOrder.total.toFixed(2)}`;
};

const addToOrder = (newItemsMessage) => {
    if (orderHistory.length === 0) {
        return "You haven't placed any orders yet.";
    } 

    const lastOrder = orderHistory[orderHistory.length - 1];
    const newItems = newItemsMessage.split(/,|\band\b/).map(item => item.trim());
    let newTotal = lastOrder.total;
    let newOrderSummary = lastOrder.items; // Start with existing order summary

    if (newItems) {
        newItems.forEach(item => {
            const match = item.match(/(\d+)\s*([a-zA-Z\s]+)/);
            if (match) {
                const quantity = parseInt(match[1]);
                const product = match[2].trim().toLowerCase();
                const cost = availableProducts[product];

                if (cost !== undefined) {
                    newTotal += cost * quantity;
                    newOrderSummary += `\n${quantity} ${product.charAt(0).toUpperCase() + product.slice(1)}`; // Append new item
                } else {
                    newOrderSummary += `\n${quantity} ${product} (not available)`; // Append not available item
                }
            }
        });
    } else {
        return "No items found in your request.";
    }

    // Update the last item in orderHistory with new order summary and total
    orderHistory[orderHistory.length - 1] = { items: newOrderSummary.trim(), total: newTotal };

    return `Updated order:\n${newOrderSummary.trim()}\nTotal: $${newTotal.toFixed(2)}`;
};

const generateResponse = (incomingChatLi) => {
    const messageElement = incomingChatLi.querySelector("p");
    const response = getResponse(userMessage);
    
    if (response === responses["default"]) {
        defaultResponseCount++;
        
        if (defaultResponseCount >= 3) {
            clearChat();
            return;
        }
    } else {
        defaultResponseCount = 0; // Reset count if response is not default
    }

    messageElement.textContent = response;
    chatbox.scrollTo(0, chatbox.scrollHeight);
};

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    chatInput.value = "";

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);

    // Clear chat if there are 3 consecutive default responses
    const lastChats = chatbox.querySelectorAll(".incoming p");
    let consecutiveDefaultCount = 0;
    lastChats.forEach(chat => {
        if (chat.textContent === responses["default"]) {
            consecutiveDefaultCount++;
        }
    });

    if (consecutiveDefaultCount >= 3) {
        clearChat();
    }
};

let defaultResponseCount = 0;

const clearChat = () => {
    orderHistory = [];
    chatbox.innerHTML = "";
    chatbox.appendChild(createChatLi("Hello! Welcome to our coffee shop! How can I assist you today?", "incoming"));
    defaultResponseCount = 0; // Reset default response count
};


sendChatBtn.addEventListener("click", handleChat);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        handleChat();
        e.preventDefault();
    }
});





chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));



// Coffee shop functionality

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});