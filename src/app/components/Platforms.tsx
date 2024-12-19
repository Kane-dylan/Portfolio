import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type Platforms = readonly string[];

interface PlatformsListProps {
  platforms: Platforms;
  className?: string;
}

/**
 * Renders a list of platforms as badges
 */
function PlatformsList({ platforms, className }: PlatformsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label="List of platforms"
    >
      {platforms.map((platform) => (
        <li key={platform}>
          <Badge className="print:text-[10px]" aria-label={`Platform: ${platform}`}>
            {platform}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface PlatformsProps {
  platforms: Platforms;
  className?: string;
}

/**
 * Platforms section component
 * Displays a list of development platforms as badges
 */
export function Platforms({ platforms, className }: PlatformsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="platforms-section">
        Platforms
      </h2>
      <PlatformsList platforms={platforms} aria-labelledby="platforms-section" />
    </Section>
  );
}
