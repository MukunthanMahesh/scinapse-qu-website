import { ExternalLink, BookOpen, Calendar, Trophy, Cpu, Users } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      category: "Academic Resources",
      items: [
        { name: "Queen's Computing Department", link: "https://www.cs.queensu.ca/", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Course Calendar", link: "https://www.queensu.ca/academic-calendar/", icon: <Calendar className="w-4 h-4" /> },
        { name: "CISC Course Outlines", link: "https://www.cs.queensu.ca/undergraduate/courses/", icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      category: "Career & Competitions",
      items: [
        { name: "ICPC Programming Contest", link: "https://icpc.global/", icon: <Trophy className="w-4 h-4" /> },
        { name: "Google Code Jam", link: "https://codingcompetitions.withgoogle.com/codejam", icon: <Trophy className="w-4 h-4" /> },
        { name: "LeetCode", link: "https://leetcode.com/", icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      category: "Community",
      items: [
        { name: "Queen's Computing Discord", link: "#", icon: <Users className="w-4 h-4" /> },
        { name: "COMPSA Student Union", link: "https://compsa.ca/", icon: <Users className="w-4 h-4" /> },
        { name: "GitHub Student Pack", link: "https://education.github.com/pack", icon: <BookOpen className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-brand-black mb-8 text-center">Resources</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-black mb-4 border-b border-brand-cyanBlue pb-2">
              {category.category}
            </h3>
            
            <div className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <a
                  key={itemIndex}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:bg-brand-cyanBlue/10 transition-colors duration-200 group"
                >
                  <div className="text-brand-cyanBlue group-hover:text-brand-darkCyan transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-brand-black group-hover:text-brand-darkCyan transition-colors flex-grow">
                    {item.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-brand-darkCyan transition-colors" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSection;
