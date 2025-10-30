import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're passionate about delivering excellence and innovation in everything we do.
            </p>
          </div>

          <div className="prose prose-lg mx-auto mb-12 text-center">
            <p className="text-lg text-foreground/90">
              Our company was founded with a simple yet powerful mission: to help businesses thrive in
              the digital age. We combine cutting-edge technology with deep industry expertise to
              deliver solutions that make a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                Empowering businesses to reach their full potential through innovative technology
                solutions.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-shadow animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted partner for businesses seeking digital transformation and
                growth.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-soft hover:shadow-medium transition-shadow animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, integrity, and innovation guide every decision we make and project we
                undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
