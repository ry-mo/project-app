# Ryan Moran - Hot Dog Pin Project

- This project was built with a simple HTML frontend and Node backend, using <a href="https://glitch.com/" target="_blank">Glitch!</a>
- I started with a simple hello-express app (a simple Node app built on Express).
- You can check out the live app <a href="https://ryan-pm-project.glitch.me" target="_blank">here!</a>

## How to check this project out:

1. Download the project and unzip
2. In your terminal cd into the project folder
3. Next we have to fetch all of the necessary packages for you to run the app on your machine. In your terminal enter: npm i

```
npm i
```

4. Now we're ready to run the app! In your terminal enter: npm run start

```
npm run start
```

5. Open localhost:3000 in your browser
6. Select the hot dog image or buy button
7. Insert test card information and select Pay

## Friction Log

- [Bad] To start, the anchor links provided in the Project Spec do not work correctly, all the links take you to the same page and same location on that page: https://stripe.com/docs/payments/accept-a-payment?integration=elements
- [Good] Stripe's Developer office hours videos we're extremely helpful during this process and to just help me get oriented. Props to CJ Avilla and Thomas!
- [Bad] I beleive that the code samples provided in the Custom Payment Flow documentation as well as in the Annotated Code Tutorial could have been better commented to explain what was happening within more of the actual code.
- [Good] The PaymentIntents State diagram was very helpful in understanding how the PaymentIntent implentation would work. However, it should also be incorporated into the Annotated Code Tutorial version of the guide where it is missing.
- [Bad] When encountering parts of the implementation where the developer would have to input their own code within Stripe's snippets could have been more obvious. For "instance const intent = // ... Fetch or create the PaymentIntent" was a bit easy to miss.
- [Bad] Accessibility options: in your code examples and overall in your developer guides/experiences it may be best to provide alternate color experiences for color blind users.
- [Bad] During the Webhook implementation, the documentation assumed the user is testing the webhook locally and not in a cloud environment. It would be helpful as more testing and implementation is done in cloud environments to provide additional help and details for that use case.
- [Good] Testing the implementation straight from the guide was extremely easy. Being able to copy each test credit card number, run it through my implementation and see the Stripe page validate the tests was very nice and easy. However, when testing "Your integration handles payments that require authentication" it did initially say that "Authenticated the payment" failed but after hitting Check Payments again it switched to passed.
- [Good] Setting up and logging in with the Stripe CLI was very easy. I appreciated the login process nicely opening up the browser to validate the login.
- [Good] Looking through the samples in the Stripe CLI was also a great touch. However, it was sometimes hard to tell what each sample was actually about and this page could have explained things a little better before jumping into the sandbox container (which was very cool): https://stripe.dev/samples/#/.
- [Bad] The developer documentation for this implementation seemed to only be available in English.
- [Good] Seeing the "You've successfully completed this step. View in Dashboard." message in certain sections was very helpful and validating. I imagine this is even more helpful in larger implementations.
- [Bad] The main guide (https://stripe.com/docs/payments/accept-a-payment?integration=elements) isn't responsive. This was frustrating as I wanted to have the guide open on half my screen with my editor on the other half. This forced me to scroll horizontally in the guide constanly. Also the right rail table of contents takes up a lot of room and you should be able to close or minimize it.
- [Bad] If I have my region (bottom left of page) set to something other than the US, it should change the currency in the code to the currency associated with that region to make it easier for engineers to work in their native/home/local currency. For instance, if I'm implementing from the UK it should be set as "currency: 'gbp',"
- [Bad] Some links within the guide open in a new active tab while others open in the current tab which was frustrating. For instance, clicking on the "Client Secret API" link opened the page up in my current window and when I pressed back in my broswer I was back at the top of the page and lost my place.
- [Bad] Accessibility: I could not get any screen readers to correctly identify the Stripe form fields and there seems to be a lack of information regarding this issue and how accessible stripe implementations/elements are out of the box for visually impaired end users.

Overall this was a great experience, as I was able to successfully implement the product with minimal hiccups (once I decided on scaffolding/framework). It also has me interested in learning more about node and I might give this another try as a React app as well. I hope my feedback on my experience was helpful and please let me know if you have any questions. Thank you!
