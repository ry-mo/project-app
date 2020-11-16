Ryan Moran - Hot Dog Pin Project

- This project was built with a simple HTML frontend and Node backend, using <a href="https://glitch.com/" target="_blank">Glitch!</a>
- I started with a simple hello-express app (a simple Node app built on Express).
- You can check out the live app <a href="https://ryan-pm-project.glitch.me" target="_blank">here!</a>

How to check this project out:

1. Download the project
2. npm i
3. npm run

- Friction Log

1. [Bad]To start, the anchor links provided in the Project Spec do not work correctly, all the links load to https://stripe.com/docs/payments/accept-a-payment?integration=elements
2. [Good]Stripe's Develop office hours videos we're extremely helpful during this process and to just help me get oriented. Props to CJ Avilla and Thomas!
3. [Bad] I beleive that the code samples provided in the Custom Payment Flow documentation as well as in the Annotated Code Tutorial could have been better commented to explain what the code was doing within the actual code.
4. [Good] The PaymentIntents State diagram was very helpful in understanding how the PaymentIntent implentation would work.
5. [Bad] When encountering parts of the implementation where the developer would have to input their own code within Stripe's snippets could have been more obvious. For "instance const intent = // ... Fetch or create the PaymentIntent" was a bit easy to miss.
6. [Bad] Accessibility options: in your code examples and overall in your developer guides/experiences it may be best to provide alternate color experiences for color blind users.
7. [Bad] During the Webhook implementation, the documentation assumed the user is testing the webhook locally and not in a cloud environment. It would be helpful as more testing and implementation is done in cloud enviornments to provide additional help and details for that use case.
8. [Good] Testing the implementation straight from the guide was extremely easy. Being able to copy each test credit card number, run it through my implementation and see the Stripe page validate the tests was very nice and easy. When testing "Your integration handles payments that require authentication" it did initially say that "Authenticated the payment" failed but after hitting Check Payments again it switched to passed.
9. [Good] Setting up and logging in with the Stripe CLI was very easy. I appreciated the login process nicely opening up the browser to validate the login.
10. [Good] Looking through the samples in the Stripe CLI was also a great touch. However, it was sometimes hard to tell what each sample was actually about and this page could have explained things a little better before jumping into the sandbox container (which was very cool): https://stripe.dev/samples/#/.
11. [Bad] The developer documentation for this implementation seemed to only be available in English.
12. [Good] "Seeing the You've successfully completed this step. View in Dashboard." message in certain sections was very helpful and validating. I imagine this is even more helpful in larger implementations. 
