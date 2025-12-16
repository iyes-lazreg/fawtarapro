import { ArrowRight, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const Hero1 = ({

  badge = "Conforme au fiscalité tunisienne",
  heading = "Logiciel de facturation et de gestion commerciale",
  description = "Gagnez du temps et optimisez votre entreprise avec notre solution complète qui transforme vos opérations quotidiennes en une expérience fluide et performante.",
  buttons = {
    primary: {
      text: "Commander",
      url: "https://www.fawtarapro.com/commander",
    },
    secondary: {
      text: "Voir la démo",
      url: "https://www.fawtarapro.com",
    },
  },
  image = {
    src: "hero.png",
    alt: "Hero section demo image showing interface components",
  },
}) => {
  return (
    <section className="relative py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline" className="mb-4 flex items-center gap-2 border-blue-500 text-blue-600">
                {badge}
                <BadgeCheck className="text-blue-500" />
              </Badge>
            )}
            <h1 className="mb-6 text-gray-900 text-4xl font-bold leading-tight lg:text-6xl">
              {heading}
            </h1>
            <p className="text-gray-600 mb-8 max-w-xl text-lg lg:text-xl">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex  sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              {/* Primary Button */}
              {buttons.primary && (
                     <Button
  asChild
  variant="outline"
  className="text-white !text-white text-xl bg-blue-600 hover:bg-blue-700 h-[50px] w-[150px]"

>
  <a href={buttons.primary.url}>{buttons.primary.text}</a>
</Button>


              )}

              {/* Secondary Button */}
              {buttons.secondary && (
                <Button
                  className="w-full text-xl h-[50px] w-[150px] border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                >
                  <a href={buttons.secondary.url} className="flex items-center gap-2">
                    {buttons.secondary.text}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-96 w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
