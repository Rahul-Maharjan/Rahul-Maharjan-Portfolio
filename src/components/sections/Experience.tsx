import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description: "Lead developer for multiple client projects, mentoring junior developers and implementing best practices across the development team.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    achievements: [
      "Increased application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipelines"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2021 - 2022",
    description: "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces.",
    technologies: ["React", "Vue.js", "Sass", "Webpack", "Jest"],
    achievements: [
      "Built 15+ responsive websites",
      "Improved code review process",
      "Mentored 3 junior developers"
    ]
  },
  {
    title: "Web Developer",
    company: "StartupXYZ",
    period: "2020 - 2021",
    description: "Full-stack development for an early-stage startup, wearing multiple hats and contributing to all aspects of the product.",
    technologies: ["JavaScript", "Python", "Django", "PostgreSQL", "Docker"],
    achievements: [
      "Built MVP from scratch",
      "Implemented user authentication",
      "Set up monitoring and analytics"
    ]
  }
]

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" ref={ref} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and the impact I've made along the way.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className={`relative transition-all duration-700 delay-${index * 200} ${
                      isVisible ? "animate-fade-in-left" : "opacity-0 translate-x-8"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    
                    <Card className="ml-20 bg-gradient-card border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.02]">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                          </div>
                          <Badge variant="secondary" className="self-start md:self-center mt-2 md:mt-0">
                            {exp.period}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}