import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Clock, MessageCircle, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I create a profile on Khandelwal Parinay?",
    answer: "Creating a profile is simple and free. Click on 'Register Free' and fill out the basic information including your personal details, family background, education, and profession. You can also add photos and preferences for your ideal partner."
  },
  {
    question: "Is my personal information safe on Khandelwal Parinay?",
    answer: "Yes, we take privacy very seriously. Your personal information is protected with advanced security measures. You have full control over who can view your profile and contact details. We never share your information with third parties."
  },
  {
    question: "How does the matching algorithm work?",
    answer: "Our advanced matching system considers multiple factors including age, education, profession, location, family background, and personal preferences to suggest compatible matches from the Marwadi community."
  },
  {
    question: "What are the benefits of Premium membership?",
    answer: "Premium members get priority profile visibility, can send unlimited messages, get access to advanced search filters, receive dedicated relationship manager support, and can view who has visited their profile."
  },
  {
    question: "How can I verify profiles?",
    answer: "We have a thorough verification process that includes phone verification, document verification, and photo verification. Verified profiles are marked with a badge to help you identify authentic members."
  },
  {
    question: "Can I search for matches outside India?",
    answer: "Yes, Khandelwal Parinay has a global presence with members from USA, UK, Canada, Australia, and many other countries. You can set your location preferences to search for matches worldwide."
  }
];

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Help & Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help you find your perfect match. Get answers to common questions or reach out to our support team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-primary" />
                    Call Us
                  </CardTitle>
                  <CardDescription>Speak with our support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg">+91 9225305647</p>
                  <p className="text-sm text-muted-foreground"> (India)</p>
                  
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-primary" />
                    Email Support
                  </CardTitle>
                  <CardDescription>Send us your queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">sumitdusad@gmail.com</p>
                  <p className="text-sm text-muted-foreground">General Support</p>
                 
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">Monday - Friday</p>
                  <p className="text-sm text-muted-foreground">9:00 AM - 7:00 PM IST</p>
                  <p className="font-semibold">Saturday - Sunday</p>
                  <p className="text-sm text-muted-foreground">10:00 AM - 5:00 PM IST</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <Input placeholder="How can we help?" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Please describe your query in detail..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <HelpCircle className="h-6 w-6 mr-2 text-primary" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>
                Find quick answers to common questions about Khandelwal Parinay
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;