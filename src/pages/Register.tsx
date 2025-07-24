import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";

const initialForm = {
  candidateName: "",
  fatherName: "",
  motherName: "",
  ownGotra: "",
  motherGotra: "",
  dob: "",
  birthPlace: "",
  birthTime: "",
  education: "",
  otherInfo: "",
  color: "",
  weight: "",
  height: "",
  jobOrBusiness: "",
  annualIncome: "",
  workLocation: "",
  permanentAddress: "",
  postOffice: "",
  district: "",
  state: "",
  email: "",
  mobile: "",
  fatherJobBusiness: "",
  brothers: "",
  brothersMarried: "",
  brothersUnmarried: "",
  sisters: "",
  sistersMarried: "",
  sistersUnmarried: "",
  maternalFamilyName: "",
  address: "",
  mobileAlt: "",
  aadharNumber: "",
   password: "",
  confirmPassword: "",
  rulesAccepted: false,
};

const Register = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  // Simple English-only validation for text fields
  const englishOnlyRegex = /^[A-Za-z0-9\s.,'-]*$/;
  const validateEnglish = (name, value) => {
    if (
      [
        "candidateName",
        "fatherName",
        "motherName",
        "ownGotra",
        "motherGotra",
        "birthPlace",
        "education",
        "otherInfo",
        "jobOrBusiness",
        "workLocation",
        "permanentAddress",
        "postOffice",
        "district",
        "state",
        "fatherJobBusiness",
        "maternalFamilyName",
        "address",
        "aadharNumber",
      ].includes(name)
    ) {
      return englishOnlyRegex.test(value);
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
      return;
    }

    if (!validateEnglish(name, value)) {
      setErrors((prev) => ({ ...prev, [name]: "Please enter English letters only" }));
    } else {
      setErrors((prev) => {
        const e = { ...prev };
        delete e[name];
        return e;
      });
    }

    setForm({ ...form, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.rulesAccepted) {
      alert("You must accept the rules to continue.");
      return;
    }
    if (Object.keys(errors).length > 0) {
      alert("Fix validation errors first.");
      return;
    }
    // TODO: submit form to backend via POST API
    console.log("Submitting form:", form);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <Card className="shadow-elegant border-border/50">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-2" />
                  <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Khandelwal Parinay
                  </span>
                </div>
                <CardTitle className="text-3xl">Join Khandelwal Parinay</CardTitle>
                <CardDescription>
                  Create your profile and start your journey to find your perfect match
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <section>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        प्रत्याशी का नाम / Candidate Name
                      </label>
                      <Input
                        name="candidateName"
                        placeholder="Enter candidate name in English"
                        value={form.candidateName}
                        onChange={handleChange}
                        required
                        className={errors.candidateName ? "border-red-500" : ""}
                      />
                      {errors.candidateName && (
                        <p className="text-xs text-red-600 mt-1">{errors.candidateName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        पिता का नाम / Father's Name
                      </label>
                      <Input
                        name="fatherName"
                        placeholder="Enter father's name in English"
                        value={form.fatherName}
                        onChange={handleChange}
                        required
                        className={errors.fatherName ? "border-red-500" : ""}
                      />
                      {errors.fatherName && <p className="text-xs text-red-600 mt-1">{errors.fatherName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        माता का नाम / Mother's Name
                      </label>
                      <Input
                        name="motherName"
                        placeholder="Enter mother's name in English"
                        value={form.motherName}
                        onChange={handleChange}
                        required
                        className={errors.motherName ? "border-red-500" : ""}
                      />
                      {errors.motherName && <p className="text-xs text-red-600 mt-1">{errors.motherName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        स्वयं का गोत्र / Own Gotra
                      </label>
                      <Input
                        name="ownGotra"
                        placeholder="Own Gotra in English"
                        value={form.ownGotra}
                        onChange={handleChange}
                        required
                        className={errors.ownGotra ? "border-red-500" : ""}
                      />
                      {errors.ownGotra && <p className="text-xs text-red-600 mt-1">{errors.ownGotra}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        माता का गोत्र / Mother's Gotra
                      </label>
                      <Input
                        name="motherGotra"
                        placeholder="Mother's Gotra in English"
                        value={form.motherGotra}
                        onChange={handleChange}
                        className={errors.motherGotra ? "border-red-500" : ""}
                      />
                      {errors.motherGotra && <p className="text-xs text-red-600 mt-1">{errors.motherGotra}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">जन्म तारीख / Date of Birth</label>
                      <Input
                        type="date"
                        name="dob"
                        value={form.dob}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        जन्म स्थान / Birth Place
                      </label>
                      <Input
                        name="birthPlace"
                        placeholder="Birth place in English"
                        value={form.birthPlace}
                        onChange={handleChange}
                        className={errors.birthPlace ? "border-red-500" : ""}
                      />
                      {errors.birthPlace && <p className="text-xs text-red-600 mt-1">{errors.birthPlace}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">जन्म समय / Time of Birth</label>
                      <Input type="time" name="birthTime" value={form.birthTime} onChange={handleChange} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        शैक्षणिक पात्रता / Educational Qualification
                      </label>
                      <Input
                        name="education"
                        placeholder="Education in English"
                        value={form.education}
                        onChange={handleChange}
                        className={errors.education ? "border-red-500" : ""}
                      />
                      {errors.education && <p className="text-xs text-red-600 mt-1">{errors.education}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        अन्य जानकारी / Other Info
                      </label>
                      <textarea
                        name="otherInfo"
                        placeholder="Additional info in English"
                        value={form.otherInfo}
                        onChange={handleChange}
                        rows={3}
                        className="border rounded w-full p-2"
                      />
                    </div>

                    <div className="col-span-full">
                      <label className="block text-sm font-medium mb-2">रंग / Color</label>
                      <div className="flex gap-4">
                        {["गोरा", "गेहूँआ", "साँवला"].map((c) => (
                          <label key={c} className="inline-flex items-center space-x-2">
                            <input
                              type="radio"
                              name="color"
                              value={c}
                              checked={form.color === c}
                              onChange={(e) => handleSelectChange("color", e.target.value)}
                            />
                            <span>{c}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">वजन / Weight (kg)</label>
                      <Input type="number" name="weight" value={form.weight} onChange={handleChange} min="0" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">ऊँचाई / Height (cm)</label>
                      <Input type="number" name="height" value={form.height} onChange={handleChange} min="0" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        प्रत्याशी का स्वयं का व्यवसाय है या नौकरी / Job or Business
                      </label>
                      <Input
                        name="jobOrBusiness"
                        placeholder="Job or Business in English"
                        value={form.jobOrBusiness}
                        onChange={handleChange}
                        className={errors.jobOrBusiness ? "border-red-500" : ""}
                      />
                      {errors.jobOrBusiness && <p className="text-xs text-red-600 mt-1">{errors.jobOrBusiness}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">आय (वार्षिक) / Annual Income</label>
                      <Input type="number" name="annualIncome" value={form.annualIncome} onChange={handleChange} min="0" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">कार्य स्थल / Work Location</label>
                      <Input
                        name="workLocation"
                        placeholder="Work Location in English"
                        value={form.workLocation}
                        onChange={handleChange}
                        className={errors.workLocation ? "border-red-500" : ""}
                      />
                      {errors.workLocation && <p className="text-xs text-red-600 mt-1">{errors.workLocation}</p>}
                    </div>

                    <div className="col-span-full">
                      <label className="block text-sm font-medium mb-2">स्थायी पता / Permanent Address</label>
                      <textarea
                        name="permanentAddress"
                        value={form.permanentAddress}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Permanent Address in English"
                        className="border rounded w-full p-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">पोस्ट / Post Office</label>
                      <Input
                        name="postOffice"
                        placeholder="Post Office in English"
                        value={form.postOffice}
                        onChange={handleChange}
                        className={errors.postOffice ? "border-red-500" : ""}
                      />
                      {errors.postOffice && <p className="text-xs text-red-600 mt-1">{errors.postOffice}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">जिला / District</label>
                      <Input
                        name="district"
                        placeholder="District in English"
                        value={form.district}
                        onChange={handleChange}
                        className={errors.district ? "border-red-500" : ""}
                      />
                      {errors.district && <p className="text-xs text-red-600 mt-1">{errors.district}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">राज्य / State</label>
                      <Input
                        name="state"
                        placeholder="State in English"
                        value={form.state}
                        onChange={handleChange}
                        className={errors.state ? "border-red-500" : ""}
                      />
                      {errors.state && <p className="text-xs text-red-600 mt-1">{errors.state}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">ई-मेल / Email</label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">मोबाइल / Mobile</label>
                      <Input
                        type="number"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={form.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        पिता का व्यवसाय / नौकरी / Father's Job or Business
                      </label>
                      <Input
                        name="fatherJobBusiness"
                        placeholder="Father's Job/Business in English"
                        value={form.fatherJobBusiness}
                        onChange={handleChange}
                        className={errors.fatherJobBusiness ? "border-red-500" : ""}
                      />
                      {errors.fatherJobBusiness && <p className="text-xs text-red-600 mt-1">{errors.fatherJobBusiness}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        प्रत्याशी स्वयं को छोड़कर : कितने भाई / Brothers (excluding self)
                      </label>
                      <Input type="number" name="brothers" value={form.brothers} onChange={handleChange} min="0" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">विवाहित / Married (Brothers)</label>
                      <Input
                        type="number"
                        name="brothersMarried"
                        value={form.brothersMarried}
                        onChange={handleChange}
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">अविवाहित / Unmarried (Brothers)</label>
                      <Input
                        type="number"
                        name="brothersUnmarried"
                        value={form.brothersUnmarried}
                        onChange={handleChange}
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">कितनी बहनें / Sisters</label>
                      <Input type="number" name="sisters" value={form.sisters} onChange={handleChange} min="0" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">विवाहित / Married (Sisters)</label>
                      <Input
                        type="number"
                        name="sistersMarried"
                        value={form.sistersMarried}
                        onChange={handleChange}
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">अविवाहित / Unmarried (Sisters)</label>
                      <Input
                        type="number"
                        name="sistersUnmarried"
                        value={form.sistersUnmarried}
                        onChange={handleChange}
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        प्रत्याशी के ननिहाल का नाम / Mother's Side Family Name
                      </label>
                      <Input
                        name="maternalFamilyName"
                        placeholder="Mother's side family name in English"
                        value={form.maternalFamilyName}
                        onChange={handleChange}
                        className={errors.maternalFamilyName ? "border-red-500" : ""}
                      />
                      {errors.maternalFamilyName && <p className="text-xs text-red-600 mt-1">{errors.maternalFamilyName}</p>}
                    </div>

                    <div className="col-span-full">
                      <label className="block text-sm font-medium mb-2">पता / Address</label>
                      <textarea
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Address in English"
                        className="border rounded w-full p-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">मो. / Mobile (Alternate)</label>
                      <Input
                        type="number"
                        name="mobileAlt"
                        value={form.mobileAlt}
                        onChange={handleChange}
                        placeholder="Alternate mobile number"
                      />
                    </div>

                    <div className="col-span-full">
                      <label className="block text-sm font-medium mb-2">आधार क्र. / Aadhar Number</label>
                      <Input
                        name="aadharNumber"
                        value={form.aadharNumber}
                        onChange={handleChange}
                        placeholder="Aadhar number"
                        className={errors.aadharNumber ? "border-red-500" : ""}
                      />
                      {errors.aadharNumber && <p className="text-xs text-red-600 mt-1">{errors.aadharNumber}</p>}
                    </div>
                  </div>
                </section>
                {/* Password Section */}
<div>
  <h3 className="text-lg font-semibold mb-4">
    Create Password
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-2">Password</label>
      <Input
        type="password"
        name="password"
        value={form.password || ""}
        onChange={handleChange}
        placeholder="Create a strong password"
        required
        className={errors.password ? "border-red-500" : ""}
      />
      {errors.password && (
        <p className="text-xs text-red-600 mt-1">{errors.password}</p>
      )}
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Confirm Password</label>
      <Input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword || ""}
        onChange={handleChange}
        placeholder="Confirm your password"
        required
        className={errors.confirmPassword ? "border-red-500" : ""}
      />
      {errors.confirmPassword && (
        <p className="text-xs text-red-600 mt-1">{errors.confirmPassword}</p>
      )}
    </div>
  </div>
</div>


                {/* Rules Acceptance */}
                <section className="space-y-4">
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      name="rulesAccepted"
                      checked={form.rulesAccepted}
                      onChange={handleChange}
                      className="mt-1"
                      required
                    />
                    <span className="text-sm text-muted-foreground">
                      परिचय सम्मेलन के सभी नियम मुझे स्वीकार हैं एवं मैं उसका पालन करूंगा / करूंगी। (I accept all the terms of the conference and will follow them.)
                    </span>
                  </label>
                </section>

                <Button variant="hero" size="lg" className="w-full" type="submit">
                  Create My Profile
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign In
                  </Link>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
