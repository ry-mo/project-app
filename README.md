Ryan Moran - Hot Dog Pin Project

- This project was built with a simple HTML frontend and Node backend, using <a href="https://glitch.com/" target="_blank">Glitch!</a>
- I started with a simple hello-express app (a simple Node app built on Express).
- You can check out the live app <a href="https://ryan-pm-project.glitch.me" target="_blank">here!</a>

How to check this project out:

1. Download the project and unzip
2. In your terminal cd into the project folder
2. npm i
3. npm run start
4. Open localhost:3000 in your browser

- Friction Log

1. [Bad] To start, the anchor links provided in the Project Spec do not work correctly, all the links take you to https://stripe.com/docs/payments/accept-a-payment?integration=elements
2. [Good] Stripe's Develop office hours videos we're extremely helpful during this process and to just help me get oriented. Props to CJ Avilla and Thomas!
3. [Bad] I beleive that the code samples provided in the Custom Payment Flow documentation as well as in the Annotated Code Tutorial could have been better commented to explain what was happening within more of the actual code.
4. [Good] The PaymentIntents State diagram was very helpful in understanding how the PaymentIntent implentation would work.
5. [Bad] When encountering parts of the implementation where the developer would have to input their own code within Stripe's snippets could have been more obvious. For "instance const intent = // ... Fetch or create the PaymentIntent" was a bit easy to miss.
6. [Bad] Accessibility options: in your code examples and overall in your developer guides/experiences it may be best to provide alternate color experiences for color blind users.
7. [Bad] During the Webhook implementation, the documentation assumed the user is testing the webhook locally and not in a cloud environment. It would be helpful as more testing and implementation is done in cloud environments to provide additional help and details for that use case.
8. [Good] Testing the implementation straight from the guide was extremely easy. Being able to copy each test credit card number, run it through my implementation and see the Stripe page validate the tests was very nice and easy. However, when testing "Your integration handles payments that require authentication" it did initially say that "Authenticated the payment" failed but after hitting Check Payments again it switched to passed.
9. [Good] Setting up and logging in with the Stripe CLI was very easy. I appreciated the login process nicely opening up the browser to validate the login.
10. [Good] Looking through the samples in the Stripe CLI was also a great touch. However, it was sometimes hard to tell what each sample was actually about and this page could have explained things a little better before jumping into the sandbox container (which was very cool): https://stripe.dev/samples/#/.
11. [Bad] The developer documentation for this implementation seemed to only be available in English.
12. [Good] Seeing the "You've successfully completed this step. View in Dashboard." message in certain sections was very helpful and validating. I imagine this is even more helpful in larger implementations. 
13. [Bad] The main guide (https://stripe.com/docs/payments/accept-a-payment?integration=elements) isn't responsive. This was frustrating as I wanted to have the guide open on half my screen with my editor on the other half. This forced me to scroll horizontally in the guide constanly. Also the right rail table of contents takes up a lot of room and you should be able to close or minimize it.
14. [Bad] If I have my region (bottom left of page setting) set to something other than the US, it should change the currency in the code to the currency associated with that region to make it easier for engineers to work in their native/home/local currency. For instance, if I'm implementing from the UK it should be set as "currency: 'gbp',"
