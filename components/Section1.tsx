// components/Section1.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Layers of London",
    description:
      "Layers of London is a ground-breaking crowd-sourced mapping project that charts the rich layers of London's past.",
    image:
      "",
  },
  {
    title: "Victoria County History",
    description:
      "The Victoria County History is one of the world's longest-running research projects, exploring England's rich local history.",
    image:
      "",
  },
  {
    title: "Red Boxes Gallery",
    description:
      "To celebrate the VCH’s 120th anniversary in 2019, counties filled a special VCH Red Box with historical objects.",
    image:
      "",
  },
  {
    title: "Historical Archives",
    description:
      "A digital collection preserving the stories and documents of England’s communities for future generations.",
    image:
      "",
  },
]

export default function Section1() {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tight text-[#1A1333] mb-12">
          Our Projects
        </h2>

        {/* Grid layout */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-none hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-[#1A1333]">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
