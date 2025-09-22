import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    travelDate: "",
    people: "",
    enquiry: "",
    termsAccepted: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      toast({
        title: "Please accept terms",
        description: "You must agree with Terms of Service and Privacy Statement.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      travelDate: "",
      people: "",
      enquiry: "",
      termsAccepted: false
    });
  };

  return (
    <section className="py-16 bg-sky">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="shadow-mountain">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              Send Us An Enquiry
            </CardTitle>
            <p className="text-muted-foreground">
              Ready for your next adventure? Get in touch with our expedition experts.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button variant="secondary" asChild>
                <a href="https://wa.link/d4d1pg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:akhtarnagabarbat@gmail.com" className="inline-flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address <span className="text-destructive">*</span>  
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Travel Date <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="date"
                    required
                    value={formData.travelDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, travelDate: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    People <span className="text-destructive">*</span>
                  </label>
                  <Select value={formData.people} onValueChange={(value) => setFormData(prev => ({ ...prev, people: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of people" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5</SelectItem>
                      <SelectItem value="5-10">5-10</SelectItem>  
                      <SelectItem value="10-15">10-15</SelectItem>
                      <SelectItem value="15-20">15-20</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Enquiry <span className="text-destructive">*</span>
                </label>
                <Textarea
                  required
                  value={formData.enquiry}
                  onChange={(e) => setFormData(prev => ({ ...prev, enquiry: e.target.value }))}
                  placeholder="Tell us about your adventure requirements, experience level, and any specific questions..."
                  rows={5}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: checked as boolean }))}
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree with Terms of Service and Privacy Statement. 
                  <span className="text-destructive">*</span>
                </label>
              </div>

              <Button type="submit" variant="mountain" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Submit Enquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnquiryForm;